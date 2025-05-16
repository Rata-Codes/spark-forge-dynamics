
import React, { useEffect } from "react";
import TechParticles from "@/components/TechParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcess from "@/components/WorkProcess";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

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
