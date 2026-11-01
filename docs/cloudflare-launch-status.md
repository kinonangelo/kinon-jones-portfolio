# Cloudflare launch status

Last checked: 1 November 2026. Launch is not yet complete.

## Verified

- Hosting: Cloudflare Workers with OpenNext.
- Working deployment: https://kinon-jones-portfolio.kinon-angelo.workers.dev
- Existing GitHub repository: https://github.com/kinonangelo/kinon-jones-portfolio
- Production branch: `main`; deployment configuration pushed as `2d10dfe`.
- Approved portfolio preserved separately in commit `a7503d9`.
- Lint, TypeScript, production build and OpenNext build passed.
- Dependency audit reported zero vulnerabilities.
- Deployment checks passed for 12 pages, 151 asset URLs, canonical/Open Graph
  URLs, sitemap, robots, private-file protection and video byte-range responses.
- CV validation and download passed; returned PDF SHA-256 matched the original:
  `29be6ebd9f0a29fca47c92239eb7d6c72e4e923d5e86c3025e7e34762576c0b7`.
- D1 saved synthetic test requests before downloading; consent remained false.
- Browser checks verified Email opening, copy-success feedback, webmail choices,
  safe external-link attributes, Escape dismissal, CV submission and teaser playback.
- Actual clipboard contents and a mobile viewport still need final verification.
- No website wording, styles, layout, animations or media were changed.

## Pending owner actions

1. Compare Squarespace's full DNS inventory with the imported Cloudflare records
   documented in `cloudflare-deployment.md`. Preserve any additional service records.
2. In Squarespace Domains → kinonjones.uk → DNS → Domain Nameservers → Use Custom
   Nameservers, replace the existing nameservers with:
   - `kellen.ns.cloudflare.com`
   - `martha.ns.cloudflare.com`
   Follow Squarespace's DNSSEC/account-verification prompts. Registration remains
   with Squarespace. Public DNS still returned `nsc1`–`nsc4.squarespacedns.com`
   at the latest check; no delegation change is claimed.
3. Complete GitHub sign-in and review the Cloudflare Workers and Pages app grant,
   restricting repository access to `kinonangelo/kinon-jones-portfolio`.
   The connection currently stops at GitHub sign-in; automatic builds are not
   configured or verified yet.

## Remaining technical work

- Finish Workers Builds with the settings in `cloudflare-deployment.md`, then
  verify a successful deployment triggered by a GitHub push.
- After delegation and zone activation, bind `kinonjones.uk` and
  `www.kinonjones.uk` to the existing Worker, replacing only their website records.
- Enable/verify HTTPS, certificate activation and HTTP redirect.
- Verify the implemented www 308 redirect preserves paths and query parameters.
- Repeat production checks against the actual domain and finish mobile checks.

## Deployment files changed

The focused deployment commit contains exactly:

- `.gitignore`
- `.node-version`
- `app/api/cv-request/route.ts`
- `app/components/cv-request.tsx` (type annotation only)
- `app/layout.tsx` (technical metadata only)
- `app/robots.ts`
- `app/sitemap.ts`
- `cloudflare-env.d.ts`
- `cloudflare/media.ts`
- `cloudflare/migrations/0001_cv_requests.sql`
- `cloudflare/pdf.d.ts`
- `cloudflare/worker.ts`
- `docs/cloudflare-deployment.md`
- `docs/cv-requests.md`
- `eslint.config.mjs`
- `open-next.config.ts`
- `package-lock.json`
- `package.json`
- `scripts/verify-deployment.mjs`
- `tsconfig.json`
- `wrangler.jsonc`

This status file is a subsequent documentation-only addition. Historical local
`scripts/teams-film/` work remains uncommitted and was not included in deployment.
