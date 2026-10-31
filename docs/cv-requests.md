# CV requests

The homepage opens an accessible native dialog. First name, last name and email are required; organisation, role and contact consent are optional. Consent starts unchecked. Both the browser and the POST endpoint validate input. No email is sent automatically.

`POST /api/cv-request` saves the request before returning the exact supplied PDF as an attachment. The PDF is stored at `private/cv/kinon-jones-cv.pdf`, outside `public`, and is included in the Next.js server output. Its SHA-256 is `29BE6EBD9F0A29FCA47C92239EB7D6C72E4E923D5E86C3025E7E34762576C0B7`.

## Review saved requests locally

Requests are appended to `private/requests/cv-requests.jsonl` (one JSON object per line). The directory is excluded from Git and has no web route. Records include the submitted fields, a UUID, UTC timestamp, explicit contact-consent boolean, consent wording and privacy-notice version. Only follow up with people whose `contactConsent` is `true`.

From the project directory in PowerShell:

```powershell
Get-Content -LiteralPath 'private/requests/cv-requests.jsonl' |
  ForEach-Object { $_ | ConvertFrom-Json } |
  Select-Object requestedAt, firstName, lastName, email, company, role, contactConsent |
  Format-Table -AutoSize
```

## Hosting

This first version uses a Node server with a writable, persistent private directory. Set `CV_REQUESTS_DIR` to an absolute directory on persistent storage for deployment, restrict access to the site owner, and back it up appropriately. Do not point it at `public`, a public bucket, a shared folder, or ephemeral `/tmp` storage. Never commit request records.

Serverless/read-only deployments need a durable storage adapter before this feature is deployed there. A directory environment variable alone does not make ephemeral storage persistent. The endpoint fails rather than silently dropping requests when storage is unavailable; common serverless environments without an explicit storage configuration are rejected. It does not return the PDF if saving fails.

The modal privacy wording is supplied by the owner. No analytics, mailing-list service or external request processor is added. Remove records when they are no longer needed; the owner manages retention and access to any production storage.
