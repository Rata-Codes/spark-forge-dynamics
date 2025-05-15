
import React from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import TechParticles from "@/components/TechParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcess from "@/components/WorkProcess";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particles background animation */}
      <ParticlesBackground />
      
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
