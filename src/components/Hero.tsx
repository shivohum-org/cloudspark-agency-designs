
import { ArrowRight, Bot, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollY: number;
}

export const Hero = ({ scrollY }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Mascot Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/fbd2e3dd-9583-43a8-a77f-a8015f293f65.png" 
              alt="Cloud Company AI Mascot" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain animate-float hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build the Future with
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              AI-Powered Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help businesses transform with cutting-edge AI websites, intelligent chatbots, 
            and powerful automations that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('proof-of-work')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Bot, title: "AI Chatbots", desc: "Intelligent customer support" },
              { icon: Code, title: "AI Websites", desc: "Smart, responsive platforms" },
              { icon: Zap, title: "Automations", desc: "Streamlined workflows" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <item.icon className="h-12 w-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
