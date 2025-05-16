
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#040714]/90 shadow-md backdrop-blur-lg py-3 border-b border-blue-500/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="z-10 flex items-center group">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-2 shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50">
            <Zap className="h-full w-full text-white" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-spin-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/10 rounded-full blur-xl animate-spin-slow animation-delay-700"></div>
          </div>
          <div className="ml-3 relative">
            <div className="font-bold text-xl relative text-white">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">SPARKS AI</span>
              <div className="absolute -top-2 -right-4 w-4 h-4">
                <div className="w-full h-full relative">
                  <span className="absolute inset-0 block w-full h-full bg-blue-500/80 rounded-full animate-ping"></span>
                  <span className="absolute inset-0 block w-full h-full bg-blue-500 rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
            <div className="text-xs font-medium text-blue-200/70 tracking-widest">INTELLIGENT SOLUTIONS</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-blue-100/80 hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="font-medium text-blue-100/80 hover:text-blue-400 transition-colors">About Us</a>
          <a href="#process" className="font-medium text-blue-100/80 hover:text-blue-400 transition-colors">Process</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 border border-blue-500/20">Get in Touch</Button>
        </div>

        <button 
          className="md:hidden z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#040714]/95 backdrop-blur-lg z-[5] flex flex-col items-center justify-center border-t border-blue-500/10">
            <nav className="flex flex-col items-center space-y-8">
              <a 
                href="#services" 
                className="text-xl font-medium text-blue-100 hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-xl font-medium text-blue-100 hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#process" 
                className="text-xl font-medium text-blue-100 hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
