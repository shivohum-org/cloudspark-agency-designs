
import { Bot, Globe, Zap, Brain, MessageSquare, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const demos = [
    {
      icon: Bot,
      title: "AI Customer Support Bot",
      description: "Handles 90% of customer queries automatically. Built for SaaS companies.",
      demoUrl: "#",
      results: "87% customer satisfaction",
      client: "TechCorp",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Lead Generation Chatbot",
      description: "Qualifies leads 24/7 and books meetings automatically. No more missed opportunities.",
      demoUrl: "#",
      results: "300% more qualified leads",
      client: "GrowthCo",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "AI-Powered Website",
      description: "Personalizes content for each visitor. Smart recommendations that convert.",
      demoUrl: "#",
      results: "150% conversion increase",
      client: "ShopSmart",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automates repetitive tasks across your entire business. Save 30+ hours per week.",
      demoUrl: "#",
      results: "40 hours saved weekly",
      client: "EfficiencyCorp",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Smart Analytics Dashboard",
      description: "AI analyzes your data and tells you exactly what to do next. No guesswork.",
      demoUrl: "#",
      results: "2x better decisions",
      client: "DataDriven Inc",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "AI Sales Assistant",
      description: "Predicts which leads will convert and suggests the best approach for each.",
      demoUrl: "#",
      results: "45% higher close rate",
      client: "SalesForce Pro",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="demos" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Here's What We've 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Built Already
            </span>
          </h2>
          <p className="text-2xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
            Real AI tools. Real businesses. Real results.
            <br />
            <span className="text-blue-600 dark:text-blue-400 font-bold">This same type of tool can be made for you too.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:scale-105 group rounded-3xl overflow-hidden shadow-xl"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${demo.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <demo.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{demo.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">{demo.description}</p>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 mb-6">
                  <div className="text-green-700 dark:text-green-400 font-bold text-lg">{demo.results}</div>
                  <div className="text-green-600 dark:text-green-500 text-sm">for {demo.client}</div>
                </div>
                
                <Button 
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 font-bold py-3 rounded-xl transition-all duration-300"
                >
                  Try This Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-black mb-4">Ready to Build Yours?</h3>
            <p className="text-xl mb-8 opacity-90">These tools generated millions in revenue for our clients.</p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Let's Build Your AI Tool
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
