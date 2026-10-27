import { faqs } from '@/data/faqs';
import { whatsappLink } from '@/lib/site';

export function FAQ() {
  return (
    <section className="soft" id="faq">
      <div className="wrap faqgrid">
        <div>
          <div className="tag dark">Frequently asked questions</div>
          <h2>
            Questions?
            <br />
            We&apos;re here to help.
          </h2>
          <p>Find out more about our NEBOSH mentorship and support process.</p>
          <a
            className="button blue"
            style={{ marginTop: 24 }}
            href={whatsappLink('Hello SafetyScript, I have a few questions before getting started.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp ↗
          </a>
        </div>
        <div>
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0 ? true : undefined}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

