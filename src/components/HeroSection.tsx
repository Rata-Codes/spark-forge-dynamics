
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Laptop, Smartphone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ignite Your Digital Vision with <span className="text-gradient relative">
                SparksAI
                <svg className="absolute -bottom-1 left-0 w-full h-1 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 20">
                  <path d="M 0 10 Q 50 0 100 10 Q 150 20 200 10 Q 250 0 300 10 Q 350 20 400 10" stroke="url(#sparkline)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="sparkline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9b87f5" />
                      <stop offset="100%" stopColor="#1EAEDB" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0">
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              We transform ideas into powerful digital solutions through web, mobile, and AI technologies tailored to your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [animation-delay:0.6s] opacity-0">
            <Button size="lg" className="group bg-spark-purple hover:bg-spark-purple/90 text-white px-8 py-6 text-lg relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-spark-purple to-spark-blue group-hover:w-full transition-all duration-500"></span>
            </Button>
            <Button variant="outline" size="lg" className="group border-spark-purple text-foreground hover:bg-spark-purple/10 px-8 py-6 text-lg">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Tech icons with animations */}
        <div className="hidden md:flex justify-center mt-20 animate-fade-in [animation-delay:0.8s] opacity-0">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center animate-float group perspective-500">
              <div className="p-4 bg-gradient-to-br from-card/80 to-card/40 rounded-full shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:rotate-y-12 group-hover:shadow-spark-purple/20">
                <Code className="h-8 w-8 text-spark-purple transform transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 text-sm font-medium">Web Dev</span>
            </div>
            <div className="flex flex-col items-center animate-float [animation-delay:0.3s] group perspective-500">
              <div className="p-4 bg-gradient-to-br from-card/80 to-card/40 rounded-full shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:rotate-y-12 group-hover:shadow-spark-blue/20">
                <Smartphone className="h-8 w-8 text-spark-blue transform transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 text-sm font-medium">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center animate-float [animation-delay:0.6s] group perspective-500">
              <div className="p-4 bg-gradient-to-br from-card/80 to-card/40 rounded-full shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:rotate-y-12 group-hover:shadow-spark-purple/20">
                <Cpu className="h-8 w-8 text-spark-purple transform transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 text-sm font-medium">AI Solutions</span>
            </div>
            <div className="flex flex-col items-center animate-float [animation-delay:0.9s] group perspective-500">
              <div className="p-4 bg-gradient-to-br from-card/80 to-card/40 rounded-full shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:rotate-y-12 group-hover:shadow-spark-blue/20">
                <Laptop className="h-8 w-8 text-spark-blue transform transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 text-sm font-medium">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-gradient-to-br from-spark-purple/20 to-spark-blue/20 animate-pulse-slow"></div>
      
      {/* Circuit animation background */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" 
            fill="none" 
            stroke="url(#circuit1)" 
            strokeWidth="1.5"
            className="circuit-line"
          />
          <path 
            d="M100,0 Q150,50 100,100 T100,200 T100,300 T100,400" 
            fill="none" 
            stroke="url(#circuit2)" 
            strokeWidth="1.5"
            className="circuit-line"
          />
          <path 
            d="M300,0 Q250,50 300,100 T300,200 T300,300 T300,400" 
            fill="none" 
            stroke="url(#circuit3)" 
            strokeWidth="1.5"
            className="circuit-line"
            style={{ animationDelay: '0.5s' }}
          />
          <path 
            d="M0,300 Q50,250 100,300 T200,300 T300,300 T400,300"
            fill="none" 
            stroke="url(#circuit4)" 
            strokeWidth="1.5"
            className="circuit-line"
            style={{ animationDelay: '0.7s' }}
          />
          <path 
            d="M400,0 L400,400 M350,0 L350,400 M250,0 L250,400 M150,0 L150,400"
            fill="none" 
            stroke="url(#circuit5)" 
            strokeWidth="0.5"
            strokeDasharray="5,10"
            className="circuit-line"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#1EAEDB" />
            </linearGradient>
            <linearGradient id="circuit2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1EAEDB" />
              <stop offset="100%" stopColor="#9b87f5" />
            </linearGradient>
            <linearGradient id="circuit3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#1EAEDB" />
            </linearGradient>
            <linearGradient id="circuit4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1EAEDB" />
              <stop offset="100%" stopColor="#9b87f5" />
            </linearGradient>
            <linearGradient id="circuit5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="50%" stopColor="#1EAEDB" />
              <stop offset="100%" stopColor="#9b87f5" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Circuit nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-spark-purple/80 shadow-lg shadow-spark-purple/30 circuit-node"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-spark-blue/80 shadow-lg shadow-spark-blue/30 circuit-node" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-2/4 left-3/4 w-2 h-2 rounded-full bg-spark-purple/80 shadow-lg shadow-spark-purple/30 circuit-node" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-spark-blue/80 shadow-lg shadow-spark-blue/30 circuit-node" style={{ animationDelay: '0.9s' }}></div>
      </div>
      
      {/* Code-like decoration */}
      <div className="hidden lg:block absolute top-1/4 left-10 text-xs opacity-20 font-mono animate-fade-in">
        &lt;div class=&quot;innovation&quot;&gt;<br/>
        &nbsp;&nbsp;import {'{AI}'} from &apos;sparks&apos;;<br/>
        &nbsp;&nbsp;const future = await {'{AI.create()}'};<br/>
        &lt;/div&gt;
      </div>
      
      <div className="hidden lg:block absolute bottom-1/4 right-10 text-xs opacity-20 font-mono animate-fade-in">
        function solveProblems() {'{'}
        <br/>
        &nbsp;&nbsp;return innovative.solutions;
        <br/>
        {'}'}
      </div>
    </section>
  );
};

export default HeroSection;
