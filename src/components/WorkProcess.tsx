
import React from 'react';
import { Search, Lightbulb, Code, Check, ArrowRight } from 'lucide-react';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and vision to define the project scope.',
      color: 'from-spark-purple to-spark-light'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: 'Design',
      description: 'Our team creates innovative and intuitive designs focusing on user experience and your brand identity.',
      color: 'from-spark-blue to-spark-light'
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: 'Development',
      description: 'We build your solution using the latest technologies and best practices to ensure quality and performance.',
      color: 'from-spark-purple to-spark-blue'
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: 'Delivery',
      description: 'After thorough testing and your approval, we deploy your solution with ongoing support and maintenance.',
      color: 'from-spark-blue to-spark-purple'
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Process</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We follow a structured and collaborative approach to turn your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div 
                className="animate-fade-in opacity-0" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${step.color} mb-5 shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute items-center justify-center" style={{
                  top: '40px',
                  left: `calc(25% * ${index + 1} - 10px)`,
                  width: '20%'
                }}>
                  <ArrowRight className="text-spark-purple/50 h-8 w-8" />
                  <div className="h-0.5 w-full bg-spark-purple/20"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
