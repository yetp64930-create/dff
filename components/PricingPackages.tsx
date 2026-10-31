import { packages } from '@/data/packages';
import { whatsappLink } from '@/lib/site';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function PricingPackages() {
  return (
    <section className="section-packages" id="packages">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-pill badge-emerald">
            <span className="pulse-dot" />
            <span>Our Packages</span>
          </div>
          <h2>
            Choose the Right Support for <br />
            <span className="text-gradient">Your Needs</span>
          </h2>
          <p>
            Flexible and personalized mentorship options for students across Pakistan and overseas.
            Transparent guidance with no hidden charges.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.badge && (
                <div className="package-top-badge" style={{ backgroundColor: pkg.color }}>
                  <Sparkles size={12} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <h3 style={{ color: pkg.color }}>{pkg.name}</h3>

              <div className="package-price-wrap">
                <span className="price-from">{pkg.pricePrefix || 'Starting From'}</span>
                <div className="price-num" style={{ color: pkg.color }}>
                  {pkg.price}
                </div>
                {pkg.priceNote && (
                  <div
                    className="price-note-pill"
                    style={{ color: pkg.color, backgroundColor: `${pkg.color}18` }}
                  >
                    ✓ {pkg.priceNote}
                  </div>
                )}
              </div>

              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={16} style={{ color: pkg.color, flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: 18 }}>
                <a
                  href={whatsappLink(`Hello SafetyScript, I would like to enrol in the "${pkg.name}" package (${pkg.pricePrefix ? `${pkg.pricePrefix} ` : ''}${pkg.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-action-btn"
                  style={{ borderColor: pkg.color, color: pkg.color }}
                >
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
