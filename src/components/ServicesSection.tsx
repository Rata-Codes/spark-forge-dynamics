
import React from 'react';
import { Laptop, Smartphone, Brain, BarChart } from 'lucide-react';
import InteractiveServiceCard from './InteractiveServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Laptop className="h-7 w-7 text-spark-purple" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive UI/UX design',
        'Progressive Web Apps (PWAs)',
        'React & Next.js development',
        'API integration'
      ],
      iconBg: "from-spark-purple/20 to-spark-ember/20"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-spark-ember" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that provide seamless experiences across iOS and Android devices.',
      features: [
        'iOS & Android development',
        'React Native & Flutter',
        'Mobile UI/UX design',
        'App store submission'
      ],
      iconBg: "from-spark-ember/20 to-spark-purple/20"
    },
    {
      icon: <Brain className="h-7 w-7 text-spark-purple" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that analyze data, recognize patterns, and make intelligent decisions for your business.',
      features: [
        'Computer vision systems',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI models'
      ],
      iconBg: "from-spark-purple/20 to-spark-ember/20"
    },
    {
      icon: <BarChart className="h-7 w-7 text-spark-ember" />,
      title: 'Data Analytics',
      description: 'Powerful data visualization and analytics tools that help you make informed business decisions.',
      features: [
        'Business intelligence dashboards',
        'Real-time analytics',
        'Data visualization',
        'Performance reporting'
      ],
      iconBg: "from-spark-ember/20 to-spark-purple/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">
          <rect x="100" y="100" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="720" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100,700 Q400,500 700,700 T1300,700" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100,200 L1300,200" strokeDasharray="10,10" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M150,100 L150,700" strokeDasharray="10,10" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M1250,100 L1250,700" strokeDasharray="10,10" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="250" cy="250" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="1150" cy="550" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive technology solutions tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <InteractiveServiceCard
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
      
      {/* Floating tech elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-spark-purple/10 rounded-full"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border border-spark-ember/10 rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 border border-spark-purple/10 rounded-full"></div>
    </section>
  );
};

export default ServicesSection;
