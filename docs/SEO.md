# SEO setup and editing

## Already included

- Server-rendered HTML, one H1 and semantic sections.
- Configurable title and description in `lib/site.ts`.
- Canonical URL and Open Graph / Twitter metadata in `app/layout.tsx`.
- `app/robots.ts` and `app/sitemap.ts` generate the standard routes.
- Responsive CSS and no external fonts or image downloads.

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` to the real public HTTPS domain, without a trailing slash. `https://example.com` is only a placeholder.
2. Verify the homepage title and description match the real service and location. Avoid misleading claims or keyword stuffing.
3. Replace sample reviews with genuine, approved reviews and verify rankings, numbers and guarantee terms.
4. Deploy and check `/robots.txt`, `/sitemap.xml`, the canonical URL, mobile appearance and page titles on the live domain.
5. Add the site to Google Search Console, verify ownership and submit its sitemap.
6. Optionally add an accurately branded Open Graph image in `public/` and reference it in `app/layout.tsx`. Describe real images with useful alt text; mark decorative images appropriately.
7. Create separate useful service pages if you need to target distinct searches, each with its own relevant title, description and canonical URL.
8. Check Core Web Vitals and accessibility with Lighthouse after deployment.

SEO is an ongoing process; metadata alone cannot guarantee rankings. Do not add fake review structured data or fabricated business information.
