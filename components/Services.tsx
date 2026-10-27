import { services } from '@/data/services';
import { whatsappLink } from '@/lib/site';

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="tag dark">What we offer</div>
        <div className="head">
          <h2>
            NEBOSH Support, <br />
            All in One Place
          </h2>
          <p>
            Get clear, tailored mentorship for your IG1 paper, closing interview, and IG2 risk
            assessment report.
          </p>
        </div>
        <div className="services">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a
                href={whatsappLink(`Hello, I would like to enquire about: ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.link} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

