
import React from 'react';
import { Code, Smartphone, Database } from 'lucide-react';
import ProfessionalServiceCard from './ProfessionalServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-7 w-7 text-amber-400" />,
      title: 'Web Development',
      description: 'Custom websites & web applications that drive business growth.',
      features: [
        'React',
        'Angular',
        'Node.js',
        'Our expert web developers create responsive, user-friendly websites and web applications using the latest technologies. From simple landing pages to complex enterprise solutions, we deliver high-quality web experiences that engage users and drive business growth.'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-amber-400" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with seamless user experience.',
      features: [
        'Flutter',
        'React Native',
        'Swift',
        'We build custom mobile applications for iOS and Android that provide seamless experiences across devices. Our mobile development team focuses on intuitive interfaces, optimal performance, and innovative features to help your business reach customers on their preferred devices.'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Database className="h-7 w-7 text-amber-400" />,
      title: 'Machine Learning',
      description: 'AI solutions that transform data into business insights.',
      features: [
        'TensorFlow',
        'PyTorch',
        'NLP',
        'Harness the power of artificial intelligence and machine learning to gain insights from your data. Our data scientists develop custom ML models that automate processes, predict trends, and enhance decision-making. We specialize in computer vision, natural language processing, and predictive analytics.'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#121212]/95">
      {/* Professional grid background animation */}
      <div className="absolute inset-0 z-0">
        <div className="grid-animation"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise <span className="text-gradient-professional">Services</span></h2>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
            We deliver comprehensive technology solutions tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ProfessionalServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              iconBg={service.iconBg}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Professional accent elements */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
