import { site, whatsappLink } from '@/lib/site';
import { ShieldCheck, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col">
            <a href="#" className="brand-logo footer-brand">
              <div className="logo-shield">
                <ShieldCheck size={22} strokeWidth={2.5} />
              </div>
              <div className="brand-logo-text">
                <span className="brand-title-light">{site.name}</span>
                <span className="brand-tagline-light">{site.tagline}</span>
              </div>
            </a>

            <p className="footer-desc">
              Independent NEBOSH study support for IG1, IG2 and closing interview preparation.
              Learn. Apply. Succeed.
            </p>

            <div className="footer-socials">
              {/* Facebook */}
              <a
                href={whatsappLink('Hello SafetyScript')}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={whatsappLink('Hello SafetyScript')}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={whatsappLink('Hello SafetyScript')}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={whatsappLink('Hello SafetyScript')}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-nav-list">
              <li>
                <a href={whatsappLink('Hello, I am enquiring about IG1 Exam Coaching.')}>
                  IG1 Coaching
                </a>
              </li>
              <li>
                <a href={whatsappLink('Hello, I am enquiring about IG2 Report Feedback.')}>
                  IG2 Report Feedback
                </a>
              </li>
              <li>
                <a href={whatsappLink('Hello, I am enquiring about Closing Interview Practice.')}>
                  Closing Interview
                </a>
              </li>
              <li>
                <a href={whatsappLink('Hello, I would like to book a Free Consultation.')}>
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <div>
                  <a href={`tel:${site.phoneInternational}`} className="contact-phone-link">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Clock size={16} className="contact-icon" />
                <div>
                  <span>{site.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} {site.name}. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#">Terms of Service</a>
            <span className="footer-divider">|</span>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
