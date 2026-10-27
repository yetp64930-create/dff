import { site, whatsappLink } from '@/lib/site';

export function CallToAction() {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-inner">
        <div>
          <div className="tag dark">Let&apos;s get started</div>
          <h2>Need help with your NEBOSH paper?</h2>
          <p>
            Talk directly to our experts about your IG1 exam, interview coaching, or IG2 report
            guidance.
          </p>
        </div>
        <div className="hero-actions" style={{ margin: 0 }}>
          <a
            className="button green"
            href={whatsappLink('Hello SafetyScript, I would like to get started with NEBOSH support.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us ↗
          </a>
          <a className="button blue" href={`tel:${site.phoneInternational}`}>
            ☎ &nbsp; Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

