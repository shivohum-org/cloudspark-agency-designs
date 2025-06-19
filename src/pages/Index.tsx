
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { FloatingElements } from '@/components/FloatingElements';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900 overflow-hidden">
      <FloatingElements scrollY={scrollY} />
      <Navigation />
      <Hero scrollY={scrollY} />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
