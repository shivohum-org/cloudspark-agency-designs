
import { CheckCircle, Zap, Brain, Rocket } from 'lucide-react';

export const About = () => {
  const stats = [
    { number: "50+", label: "AI Tools Built", icon: Brain },
    { number: "98%", label: "Client Success Rate", icon: CheckCircle },
    { number: "$2M+", label: "Revenue Generated", icon: Rocket },
    { number: "24/7", label: "AI Support", icon: Zap }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Yes, We Can Build 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI Tools for Your Business
            </span>
          </h2>
          <p className="text-2xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
            We're not your typical agency. We build, ship, and scale AI tools that actually work.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl p-8 mb-4">
                <stat.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-slate-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "We build fast. Most projects done in 2-4 weeks.",
                  "Real results. Our tools generate actual revenue.",
                  "No BS. We show you exactly what we're building.",
                  "Your success = our success. We're invested in your growth."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
              <p className="text-lg opacity-90 mb-6">
                Book a 15-minute call. We'll show you exactly what we can build for your business.
              </p>
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                Book Your Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
