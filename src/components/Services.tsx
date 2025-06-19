
import { Bot, Globe, Cog, Brain, Sparkles, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "AI-Powered Websites",
      description: "Custom websites with intelligent features, personalization, and AI-driven user experiences that adapt to your visitors.",
      features: ["Smart Content Generation", "Personalized UX", "AI Analytics", "Automated SEO"]
    },
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "Advanced conversational AI that handles customer support, lead generation, and sales with human-like interactions.",
      features: ["24/7 Support", "Multi-language", "CRM Integration", "Learning Capabilities"]
    },
    {
      icon: Cog,
      title: "Business Automation",
      description: "Streamline operations with AI-powered workflows that reduce manual tasks and increase efficiency across your business.",
      features: ["Process Automation", "Data Integration", "Smart Scheduling", "Performance Tracking"]
    },
    {
      icon: Brain,
      title: "Custom AI Solutions",
      description: "Tailored artificial intelligence solutions designed specifically for your industry and business requirements.",
      features: ["Machine Learning", "Predictive Analytics", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows for enhanced productivity.",
      features: ["API Development", "System Integration", "Data Migration", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "AI Strategy Consulting",
      description: "Expert guidance on implementing AI strategies that drive growth and competitive advantage for your business.",
      features: ["Strategic Planning", "ROI Analysis", "Implementation Roadmap", "Ongoing Support"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <service.icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-blue-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
