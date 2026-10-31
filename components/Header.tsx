'use client';

import { useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { ShieldCheck, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Resources', href: '#resources' },
    { label: 'How It Works', href: '#how' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faq' },
  ];

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label={`${site.name} Homepage`}>
          <div className="logo-shield">
            <ShieldCheck size={22} strokeWidth={2.5} />
          </div>
          <div className="brand-logo-text">
            <span>{site.name}</span>
            <span className="brand-tagline">{site.tagline}</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* WhatsApp Consultation Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={whatsappLink('Hello SafetyScript, I would like to book a free consultation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald"
          >
            <MessageCircle size={16} fill="currentColor" />
            <span>Get Free Consultation</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className="menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{ fontSize: 16, padding: '6px 0' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink('Hello SafetyScript, I would like to book a free consultation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald"
            style={{ width: '100%', marginTop: 8 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageCircle size={16} fill="currentColor" />
            <span>Get Free Consultation ↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
