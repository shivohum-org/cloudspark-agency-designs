
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Cloud Company AI transformed our customer service with their intelligent chatbot. We've seen a 300% increase in customer satisfaction and 50% reduction in support costs.",
      rating: 5,
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Michael Chen",
      role: "COO, GlobalTrade Ltd",
      content: "The AI automation solutions they implemented saved us 40 hours per week. Their team's expertise in AI is unmatched, and the ROI was immediate.",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, InnovateCorp",
      content: "Our AI-powered website now personalizes content for each visitor. Conversion rates increased by 200% within the first month. Absolutely incredible results!",
      rating: 5,
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=150&h=150&q=80`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
