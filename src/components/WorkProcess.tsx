
import React from 'react';
import { Search, Lightbulb, Code, Check, ArrowRight } from 'lucide-react';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and vision to define the project scope.',
      color: 'from-blue-500 to-blue-400'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: 'Design',
      description: 'Our team creates innovative and intuitive designs focusing on user experience and your brand identity.',
      color: 'from-blue-600 to-blue-500'
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: 'Development',
      description: 'We build your solution using the latest technologies and best practices to ensure quality and performance.',
      color: 'from-blue-700 to-blue-600'
    },
    {
      icon: <Check className="h-6 w-6 text-white" />,
      title: 'Delivery',
      description: 'After thorough testing and your approval, we deploy your solution with ongoing support and maintenance.',
      color: 'from-blue-800 to-blue-700'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#040714]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient-professional">Process</span></h2>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
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
                <div className="flex flex-col items-center text-center bg-[#0B1029]/70 backdrop-blur-sm border border-blue-500/10 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-500/20">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${step.color} mb-5 shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-blue-100/70">{step.description}</p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mt-4"></div>
                  <div className="text-blue-500 font-bold text-sm mt-3">0{index + 1}</div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute items-center justify-center" style={{
                  top: '40px',
                  left: `calc(25% * ${index + 1} - 10px)`,
                  width: '20%'
                }}>
                  <ArrowRight className="text-blue-500/50 h-6 w-6" />
                  <div className="h-px w-full bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10"></div>
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
