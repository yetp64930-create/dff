import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/Interactive';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
