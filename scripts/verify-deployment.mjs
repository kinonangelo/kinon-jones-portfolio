import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const base = new URL(process.argv[2] || "http://127.0.0.1:8787");
const slugs = [...(await readFile("app/data/projects.ts", "utf8"))
  .matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const routes = ["/", "/about", "/projects", "/experience", "/contact",
  ...slugs.map((slug) => `/projects/${slug}`)];
const resources = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const expected = `https://kinonjones.uk${route === "/" ? "" : route}`;
  assert.equal(html.match(/<link rel="canonical" href="([^"]+)/)?.[1], expected, route);
  assert.equal(html.match(/<meta property="og:url" content="([^"]+)/)?.[1], expected, `OG ${route}`);
  assert.ok(!/https?:\/\/(?:localhost|127\.0\.0\.1)/.test(html), `Local URL in ${route}`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"<>]+)"/g)) {
    const url = match[1].replaceAll("&amp;", "&");
    if (/\.(?:js|css|woff2?|png|webp|jpg|svg|ico)(?:\?|$)/.test(url) || url.startsWith("/_next/image")) {
      resources.add(url);
    }
  }
}
const files = await readdir("public", { recursive: true, withFileTypes: true });
for (const file of files) {
  if (file.isFile()) resources.add("/" + path.relative("public", path.join(file.parentPath, file.name)).split(path.sep).join("/"));
}
for (const url of resources) {
  const response = await fetch(new URL(url, base), { method: "HEAD" });
  assert.equal(response.status, 200, url);
}
const robots = await (await fetch(new URL("/robots.txt", base))).text();
assert.ok(robots.includes("Allow: /") && robots.includes("https://kinonjones.uk/sitemap.xml"));
const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
assert.equal([...sitemap.matchAll(/<loc>/g)].length, routes.length);
assert.ok(!/localhost|workers\.dev/.test(sitemap));
const video = [...resources].find((url) => url.endsWith("/teams-model-web.mp4"));
const range = await fetch(new URL(video, base), { headers: { Range: "bytes=0-1023" } });
assert.equal(range.status, 206, "Video range support");
assert.equal((await range.arrayBuffer()).byteLength, 1024);

const input = { firstName: "Deployment", lastName: "Verification", email: "portfolio-test@example.com",
  company: "Automated deployment test", role: "Test", consent: false };
const post = (body, origin = base.origin) => fetch(new URL("/api/cv-request", base), {
  method: "POST", headers: { "Content-Type": "application/json", Origin: origin }, body: JSON.stringify(body),
});
for (const [body, status] of [[{}, 400], [{ ...input, email: "bad@" }, 400],
  [{ ...input, consent: "yes" }, 400], [{ ...input, company: "x".repeat(9000) }, 413]]) {
  assert.equal((await post(body)).status, status, "CV validation");
}
assert.equal((await post(input, "https://example.com")).status, 403, "Cross-origin rejection");
const response = await post(input);
assert.equal(response.status, 200, "CV submission");
assert.equal(response.headers.get("content-type"), "application/pdf");
assert.equal(response.headers.get("cache-control"), "no-store");
const pdf = Buffer.from(await response.arrayBuffer());
assert.ok(pdf.equals(await readFile("private/cv/kinon-jones-cv.pdf")), "Unchanged CV bytes");
for (const url of ["/private/requests/cv-requests.jsonl", "/private/cv/kinon-jones-cv.pdf"]) {
  assert.equal((await fetch(new URL(url, base))).status, 404, "Private file not public");
}
console.log(JSON.stringify({ base: base.origin, pages: routes.length, assets: resources.size,
  sitemap: "passed", canonicals: "passed", videoRange: "passed", cvValidation: "passed",
  cvSha256: createHash("sha256").update(pdf).digest("hex"),
  testRecord: "portfolio-test@example.com (consent false; clearly marked deployment test)" }, null, 2));
