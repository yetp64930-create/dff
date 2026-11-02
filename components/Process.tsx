'use client';

import { useEffect, useRef, useState } from 'react';
import { processSteps } from '@/data/process';
import { MessageSquare, CheckSquare, UserCheck, Trophy, ArrowRight } from 'lucide-react';

export function Process() {
  const icons = [MessageSquare, CheckSquare, UserCheck, Trophy];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section-how ${isVisible ? 'is-revealed' : ''}`} id="how" ref={sectionRef}>
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
                <div
                  className="timeline-step-wrapper"
                  key={step.stepNumber}
                  style={{ animationDelay: `${index * 140}ms` }}
                >
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

                  {/* Animated Flow Connector (Visible between steps on desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="step-connector-flow" aria-hidden="true">
                      <div className="connector-line-track">
                        <div className="connector-line-pulse" />
                      </div>
                      <div className="connector-arrow-head">
                        <ArrowRight size={18} />
                      </div>
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
