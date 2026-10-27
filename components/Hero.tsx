import { site, whatsappLink } from '@/lib/site';
import { ConsultationForm } from '@/components/Interactive';

export function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="wrap hero-grid">
        <div>
          <div className="tag">NEBOSH support for learners in Pakistan</div>
          <h1>
            NEBOSH Paper &amp;
            <br />
            Report Help <span>You Can Count On.</span>
          </h1>
          <p>
            From IG1 open-book paper support to closing interview preparation and IG2 risk
            assessment report guidance, get practical, expert assistance at every step of your
            NEBOSH journey.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href={whatsappLink('Hello SafetyScript, I would like immediate NEBOSH support.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us Now ↗
            </a>
            <a className="button outline" href={`tel:${site.phoneInternational}`}>
              ☎ &nbsp; Call {site.phoneDisplay}
            </a>
          </div>
          <div className="hero-checks">
            <span>IG1 &amp; IG2 support</span>
            <span>Interview preparation</span>
            <span>Affordable assistance</span>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}

