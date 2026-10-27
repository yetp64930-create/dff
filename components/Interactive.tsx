'use client';

import { useState, type FormEvent } from 'react';
import { whatsappLink } from '@/lib/site';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={`links${open ? ' open' : ''}`} id="nav" aria-label="Main navigation">
        {[
          ['Our Services', '#services'],
          ['How It Works', '#how'],
          ['Reviews', '#reviews'],
          ['FAQs', '#faq'],
          ['Contact', '#contact'],
        ].map(([text, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {text}
          </a>
        ))}
      </nav>
      <button
        className="menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>
    </>
  );
}

export function ConsultationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '');
    const details = String(data.get('message') || '').trim();
    const message = `Hello SafetyScript,\nI would like more information.\n• Name: ${name}${
      phone ? `\n• Phone: ${phone}` : ''
    }\n• Service: ${service}${details ? `\n• Details: ${details}` : ''}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="quote" onSubmit={handleSubmit}>
      <h3>Get a Free Consultation</h3>
      <p>Tell us what you need and continue your enquiry on WhatsApp.</p>
      <label>
        Your Full Name
        <input name="name" required placeholder="Enter your full name" maxLength={100} />
      </label>
      <label>
        Phone / WhatsApp Number
        <input name="phone" placeholder="e.g. 0327 8090456" maxLength={30} />
      </label>
      <label>
        What do you need help with?
        <select name="service" defaultValue="IG1 paper support">
          <option>IG1 paper support</option>
          <option>Interview preparation</option>
          <option>IG2 risk assessment report</option>
          <option>Complete NEBOSH support</option>
        </select>
      </label>
      <label>
        Additional Requirements (Optional)
        <textarea
          name="message"
          placeholder="Tell us about your upcoming exam date or specific help required..."
          maxLength={500}
        />
      </label>
      <button className="button" type="submit">
        Continue to WhatsApp ↗
      </button>
      <div className="note">
        This opens WhatsApp directly with your enquiry for immediate trainer assistance.
      </div>
    </form>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="float">
        <button
          aria-controls="chat"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close chat' : 'Open live chat'}
        >
          {open ? '✕ Close Chat' : '☏ &nbsp; Live Chat'}
        </button>
        <a
          className="wa"
          href={whatsappLink('Hello SafetyScript, I would like to chat with an advisor on WhatsApp.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          ◉ &nbsp; WhatsApp Us
        </a>
      </div>
      <div className="chat" id="chat" hidden={!open}>
        <div className="chathead">
          <div>
            <strong>Chat with SafetyScript</strong>
            <small>Direct WhatsApp Mentorship</small>
          </div>
          <button className="close" aria-label="Close chat" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <div className="chatbody">
          <p>
            Assalam-o-Alaikum! Need help with your NEBOSH IG1 paper, closing interview, or IG2 report?
            Tap below to message our team directly on WhatsApp.
          </p>
          <a
            className="button green"
            href={whatsappLink('Hello SafetyScript, I need help with my NEBOSH preparation.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start WhatsApp Chat ↗
          </a>
          <p style={{ fontSize: 11, margin: '12px 0 0' }}>
            Direct mentorship support available across Pakistan.
          </p>
        </div>
      </div>
    </>
  );
}
