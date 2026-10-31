'use client';

import { useState, type FormEvent } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { metrics } from '@/data/metrics';
import {
  ShieldCheck,
  UserCheck,
  Briefcase,
  Zap,
  MessageCircle,
  Play,
  User,
  Phone,
  Layers,
  Lock,
  GraduationCap,
  Users,
  Star,
  Globe,
  ArrowRight,
  HardHat,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('IG1 Paper Support');

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const message = `Hello SafetyScript,\nI would like to request a free consultation:\n• Name: ${name || 'Prospective Student'}\n• WhatsApp: ${phone || 'Not provided'}\n• Selected Support: ${service}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <section className="hero-section">
        {/* Ambient Decorative Background Glows */}
        <div className="hero-glow-1" aria-hidden="true" />
        <div className="hero-glow-2" aria-hidden="true" />
        <div className="hero-ambient-grid" aria-hidden="true" />

        <div className="wrap hero-container">
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="hero-content">
            {/* Pill Badge */}
            <div className="badge-pill badge-dark">
              <span className="pulse-dot" />
              <ShieldCheck size={14} className="text-emerald" />
              <span>Independent NEBOSH Study Support</span>
            </div>

            {/* Main Animated Title */}
            <h1>
              Master Your <br />
              <span className="hero-gradient-text">NEBOSH Journey</span> <br />
              With Confidence
            </h1>

            {/* Handwritten Accent Sticker */}
            <div className="handwritten-sticker-wrap">
              <span className="sticker-handwritten">
                <Sparkles size={14} />
                <span>Learn • Apply • Succeed</span>
                <span className="sticker-arrow">↗</span>
              </span>
            </div>

            <p className="subtitle">
              Expert IG1 paper support, IG2 report support &amp; closing interview guidance
              tailored for learners in Pakistan and worldwide.
            </p>

            {/* 3 Value Feature Badges */}
            <div className="hero-feature-pills">
              <div className="feature-pill">
                <UserCheck size={15} />
                <span>Personalized Guidance</span>
              </div>
              <div className="feature-pill">
                <Briefcase size={15} />
                <span>Practical Real-World Approach</span>
              </div>
              <div className="feature-pill">
                <Zap size={15} />
                <span>Fast &amp; Friendly Support</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="hero-actions">
              <a
                href={whatsappLink('Hello SafetyScript, I would like to book a free consultation.')}
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

          {/* Right Column: Engineer Visual + Consultation Card */}
          <div className="hero-visual-col">
            {/* Engineer Profile Card with Safety Badge */}
            <div className="hero-engineer-card">
              <div className="engineer-image-wrapper">
                <img
                  src="/images/hero-engineer.jpg"
                  alt="NEBOSH Qualified Safety Mentor"
                  className="engineer-img"
                  width={340}
                  height={420}
                />
                <div className="engineer-overlay-gradient" />
                
                {/* Floating "Safer People • Safer Workplaces" Badge */}
                <div className="engineer-floating-badge">
                  <HardHat size={16} className="badge-icon-helmet" />
                  <div>
                    <strong>Safer People</strong>
                    <span>Safer Workplaces</span>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Converting Consultation Card (Glassmorphism) */}
            <div className="consultation-card">
              <span className="card-badge-top">FREE CONSULTATION</span>
              <h3>Get Expert Guidance Today</h3>
              <p className="form-desc">
                Fill in your details and we&apos;ll get back to you on WhatsApp as soon as possible.
              </p>

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <div className="input-with-icon">
                    <User size={16} className="input-icon" />
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="e.g. Muhammad Usman"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your WhatsApp Number</label>
                  <div className="input-with-icon">
                    <Phone size={16} className="input-icon" />
                    <input
                      type="tel"
                      className="form-input"
                      required
                      placeholder="e.g. 0327 8090456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Support Type</label>
                  <div className="input-with-icon">
                    <Layers size={16} className="input-icon" />
                    <select
                      className="form-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="IG1 Paper Support">IG1 Paper Support (From PKR 15,000)</option>
                      <option value="IG2 Report Support">IG2 Report Support (From PKR 10,000)</option>
                      <option value="Closing Interview Guidance">Closing Interview Guidance (Free with Other Services)</option>
                      <option value="Complete NEBOSH Support">Complete NEBOSH Support</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-emerald btn-full-width"
                  style={{ marginTop: 12 }}
                >
                  <MessageCircle size={16} fill="currentColor" />
                  <span>Request Free Consultation ↗</span>
                </button>

                <div className="form-privacy-note">
                  <Lock size={12} />
                  <span>Your information is kept private and secure.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Metrics Bar (Clean White Card Strip) */}
      <section className="trust-metrics-bar" aria-label="Key Statistics">
        <div className="wrap">
          <div className="metrics-grid">
            {metrics.map((item) => (
              <div className="metric-item" key={item.id}>
                <div className="metric-icon-wrap">
                  {item.icon === 'graduation' && <GraduationCap size={24} />}
                  {item.icon === 'users' && <Users size={24} />}
                  {item.icon === 'star' && <Star size={24} />}
                  {item.icon === 'globe' && <Globe size={24} />}
                </div>
                <div className="metric-numbers">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
