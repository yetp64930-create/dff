import { whatsappLink } from '@/lib/site';
import { MessageCircle, Play, CheckCircle2, ArrowRight, Target, Briefcase, Rocket } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="section-cta-banner" id="contact">
      <div className="wrap">
        <div className="cta-banner-box">
          {/* Safety Helmet Visual Left */}
          <div className="cta-helmet-wrapper">
            <div className="cta-helmet-visual">
              <img
                src="/images/cta-helmet.jpg"
                alt="NEBOSH Safety Helmet"
                className="cta-helmet-img"
                loading="lazy"
                width={280}
                height={220}
              />
              <div className="helmet-label-tag">NEBOSH</div>
            </div>
          </div>

          {/* Middle Content */}
          <div className="cta-banner-content">
            <div className="badge-pill badge-dark">
              <span className="pulse-dot" />
              <span>Ready to Get Started?</span>
            </div>
            <h2>
              Take the Next Step in Your <br />
              <span className="text-gradient-emerald">NEBOSH Journey</span>
            </h2>
            <p>
              Get expert guidance and personalized support today from qualified safety mentors.
            </p>

            <div className="cta-actions">
              <a
                href={whatsappLink('Hello SafetyScript, I am ready to get started with NEBOSH support.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald btn-glow"
              >
                <MessageCircle size={18} fill="currentColor" />
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </a>

              <a href="#services" className="btn btn-ghost-light">
                <div className="btn-play-icon">
                  <Play size={12} fill="currentColor" />
                </div>
                <span>Explore Services</span>
              </a>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="cta-highlights-column">
            <div className="cta-highlight-pill">
              <div className="cta-highlight-icon">
                <Target size={18} />
              </div>
              <span>Expert Support</span>
            </div>

            <div className="cta-highlight-pill">
              <div className="cta-highlight-icon">
                <Briefcase size={18} />
              </div>
              <span>Practical Guidance</span>
            </div>

            <div className="cta-highlight-pill">
              <div className="cta-highlight-icon">
                <Rocket size={18} />
              </div>
              <span>Boost Your Confidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
