import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'Platform', href: '#demo' },
  { label: 'Engine', href: '#features' },
  { label: 'Efficiency', href: '#roi' },
  { label: 'Lookbook', href: '#work' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
      setIsMobileMenuOpen(false);
      const element = document.querySelector(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <>
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group z-50">
            <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-300 text-dark border border-white/50 flex items-center justify-center rounded-sm group-hover:bg-neon group-hover:border-neon group-hover:text-dark transition-all duration-500 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
                <Aperture className="w-5 h-5 relative z-10" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-dark leading-none group-hover:text-gray-600 transition-colors">
                MVS
            </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-dark transition-all bg-transparent border-none cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-silver-metallic transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
            <Button variant="outline" className="border-gray-200" onClick={() => handleNavClick('#audit')}>
                Studio Access
            </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dark z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-5xl font-display font-bold text-dark hover:text-silver-metallic transition-colors"
              >
                {item.label}
              </button>
            ))}
             <button 
                onClick={() => handleNavClick('#audit')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] bg-dark text-white px-12 py-5 mt-10 hover:bg-neon hover:text-dark transition-colors shadow-xl"
            >
                Start Project
            </button>
        </div>
    </div>
    </>
  );
};

export default Navbar;