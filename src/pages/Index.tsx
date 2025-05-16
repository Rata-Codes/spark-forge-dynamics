
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
          <div className="max-w-3xl mx-auto bg-[#1A1812]/50 backdrop-blur-md p-10 rounded-2xl border border-amber-500/10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-gradient-professional">Portfolio</span>
            </h2>
            <p className="text-amber-100/80 mb-8">
              Discover our projects and see how we've helped businesses transform their ideas into reality.
            </p>
            <Link to="/projects">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg h-auto">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Glass effect elements */}
        <div className="absolute top-10 right-[20%] w-24 h-24 rounded-full bg-amber-500/10 blur-xl"></div>
        <div className="absolute bottom-10 left-[30%] w-32 h-32 rounded-full bg-amber-600/5 blur-xl"></div>
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
