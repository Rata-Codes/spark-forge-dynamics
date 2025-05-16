
import React from 'react';
import { Laptop, Smartphone, Brain, BarChart } from 'lucide-react';
import ProfessionalServiceCard from './ProfessionalServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Laptop className="h-7 w-7 text-blue-400" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive UI/UX design',
        'Progressive Web Apps (PWAs)',
        'React & Next.js development',
        'API integration'
      ],
      iconBg: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-blue-400" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that provide seamless experiences across iOS and Android devices.',
      features: [
        'iOS & Android development',
        'React Native & Flutter',
        'Mobile UI/UX design',
        'App store submission'
      ],
      iconBg: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <Brain className="h-7 w-7 text-blue-400" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that analyze data, recognize patterns, and make intelligent decisions for your business.',
      features: [
        'Computer vision systems',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI models'
      ],
      iconBg: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: <BarChart className="h-7 w-7 text-blue-400" />,
      title: 'Data Analytics',
      description: 'Powerful data visualization and analytics tools that help you make informed business decisions.',
      features: [
        'Business intelligence dashboards',
        'Real-time analytics',
        'Data visualization',
        'Performance reporting'
      ],
      iconBg: "from-blue-500/20 to-blue-600/10"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#040714]/95">
      {/* Professional grid background animation */}
      <div className="absolute inset-0 z-0">
        <div className="grid-animation"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise <span className="text-gradient-professional">Services</span></h2>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
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
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
