
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useContactForm } from '@/hooks/useContactForm';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: '',
  });

  const { submitForm, isSubmitting } = useContactForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await submitForm(formData);
    
    if (success) {
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI can revolutionize your operations. Get in touch for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a 
                    href="mailto:thecloudcompanyai@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    thecloudcompanyai@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">WhatsApp</div>
                  <a 
                    href="https://wa.me/919026216173" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +91 9026216173
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">India</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-2">Why Work With Us?</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Free initial consultation</li>
                <li>• Custom AI strategy development</li>
                <li>• Proven results and ROI</li>
                <li>• Ongoing support and optimization</li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                
                <Input 
                  name="companyName"
                  placeholder="Company Name" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project and AI needs..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 group transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
