import { randomUUID } from "node:crypto";
import { mkdir, open, readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const consentText =
  "I’m happy for Kinon to contact me regarding relevant opportunities or to follow up on my CV request.";

export async function POST(request: Request) {
  const headers = { "Cache-Control": "no-store" };
  const fail = (message: string, status: number) =>
    Response.json({ error: message }, { status, headers });

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return fail("Please submit this form from the portfolio website.", 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return fail("Please submit the CV request form.", 415);
  }

  let input: Record<string, unknown>;
  try {
    // Bound the actual body, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return fail("Please complete the required fields.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8192) {
        await reader.cancel();
        return fail("The request is too large.", 413);
      }
      chunks.push(value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail("Please complete the required fields.", 400);
    }
    input = parsed as Record<string, unknown>;
  } catch {
    return fail("Please complete the required fields.", 400);
  }

  const field = (key: string, max: number, required = false) => {
    const value = input[key];
    if (value === undefined && !required) return "";
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (
      (required && !trimmed) ||
      trimmed.length > max ||
      /[\u0000-\u001f\u007f]/.test(trimmed)
    )
      return null;
    return trimmed;
  };
  const firstName = field("firstName", 100, true);
  const lastName = field("lastName", 100, true);
  const email = field("email", 254, true);
  const company = field("company", 200);
  const role = field("role", 200);
  if ([firstName, lastName, email, company, role].includes(null)) {
    return fail("Please check the required fields and field lengths.", 400);
  }
  const [local, domain, extra] = email!.split("@");
  if (
    !local ||
    !domain ||
    extra !== undefined ||
    local.length > 64 ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local) ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..") ||
    !domain.includes(".") ||
    domain
      .split(".")
      .some(
        (label) =>
          !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/.test(label),
      )
  ) {
    return fail("Please enter a valid email address.", 400);
  }
  if (input.consent !== undefined && typeof input.consent !== "boolean") {
    return fail("Please check your contact preference.", 400);
  }

  try {
    const pdf = await readFile(
      path.join(process.cwd(), "private/cv/kinon-jones-cv.pdf"),
    );
    // Use a persistent private volume on a deployed Node server. Fail closed
    // rather than using ephemeral storage on common serverless platforms.
    if (
      (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) &&
      !process.env.CV_REQUESTS_DIR
    ) {
      throw new Error("Persistent request storage is not configured");
    }
    const directory =
      process.env.CV_REQUESTS_DIR ||
      path.join(process.cwd(), "private/requests");
    await mkdir(directory, { recursive: true, mode: 0o700 });
    const file = await open(
      path.join(directory, "cv-requests.jsonl"),
      "a",
      0o600,
    );
    try {
      await file.writeFile(
        JSON.stringify({
          id: randomUUID(),
          requestedAt: new Date().toISOString(),
          firstName,
          lastName,
          email,
          company,
          role,
          contactConsent: input.consent === true,
          consentText,
          privacyNoticeVersion: "2026-09-27",
        }) + "\n",
      );
      await file.sync();
    } finally {
      await file.close();
    }
    return new Response(pdf, {
      headers: {
        ...headers,
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Kinon-Jones-Aerospace-Structural-Engineering-CV.pdf"',
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return fail(
      "Your request could not be saved. Please try again shortly or contact me by email.",
      503,
    );
  }
}
