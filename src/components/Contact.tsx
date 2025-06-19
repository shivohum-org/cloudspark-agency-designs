
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Build Your 
            <span className="block text-yellow-300">AI Tool?</span>
          </h2>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-medium">
            Let's build something amazing together. Book a call or message us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: Calendar, 
              title: "Book a Call", 
              description: "15-min strategy session",
              action: "Schedule Now",
              highlight: true
            },
            { 
              icon: MessageSquare, 
              title: "WhatsApp", 
              description: "Quick questions & demos",
              action: "Message Us"
            },
            { 
              icon: Mail, 
              title: "Email", 
              description: "hello@cloudcompany.ai",
              action: "Send Email"
            },
            { 
              icon: Phone, 
              title: "Call Direct", 
              description: "+1 (555) 123-4567",
              action: "Call Now"
            }
          ].map((contact, index) => (
            <Card 
              key={index}
              className={`${contact.highlight ? 'bg-white border-4 border-yellow-300 scale-105' : 'bg-white/90 border-white/20'} hover:scale-110 transition-all duration-300 rounded-3xl overflow-hidden`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${contact.highlight ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-slate-200'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className={`h-8 w-8 ${contact.highlight ? 'text-white' : 'text-slate-600'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${contact.highlight ? 'text-blue-600' : 'text-slate-900'}`}>
                  {contact.title}
                </h3>
                <p className="text-slate-600 mb-4">{contact.description}</p>
                <Button 
                  className={`w-full ${contact.highlight ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-slate-900 text-white'} font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300`}
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">1</div>
                <p className="text-lg">We understand your business & goals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">2</div>
                <p className="text-lg">We design & build your AI tool</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300 mb-2">3</div>
                <p className="text-lg">You see real results in weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
