
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

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
        <a href="/" className="z-10 flex items-center">
          <img src="/assets/sparks-logo.svg" alt="SparksAI Logo" className="h-10" />
          <span className="ml-2 font-bold text-xl text-gradient">SPARKS AI</span>
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
