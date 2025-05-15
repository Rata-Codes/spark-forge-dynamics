
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from 'lucide-react';

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
          ? 'bg-white/90 dark:bg-spark-dark/90 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="z-10 flex items-center group">
          <div className="relative overflow-hidden">
            <img 
              src="/assets/sparks-logo.svg" 
              alt="SparksAI Logo" 
              className="h-10 transform transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-spark-purple/0 to-spark-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
          </div>
          <div className="ml-2 relative">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-spark-purple to-spark-blue">SPARKS AI</span>
            <div className="absolute -top-1 -right-3">
              <Sparkles className="h-3 w-3 text-spark-purple animate-ping" />
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-foreground/80 hover:text-spark-purple transition-colors">Services</a>
          <a href="#about" className="font-medium text-foreground/80 hover:text-spark-purple transition-colors">About Us</a>
          <a href="#process" className="font-medium text-foreground/80 hover:text-spark-purple transition-colors">Process</a>
          <a href="#contact" className="font-medium text-foreground/80 hover:text-spark-purple transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-spark-purple hover:bg-spark-purple/90 text-white">Get in Touch</Button>
        </div>

        <button 
          className="md:hidden z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-spark-dark z-[5] flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <a 
                href="#services" 
                className="text-xl font-medium text-foreground/80 hover:text-spark-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-xl font-medium text-foreground/80 hover:text-spark-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#process" 
                className="text-xl font-medium text-foreground/80 hover:text-spark-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#contact" 
                className="text-xl font-medium text-foreground/80 hover:text-spark-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-spark-purple hover:bg-spark-purple/90 text-white mt-6"
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
