import { site, whatsappLink } from '@/lib/site';
import { MobileMenu } from '@/components/Interactive';

export function Logo() {
  return (
    <a href="#" className="logo" aria-label={`${site.name} Homepage`}>
      <span className="logo-icon">S</span>
      <span>
        {site.name}
        <small>NEBOSH HELP CENTRE</small>
      </span>
    </a>
  );
}

export function Header() {
  return (
    <>
      <div className="top">
        <div className="wrap">
          <span>NEBOSH IG1 Paper &amp; IG2 Report Support</span>
          <div className="topright">
            <a href={`tel:${site.phoneInternational}`}>☎ {site.phoneDisplay}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="wrap nav">
          <Logo />
          <MobileMenu />
          <a
            className="button"
            href={whatsappLink('Hello, I would like to book a free consultation.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Consultation ↗
          </a>
        </div>
      </header>
    </>
  );
}

