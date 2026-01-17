import React from 'react';
import { Aperture, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            
            <div className="mb-12 md:mb-0 max-w-sm">
                <a href="#" className="flex items-center gap-2 mb-6 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-300 text-dark border border-white/50 flex items-center justify-center rounded-sm group-hover:bg-neon group-hover:text-dark transition-all duration-500">
                         <Aperture className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-xl text-dark">
                        MVS
                    </span>
                </a>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    The world's first AI-powered marine visualization studio. 
                    We turn inventory into desire without leaving the desk.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-dark hover:bg-neon transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-dark hover:bg-neon transition-colors"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-dark hover:bg-neon transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-16">
                <div>
                    <h4 className="font-bold text-dark mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-neonHover transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-neonHover transition-colors">Career</a></li>
                        <li><a href="#" className="hover:text-neonHover transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-dark mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-neonHover transition-colors">Privacy</a></li>
                        <li><a href="#" className="hover:text-neonHover transition-colors">Terms</a></li>
                        <li><a href="#" className="hover:text-neonHover transition-colors">Licensing</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Marine Visual Studio.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                 <span>London</span>
                 <span>Monaco</span>
                 <span>Dubai</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;