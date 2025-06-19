
import { CheckCircle, Users, Award, Rocket } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Rocket, value: "1000+", label: "Projects Delivered" },
    { icon: CheckCircle, value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Cloud Company AI</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're not just another development agency. We're AI pioneers who understand that the future of business 
              lies in intelligent automation and adaptive technologies.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Cutting-edge AI technology implementation",
                "Custom solutions tailored to your business",
                "Experienced team of AI specialists",
                "Ongoing support and optimization",
                "Proven track record of success"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
