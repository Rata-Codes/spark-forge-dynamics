
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    'Innovative tech solutions customized to your needs',
    'Expert team with diverse technical expertise',
    'Transparent communication throughout the project',
    'Agile methodology for efficient delivery',
    'Ongoing support and maintenance'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">SparksAI</span></h2>
            <p className="text-lg text-muted-foreground mb-6">
              SparksAI is a forward-thinking technology solutions provider dedicated to helping businesses navigate the digital landscape. We combine technical expertise with creative innovation to deliver solutions that drive real business value.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experienced developers, designers, and strategists work closely with clients to understand their unique challenges and create tailored solutions that exceed expectations.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-fade-in opacity-0" 
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-spark-purple flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-primary animate-gradient-flow rounded-2xl h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full p-8">
                  <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-2xl"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-3xl mx-auto bg-[#1A1812]/50 backdrop-blur-md p-10 rounded-2xl border border-amber-500/20 glass-card">
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create exceptional digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-spark-purple/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-spark-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
