import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Interactive } from '@/components/Interactive';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = {
  title: `Disclaimer | ${site.name}`,
  description: 'Independent mentorship disclaimer and trademark notice for SafetyScript.',
};

export default function DisclaimerPage() {
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
            <AlertCircle size={28} className="text-emerald" />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--navy)', margin: 0 }}>Independent Service Disclaimer</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 30 }}>
            Important Notice Regarding Trademarks and Affiliation
          </p>

          <div style={{ lineHeight: 1.8, color: '#334155', fontSize: 15, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>1. Non-Affiliation Notice</h2>
              <p>
                <strong>SafetyScript</strong> is an independent academic mentorship, coaching, and student support service. We are <strong>not affiliated with, associated with, endorsed by, or accredited by NEBOSH</strong> (The National Examination Board in Occupational Safety and Health) or any official Learning Partner, unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>2. Trademark Acknowledgment</h2>
              <p>
                &quot;NEBOSH&quot;, &quot;NEBOSH IGC&quot;, &quot;IG1&quot;, &quot;IG2&quot;, and related trademarks are the registered intellectual property of the National Examination Board in Occupational Safety and Health. Reference to these terms on this website is solely for descriptive educational purposes to indicate the subject matter of our tutoring services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>3. Results &amp; Pass Rate Context</h2>
              <p>
                While our mentors strive to provide top-quality feedback, exam technique coaching, and mock interview practice, final examination outcomes ultimately depend on the individual student&apos;s own preparation, understanding, and performance during their assessments.
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

