
import { ArrowRight, Bot, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollY: number;
}

export const Hero = ({ scrollY }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-900 transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
            We Build Real 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              AI Tools
            </span>
            for Real Businesses
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
            Want an AI bot or automation like this? We built it. 
            <br className="hidden md:block" />
            <span className="text-blue-600 dark:text-blue-400 font-bold">We can build yours too.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl group transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Bot className="mr-3 h-6 w-6" />
              Try Our Bots
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-3 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Play className="mr-3 h-6 w-6" />
              Book a Build
            </Button>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Real demos below
              <span className="mx-4">•</span>
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span> No fluff, just results
              <span className="mx-4">•</span>
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Built for businesses like yours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
