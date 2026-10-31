'use client';

import { useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { MessageCircle, MessageSquare, X, Send, Sparkles } from 'lucide-react';

export function Interactive() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    window.open(whatsappLink(`Hello SafetyScript, ${chatInput}`), '_blank', 'noopener,noreferrer');
    setChatInput('');
    setChatOpen(false);
  }

  return (
    <>
      {/* Floating Action Buttons Bottom-Right */}
      <div className="floating-action-group">
        <button
          className="float-chat-btn"
          onClick={() => setChatOpen(!chatOpen)}
          aria-expanded={chatOpen}
          aria-label="Toggle Live WhatsApp Chat"
        >
          {chatOpen ? <X size={17} /> : <MessageSquare size={16} />}
          <span>{chatOpen ? 'Close Chat' : 'Live Chat'}</span>
        </button>

        <a
          href={whatsappLink('Hello SafetyScript, I want to connect with a mentor on WhatsApp.')}
          target="_blank"
          rel="noopener noreferrer"
          className="float-wa-btn"
          aria-label="Contact us on WhatsApp"
        >
          <span className="wa-beacon-ping" />
          <MessageCircle size={19} fill="currentColor" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Chat Drawer Modal Popup */}
      {chatOpen && (
        <div className="chat-drawer" role="dialog" aria-modal="true">
          <div className="chat-drawer-header">
            <div>
              <strong>SafetyScript Advisory</strong>
              <small>Online • Typically replies within 5 mins</small>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="chat-close-btn"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-drawer-body">
            <div className="chat-welcome-bubble">
              Assalam-o-Alaikum! Welcome to SafetyScript. How can our safety mentors help you today?
              (IG1 Paper Support, IG2 Report Support, or Closing Interview Guidance)?
            </div>

            <form onSubmit={handleSend}>
              <div className="chat-input-wrap">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="chat-text-input"
                />
                <button
                  type="submit"
                  className="btn btn-emerald chat-send-btn"
                  aria-label="Send message to WhatsApp"
                >
                  <Send size={15} />
                </button>
              </div>
            </form>

            <div className="chat-drawer-footer">
              <a
                href={whatsappLink('Hello SafetyScript, I would like to chat with an advisor.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Or open directly in WhatsApp App ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
