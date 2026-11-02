import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Interactive } from '@/components/Interactive';
import { FileCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = {
  title: `Terms of Service | ${site.name}`,
  description: 'Terms of Service for SafetyScript independent NEBOSH mentorship and study support.',
};

export default function TermsOfServicePage() {
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
            <FileCheck size={28} className="text-emerald" />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--navy)', margin: 0 }}>Terms of Service</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 30 }}>
            Last updated: November 2026 • Mentorship Agreement & Guidelines
          </p>

          <div style={{ lineHeight: 1.8, color: '#334155', fontSize: 15, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>1. Educational Tutoring Nature</h2>
              <p>
                SafetyScript provides independent tutoring, concept coaching, exam technique feedback, and closing interview mock simulations. Our services are designed to help students learn, understand marking schemes, and produce their own authentic work.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>2. Student Responsibility & Academic Honesty</h2>
              <p>
                Students are solely responsible for authoring and submitting their own examination papers and risk assessments in strict compliance with NEBOSH academic integrity and malpractice policies. SafetyScript does not write papers for students.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>3. Pricing & Transparent Terms</h2>
              <p>
                All pricing is clearly stated upfront (e.g. Starting from PKR 15,000 for IG1 Paper Support, Starting from PKR 10,000 for IG2 Report Support). Closing Interview Guidance is provided 100% free with enrolled services. No hidden charges apply.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>4. Support Availability</h2>
              <p>
                Mentorship support is available via WhatsApp 24/7. Inquiries and guidance submissions are typically reviewed promptly by assigned safety mentors.
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

