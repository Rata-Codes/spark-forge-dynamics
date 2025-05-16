
import React, { useEffect } from "react";
import TechParticles from "@/components/TechParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcess from "@/components/WorkProcess";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-[#121212] text-foreground">
      {/* Tech-themed particles */}
      <TechParticles />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Project Button Section */}
      <section className="py-16 relative overflow-hidden bg-[#121212]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-[#1A1812]/50 backdrop-blur-md p-10 rounded-2xl border border-amber-500/20 glass-card">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-gradient-professional">Portfolio</span>
            </h2>
            <p className="text-amber-100/80 mb-8">
              Discover our projects and see how we've helped businesses transform their ideas into reality.
            </p>
            <Link to="/projects">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg h-auto border border-amber-500/30 shadow-lg shadow-amber-600/20">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Glass effect elements */}
        <div className="absolute top-10 right-[20%] w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-700/5 blur-xl"></div>
        <div className="absolute bottom-10 left-[30%] w-40 h-40 rounded-full bg-gradient-to-tl from-amber-700/10 to-amber-500/5 blur-xl"></div>
        
        {/* Circuit elements */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-small" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M10,50 L40,50 M60,50 L90,50 M50,10 L50,40 M50,60 L50,90" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="90" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-small)" />
          </svg>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Work Process Section */}
      <WorkProcess />
      
      {/* Footer Section */}
      <FooterSection />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
