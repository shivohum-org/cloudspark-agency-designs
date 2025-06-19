
import { ExternalLink, Bot, Heart, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ProofOfWork = () => {
  const projects = [
    {
      category: "Traditional Business",
      icon: Bot,
      title: "Curry Kart AI",
      description: "AI-powered restaurant ordering system with intelligent recommendations and customer support chatbot.",
      features: ["Smart Menu Recommendations", "24/7 Customer Support", "Order Automation", "Inventory Management"],
      link: "https://currykart.vercel.app/",
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Healthcare Startup",
      icon: Heart,
      title: "NeuroCare",
      description: "AI-driven healthcare platform for neurological condition monitoring and patient care management.",
      features: ["Patient Monitoring", "AI Diagnostics", "Care Coordination", "Health Analytics"],
      link: "https://neurocare-ui-whisper.vercel.app/",
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "SaaS Developer",
      icon: Code,
      title: "AI Project Tracker",
      description: "Intelligent project management platform with AI-powered insights and automated workflow optimization.",
      features: ["Smart Task Management", "AI Insights", "Team Collaboration", "Performance Analytics"],
      link: "https://www.richestman.xyz",
      gradient: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section id="proof-of-work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Here's What We've Built Already
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real AI tools for real businesses. These same types of solutions can be built for you too.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <project.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <span className="text-sm text-blue-300 uppercase tracking-wide font-semibold">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-blue-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 group"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              This Same Type of Tool Can Be Made for You Too
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique, but the power of AI is universal. Let's build something amazing for your business.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your AI Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
