
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ignite Your Digital Vision with <span className="text-gradient">SparksAI</span>
            </h1>
          </div>
          
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0">
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              We transform ideas into powerful digital solutions through web, mobile, and AI technologies tailored to your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [animation-delay:0.6s] opacity-0">
            <Button size="lg" className="bg-spark-purple hover:bg-spark-purple/90 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group border-spark-purple text-foreground hover:bg-spark-purple/10 px-8 py-6 text-lg">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-spark-purple/20 animate-pulse-slow"></div>
      
      <div className="absolute top-20 right-16 w-20 h-20 rounded-full bg-spark-blue/30 blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 rounded-full bg-spark-purple/30 blur-xl animate-float-horizontal"></div>
    </section>
  );
};

export default HeroSection;
