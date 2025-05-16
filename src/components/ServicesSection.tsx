
import React from 'react';
import { Cpu, Code, Smartphone, Database } from 'lucide-react';
import ProfessionalServiceCard from './ProfessionalServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-7 w-7 text-amber-400" />,
      title: 'Custom Software Development',
      description: 'Build high-performance, user-friendly software that scales with your business needs.',
      features: [
        'Enterprise solutions',
        'Web applications',
        'Cross-platform software',
        'Legacy system modernization'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-amber-400" />,
      title: 'Mobile App Development',
      description: 'Create engaging mobile experiences for iOS and Android with cutting-edge technology.',
      features: [
        'Native app development',
        'Cross-platform solutions',
        'UI/UX design',
        'App maintenance & support'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Cpu className="h-7 w-7 text-amber-400" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to optimize operations and drive innovation.',
      features: [
        'Predictive analytics',
        'Computer vision',
        'Natural language processing',
        'Recommendation systems'
      ],
      iconBg: "from-amber-500/20 to-amber-600/10"
    },
    {
      icon: <Database className="h-7 w-7 text-amber-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: [
        'Big data processing',
        'Data warehousing',
        'Business intelligence',
        'Interactive dashboards'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
