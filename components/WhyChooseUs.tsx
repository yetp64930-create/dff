import { site, whatsappLink } from '@/lib/site';

const highlights = [
  'Experienced NEBOSH Trainers',
  'Cost-effective Student Pricing',
  'Comprehensive IG1 & IG2 Support',
  'Rigorous Closing Interview Practice',
  'Clear & Prompt Communication',
  'Dedicated 1-on-1 Guidance Sessions',
];

export function WhyChooseUs() {
  return (
    <section className="soft" id="why">
      <div className="wrap split">
        <div className="visual" aria-label="Illustration of a NEBOSH safety report">
          <div className="document">
            <small>{site.name.toUpperCase()}</small>
            <strong>
              Health &amp; Safety
              <br />
              Risk Assessment
            </strong>
            <div className="line" />
            <div className="line" style={{ width: '75%' }} />
            <div className="line" style={{ marginTop: 25 }} />
            <div className="line" />
            <div className="line" style={{ width: '65%' }} />
            <div className="line" style={{ marginTop: 25 }} />
            <div className="line" style={{ width: '80%' }} />
          </div>
          <div className="stamp">IG1 &nbsp; / &nbsp; IG2 SUPPORT</div>
        </div>

        <div>
          <div className="tag dark">Why choose us</div>
          <h2>Practical help for your NEBOSH journey.</h2>
          <p>
            Whether preparing your open-book scenario responses, practicing for your closing
            interview, or finalizing your IG2 workplace risk assessment, our team provides
            step-by-step guidance.
          </p>
          <div className="checks">
            {highlights.map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
          <a
            className="button blue"
            href={whatsappLink('Hello SafetyScript, I would like to discuss my requirements.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss Your Requirements ↗
          </a>
        </div>
      </div>
    </section>
  );
}
