import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Interactive } from '@/components/Interactive';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: 'Privacy Policy and data protection terms for SafetyScript NEBOSH study support.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '120px 20px 80px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', background: '#ffffff', borderRadius: 16, padding: '40px 36px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: 'var(--emerald)', marginBottom: 20 }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <ShieldCheck size={28} className="text-emerald" />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--navy)', margin: 0 }}>Privacy Policy</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 30 }}>
            Last updated: November 2026 • SafetyScript Student Confidentiality Guarantee
          </p>

          <div style={{ lineHeight: 1.8, color: '#334155', fontSize: 15, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>1. Information We Collect</h2>
              <p>
                When you contact SafetyScript via WhatsApp or our consultation form, we collect your name, phone number, qualification goal (e.g. IG1, IG2, Closing Interview), and any voluntary exam details you share with your mentor.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>2. Strict Confidentiality & Academic Integrity</h2>
              <p>
                All student draft submissions, report feedback, mock interview evaluations, and personal messages are kept 100% strictly confidential. We never share, sell, publish, or distribute student papers or risk assessment drafts to any third parties.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>3. How We Use Your Details</h2>
              <p>
                Your details are used solely to deliver personalized 1-on-1 NEBOSH mentoring, share requested resources or model answers, and respond to your direct queries on WhatsApp.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>4. Contact Us</h2>
              <p>
                If you have questions regarding your privacy, contact our support desk directly via WhatsApp at <strong>{site.phoneDisplay}</strong> or email <strong>{site.email}</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <Interactive />
    </>
  );
}
