
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Smartphone, Cpu } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#121212]">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-amber-50">
              Ignite Your Digital Vision with <span className="text-gradient-professional relative inline-block">
                SparksAI
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0">
            <p className="text-xl md:text-2xl text-amber-100/80 mb-10 max-w-2xl mx-auto">
              We transform ideas into powerful digital solutions through web, mobile, and AI technologies tailored to your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [animation-delay:0.6s] opacity-0">
            <Button size="lg" className="group bg-amber-600 hover:bg-amber-700 text-amber-50 px-8 py-6 text-lg relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-amber-600 to-amber-800 group-hover:w-full transition-all duration-500"></span>
            </Button>
            <Button variant="outline" size="lg" className="group border-amber-500 text-amber-100 hover:bg-amber-900/20 px-8 py-6 text-lg">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Tech icons with animations */}
        <div className="hidden md:flex justify-center mt-20 animate-fade-in [animation-delay:0.8s] opacity-0">
          <div className="grid grid-cols-4 gap-6">
            <TechIcon 
              icon={<Laptop className="h-8 w-8 text-amber-400" />} 
              label="Web Dev" 
              delay={0} 
            />
            <TechIcon 
              icon={<Smartphone className="h-8 w-8 text-amber-400" />} 
              label="Mobile Apps" 
              delay={0.3} 
            />
            <TechIcon 
              icon={<Cpu className="h-8 w-8 text-amber-400" />} 
              label="AI Solutions" 
              delay={0.6} 
            />
            <TechIcon 
              icon={<Code className="h-8 w-8 text-amber-400" />} 
              label="UI/UX" 
              delay={0.9} 
            />
          </div>
        </div>
      </div>
      
      {/* Professional Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#121212] z-0"></div>
      
      {/* Advanced network animation */}
      <div className="absolute inset-0 z-0">
        <div id="network-animation"></div>
      </div>
      
      {/* Accent elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-amber-600/5 blur-3xl"></div>
    </section>
  );
};

// Tech Icon Component
const TechIcon: React.FC<{
  icon: React.ReactNode;
  label: string;
  delay: number;
}> = ({ icon, label, delay }) => {
  return (
    <div className={`flex flex-col items-center animate-float tech-icon-float`} style={{ animationDelay: `${delay}s` }}>
      <div className="p-4 bg-gradient-to-br from-[#1A1812]/80 to-[#1A1812]/40 rounded-full shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:shadow-amber-500/20 border border-amber-500/10 glow-border">
        {icon}
      </div>
      <span className="mt-2 text-sm font-medium text-amber-100/80">{label}</span>
    </div>
  );
};

export default HeroSection;
