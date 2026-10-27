import type { Metadata } from 'next';
import { site, siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: '/', siteName: site.name, locale: 'en_PK', type: 'website' },
  twitter: { card: 'summary', title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
