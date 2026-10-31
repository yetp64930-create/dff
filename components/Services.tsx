import { services } from '@/data/services';
import { whatsappLink } from '@/lib/site';
import { BookOpen, Users, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section className="section-services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-pill badge-emerald">
            <span className="pulse-dot" />
            <span>Core Expertise</span>
          </div>
          <h2>
            NEBOSH Support, <br />
            <span className="text-gradient">All in One Place</span>
          </h2>
          <p>
            Get clear, comprehensive mentorship designed to help you understand complex concepts,
            avoid common examiner traps, and pass with flying colors.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item) => (
            <article className="service-card" key={item.id}>
              {/* Image Box with Zoom Effect */}
              <div className="service-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={400}
                  height={220}
                />
                <span className="service-tag-badge">{item.tag}</span>
              </div>

              <div className="service-card-body">
                {/* Floating Icon Circle */}
                <div
                  className="service-icon-circle"
                  style={{ backgroundColor: item.color, color: '#ffffff' }}
                >
                  {item.id === 'ig1-exam-coaching' && <BookOpen size={24} />}
                  {item.id === 'closing-interview' && <Users size={24} />}
                  {item.id === 'ig2-report-feedback' && <FileText size={24} />}
                </div>

                <h3>{item.title}</h3>
                <p className="card-desc">{item.text}</p>

                {/* Checklist */}
                <ul className="service-checklist">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={16} style={{ color: item.color }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <a
                    href={whatsappLink(`Hello SafetyScript, I would like to learn more about: ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-pill-btn"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    <span>{item.linkText}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
