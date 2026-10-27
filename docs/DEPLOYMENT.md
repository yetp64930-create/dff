# Deployment guide

1. Install Node.js 20.9+ and run `npm install`.
2. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS website origin in your hosting platform's environment settings.
3. Run `npm run typecheck` and `npm run build`; fix any errors before release.
4. Deploy to a Node-compatible Next.js provider using its standard Next.js settings.
5. Open the final URL and verify navigation, responsive layout, call links, WhatsApp links, the consultation form, metadata, `/robots.txt` and `/sitemap.xml`.

The project contains only the frontend. WhatsApp links use the visitor's device/browser; an actual on-site live chat provider, form database, analytics or booking backend would require a separate integration. Do not put secret keys in `NEXT_PUBLIC_` variables.
