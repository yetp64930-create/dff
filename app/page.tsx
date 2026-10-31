import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { FreeResources } from '@/components/FreeResources';
import { PricingPackages } from '@/components/PricingPackages';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Interactive } from '@/components/Interactive';

export default function Home() {
  return (
    <>
      {/* 1. Modern Glassmorphism Sticky Navbar */}
      <Header />

      <main>
        {/* 2. Hero Section with Consultation Form & Trust Metrics Bar */}
        <Hero />

        {/* 3. Three Modern Interactive Service Cards */}
        <Services />

        {/* 4. Animated Four-Step Process Timeline */}
        <Process />

        {/* 5. Free Learning Resources Interactive Section */}
        <FreeResources />

        {/* 6. Pricing & Support Packages Section */}
        <PricingPackages />

        {/* 7. Authentic Student Testimonials Carousel */}
        <Testimonials />

        {/* 8. FAQ Accordion Section */}
        <FAQ />

        {/* 9. High-Converting CTA Banner */}
        <CallToAction />
      </main>

      {/* 10. Modern Multi-Column Footer */}
      <Footer />

      {/* Floating WhatsApp and Live Chat Modal */}
      <Interactive />
    </>
  );
}
