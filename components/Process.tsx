import { processSteps } from '@/data/process';

export function Process() {
  return (
    <section className="process" id="how">
      <div className="wrap">
        <div className="tag">A clear, structured process</div>
        <div className="head">
          <h2>How We Help You</h2>
          <p>
            From your first enquiry through to your final IG2 submission, here is how our mentoring
            works.
          </p>
        </div>
        <div className="steps">
          {processSteps.map((step) => (
            <div className="step" key={step.title}>
              <span className="number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

