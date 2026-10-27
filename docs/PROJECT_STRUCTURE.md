# Project structure

```text
app/
  globals.css         Site-wide responsive styles and design tokens
  layout.tsx          Root HTML and metadata
  page.tsx            Server-rendered homepage and editable content arrays
  robots.ts           /robots.txt
  sitemap.ts          /sitemap.xml
components/
  Interactive.tsx     Client-side menu, consultation form and chat panel
lib/
  site.ts             Brand, phone, WhatsApp, metadata and canonical URL
public/               Add images and downloadable public assets here
docs/                 Project guides
.env.example          Public domain configuration example
package.json          Dependencies and commands
tsconfig.json         TypeScript configuration
```

The homepage is rendered on the server. Interactive elements are isolated in a client component. Edit content in the arrays near the top of `app/page.tsx`; edit global details in `lib/site.ts`.
