'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';
import { whatsappLink } from '@/lib/site';
import { MessageCircle, Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  function toggleFAQ(id: string) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section className="section-faq" id="faq">
      <div className="wrap">
        <div className="faq-split-grid">
          {/* Left Column Graphic & Helper Card */}
          <div className="faq-graphic-box">
            {/* Animated 3D Illustration SVG */}
            <div className="faq-illustration-wrapper">
              <svg
                width="160"
                height="150"
                viewBox="0 0 160 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="faq-3d-svg"
                aria-hidden="true"
              >
                {/* Background Glow */}
                <circle cx="80" cy="75" r="55" fill="url(#faq-glow)" opacity="0.4" />
                
                {/* Floating Chat Bubble (Yellow/Orange) */}
                <g className="floating-bubble-1">
                  <rect x="22" y="30" width="34" height="26" rx="8" fill="#FBBF24" />
                  <path d="M28 56L22 62V56H28Z" fill="#FBBF24" />
                  <circle cx="34" cy="43" r="2.5" fill="#FFFFFF" />
                  <circle cx="41" cy="43" r="2.5" fill="#FFFFFF" />
                  <circle cx="48" cy="43" r="2.5" fill="#FFFFFF" />
                </g>

                {/* Floating Chat Bubble (Green) */}
                <g className="floating-bubble-2">
                  <rect x="108" y="22" width="30" height="24" rx="8" fill="#10B981" />
                  <path d="M130 46L134 52V46H130Z" fill="#10B981" />
                  <line x1="116" y1="32" x2="130" y2="32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="116" y1="38" x2="125" y2="38" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Giant 3D Blue Question Mark */}
                <g filter="url(#shadow-3d)">
                  {/* Extrusion / 3D Shadow layer */}
                  <path
                    d="M74 38C64.6 38 57 45.6 57 55H67C67 51.1 70.1 48 74 48C77.9 48 81 51.1 81 55C81 58.9 77.9 62 74 62C69 62 65 66 65 71V79H75V73.4C83.2 71.9 89 64.7 89 55C89 45.6 82.3 38 74 38ZM65 89H75V99H65V89Z"
                    fill="#1E40AF"
                    transform="translate(4, 4)"
                  />
                  {/* Front Vibrant Blue Face */}
                  <path
                    d="M74 38C64.6 38 57 45.6 57 55H67C67 51.1 70.1 48 74 48C77.9 48 81 51.1 81 55C81 58.9 77.9 62 74 62C69 62 65 66 65 71V79H75V73.4C83.2 71.9 89 64.7 89 55C89 45.6 82.3 38 74 38ZM65 89H75V99H65V89Z"
                    fill="url(#blue-gradient)"
                  />
                  <circle cx="70" cy="94" r="5" fill="#38BDF8" />
                </g>

                {/* Illustrated Candidate Avatar (Bottom) */}
                <g>
                  {/* Head */}
                  <circle cx="80" cy="120" r="14" fill="#F87171" />
                  {/* Shoulders */}
                  <path d="M60 148C60 137 68.9 134 80 134C91.1 134 100 137 100 148H60Z" fill="#1E3A8A" />
                  {/* Hair */}
                  <path d="M68 116C68 110 74 106 80 106C86 106 92 110 92 116H68Z" fill="#1E293B" />
                </g>

                <defs>
                  <radialGradient id="faq-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 75) rotate(90) scale(55)">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="blue-gradient" x1="57" y1="38" x2="89" y2="99" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#0284C7" />
                  </linearGradient>
                  <filter id="shadow-3d" x="40" y="25" width="80" height="95" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.3" />
                  </filter>
                </defs>
              </svg>
            </div>

            <h3>Still have questions?</h3>
            <p>
              Can&apos;t find the exact answer you&apos;re looking for? Reach out to our lead tutor directly
              on WhatsApp for rapid, personalized guidance.
            </p>
            
            <a
              href={whatsappLink('Hello SafetyScript, I have a few questions regarding your NEBOSH mentorship.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald btn-glow"
              style={{ width: '100%' }}
            >
              <MessageCircle size={16} fill="currentColor" />
              <span>Ask on WhatsApp ↗</span>
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <div style={{ marginBottom: 26 }}>
              <div className="badge-pill badge-emerald">
                <span className="pulse-dot" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--navy)', margin: '10px 0 8px', letterSpacing: '-0.6px' }}>
                Got Questions? We&apos;ve Got <span className="text-gradient">Answers</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
                Find answers to common questions about our NEBOSH study support and mentorship.
              </p>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.id}>
                    <button
                      className="faq-trigger"
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon-indicator">
                        {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
