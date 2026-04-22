import { Instagram, MessageCircle, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* LEFT SECTION */}
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Cloud Company AI
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building the future with AI-powered solutions. We help businesses transform with cutting-edge technology.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/919026216173"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
              </a>

              <a
                href="https://www.instagram.com/shakthansh?igsh=dHlneGFlOGZremlh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
              </a>

              <a
                href="mailto:thecloudcompanyai@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400">Services</a></li>
              <li><a href="#proof-of-work" className="text-gray-300 hover:text-blue-400">Our Work</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a></li>

              {/* 👇 IMPORTANT ADD */}
              <li>
                <a href="/privacy-policy/" className="text-gray-300 hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://currykart.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
                  Curry Kart AI <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://neurocare-ui-whisper.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
                  NeuroCare <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.richestman.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
                  AI Project Tracker <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
          © 2026 Cloud Company AI. All rights reserved. |
          <a href="/privacy-policy/" className="ml-2 hover:text-white">
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
};
