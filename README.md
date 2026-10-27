# SafetyScript — NEBOSH Website Frontend

A responsive Next.js App Router and TypeScript frontend for the SafetyScript NEBOSH help website. The archive includes source code and editable project documentation.

## Run locally

1. Install Node.js 20.9 or newer (Node 22 LTS recommended).
2. Open a terminal in this folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your own domain (use `http://localhost:3000` for local development).
5. Run `npm run dev`, then open `http://localhost:3000`.
6. Before deploying, run `npm run typecheck` and `npm run build`.

Do not include `.env.local`, `.next` or `node_modules` in version control. This archive has no package lock; `npm install` generates one. Keep the generated lockfile in the project repository.

## What's included

- Responsive homepage, services, process, FAQ, sample reviews and contact sections.
- WhatsApp and telephone links to 0327 8090456.
- A consultation form and chat panel that open WhatsApp. The site does not store form responses, send messages itself, or include a live-chat backend.
- Next.js metadata, canonical URL, Open Graph, robots.txt and sitemap.xml.
- Editable Markdown guides in `docs/`.

See [project structure](docs/PROJECT_STRUCTURE.md), [design system](docs/DESIGN_SYSTEM.md), [SEO guide](docs/SEO.md), [content guide](docs/CONTENT.md), and [deployment](docs/DEPLOYMENT.md).

## Before a public launch

Replace the placeholder domain and example testimonials, verify all business claims, agree written guarantee terms, and confirm that all marketing and service descriptions accurately reflect your actual offerings. The site is independent and does not claim NEBOSH endorsement.
