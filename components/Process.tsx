import { processSteps } from '@/data/process';
import { MessageSquare, CheckSquare, UserCheck, Trophy, ArrowRight } from 'lucide-react';

export function Process() {
  const icons = [MessageSquare, CheckSquare, UserCheck, Trophy];

  return (
    <section className="section-how" id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-pill badge-emerald">
            <span className="pulse-dot" />
            <span>Step by Step</span>
          </div>
          <h2>
            How It Works <br />
            <span className="text-gradient">Simple &amp; Clear Process</span>
          </h2>
          <p>
            From your very first enquiry to your successful results day, our structured 4-step
            mentorship journey guides you every step of the way.
          </p>
        </div>

        <div className="timeline-steps-container">
          <div className="timeline-steps">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div className="timeline-step-wrapper" key={step.stepNumber}>
                  <div className="timeline-step-card">
                    {/* Step Number Circle */}
                    <div
                      className="step-number-bubble"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>

                    {/* Step Icon & Title */}
                    <div className="step-icon-header">
                      <div
                        className="step-icon-mini"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <h3>{step.title}</h3>
                    </div>

                    <p>{step.description}</p>
                  </div>

                  {/* Flow Arrow (Visible on desktop between steps) */}
                  {index < processSteps.length - 1 && (
                    <div className="step-connector-arrow" aria-hidden="true">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
