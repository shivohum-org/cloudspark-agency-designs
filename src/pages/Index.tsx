
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { FloatingElements } from '@/components/FloatingElements';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <FloatingElements scrollY={scrollY} />
      <Navigation />
      <Hero scrollY={scrollY} />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
