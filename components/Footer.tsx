import { site, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/Header';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footgrid">
          <div>
            <Logo />
            <p>
              Professional mentoring for NEBOSH IG1 open-book exams, closing interviews, and IG2
              practical risk assessment reports in Pakistan.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#services">Our Services</a>
            <a href="#how">How It Works</a>
            <a href="#reviews">Testimonials</a>
            <a href="#faq">FAQs</a>
          </div>
          <div>
            <h3>Contact Us</h3>
            <a href={`tel:${site.phoneInternational}`}>☎ &nbsp; {site.phoneDisplay}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp: {site.phoneDisplay}
            </a>
            <p>Available Monday – Saturday to assist learners across Pakistan and overseas.</p>
          </div>
        </div>
        <div className="bottom">
          <span>&copy; {currentYear} {site.name}. All rights reserved.</span>
          <span>Independent academic mentorship service. Not affiliated with NEBOSH.</span>
        </div>
      </div>
    </footer>
  );
}

