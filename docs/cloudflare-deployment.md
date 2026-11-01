# Cloudflare deployment

Production origin: `https://kinonjones.uk`. Squarespace remains the registrar.
Repository: `kinonangelo/kinon-jones-portfolio`, production branch `main`, root `/`.

## Runtime

Cloudflare Workers with the OpenNext adapter retains the Next.js build pipeline.
The static-asset incremental cache serves prerendered pages; no R2 subscription,
revalidation queue, or external server is required. `IMAGES` handles the existing
Next.js image URLs. Existing media is uploaded unchanged as Workers assets.

The CV POST endpoint stores validated requests in private D1 (`CV_REQUESTS`).
The exact PDF is a private binary Worker module (`CV_PDF`), not a public asset.
No public route reads request records. Plain `next dev` / `next start` continues
to use the existing private local JSONL file. Cloudflare never falls back to
ephemeral local storage if the D1 write fails.

## Initial setup (authenticated account required)

1. Inspect the account's existing Workers, Pages projects, D1 databases and zones
   before creating resources. Reuse matching resources and their actual IDs.
2. Authenticate Wrangler through its normal browser OAuth flow; never commit tokens.
3. Create or select `kinon-jones-cv-requests` in D1 and record its actual
   `database_id` in `wrangler.jsonc`.
4. Apply `cloudflare/migrations` remotely with `npm run db:migrate:remote`.
5. Run `npm run build:cloudflare` and `npm run deploy:cloudflare`.
6. Verify the returned workers.dev URL before adding the custom domain.

## Checks and local Workers preview

```sh
npm ci
npm run lint
npm run typecheck
npm run build:cloudflare
npm run db:migrate:local
npm run preview:cloudflare
```

Local Wrangler D1 data lives under `.wrangler/` and is ignored by Git.
There are no application API-key secrets to configure. `CV_REQUESTS`, `ASSETS`
and `IMAGES` are platform bindings. Account credentials stay outside the repo.

## GitHub automatic deployment

In the existing Worker's Settings → Builds, connect the existing GitHub repo:

- Repository: `kinonangelo/kinon-jones-portfolio`
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build:cloudflare`
- Deploy command: `npm run db:migrate:remote && npm run deploy:cloudflare`
- Node version: 24 (`NODE_VERSION` build variable if required)
- Keep non-production branch deployment disabled unless isolated storage is configured.

The GitHub/Cloudflare integration must be authorized in the account. Do not treat
these written settings as proof that the integration has been connected.

## Domain and DNS

Add/reuse the `kinonjones.uk` zone. Preserve the complete existing DNS inventory,
including email and verification records, before changing delegation. Public DNS
checks alone cannot enumerate all DKIM or service-verification records.

Add apex and www custom domains to the same Worker after the zone is active.
The Worker permanently redirects www to `https://kinonjones.uk`, retaining the
path and query. All requests run through the Worker so the redirect includes
assets. Enable the zone's Always Use HTTPS setting as well.

Record nameservers only after Cloudflare assigns them. The owner changes them
in Squarespace and handles any DNSSEC deactivation required before delegation.
Do not transfer registration or delete existing DNS records indiscriminately.

Assigned by Cloudflare for this zone: `kellen.ns.cloudflare.com` and
`martha.ns.cloudflare.com`. Assignment is verified; registrar delegation must
still be checked separately.

The initial import contained four Squarespace apex A records, the `www` CNAME,
the `_domainconnect` CNAME (kept DNS-only), and these DNS-only TXT records:

- `@`: `v=spf1 -all`
- `_domainkey`: `v=DKIM1; p=`
- `_dmarc`: `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s`

No MX record was found. The owner must check the registrar's complete inventory
for additional custom records before delegation. Only apex/www website records
are to be replaced when binding the Worker.

## Verification before declaring launch complete

- All five main pages and all seven project pages, including direct refreshes.
- Images, fonts, favicon, video playback/range responses and poster images.
- Existing Email choices, copying, LinkedIn, CV validation and exact PDF hash.
- D1 record saved before each successful CV response; no public record access.
- Desktop/mobile layout and existing animations.
- Canonicals, Open Graph URLs, robots and all sitemap URLs use kinonjones.uk.
- Active Cloudflare nameservers, HTTPS, HTTP redirect, www path/query redirect.
- Successful deployment triggered by a production-branch GitHub push.

No account setup, nameserver change, public deployment or HTTPS verification is
implied by the presence of this configuration; see the launch status report.
