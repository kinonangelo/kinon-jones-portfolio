// The adapter generates this module during `npm run build:cloudflare`.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- absent before build, present afterwards
// @ts-ignore -- generated only after the Next.js build
import handler from "../.open-next/worker.js";
import cvPdf from "../private/cv/kinon-jones-cv.pdf";
import { serveMedia } from "./media";

const worker = {
  async fetch(request: Request, env: CloudflareEnv, ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.hostname === "www.kinonjones.uk" ||
        (url.hostname === "kinonjones.uk" && url.protocol === "http:")) {
      url.protocol = "https:";
      url.hostname = "kinonjones.uk";
      url.port = "";
      return Response.redirect(url.href, 308);
    }
    // Preserve Range/conditional headers for videos and unchanged static files.
    if (url.pathname.startsWith("/media/") && /\.(mp4|webm)$/.test(url.pathname)) {
      return serveMedia(request, env.ASSETS!);
    }
    if (["/media/", "/images/", "/_next/static/"].some((prefix) => url.pathname.startsWith(prefix)) ||
        url.pathname === "/favicon.ico") {
      return env.ASSETS!.fetch(request);
    }
    // Keep the unchanged PDF inside the Worker bundle, never public assets.
    return handler.fetch(request, { ...env, CV_PDF: cvPdf, CV_REQUEST_ORIGIN: url.origin }, ctx);
  },
};

export default worker;
