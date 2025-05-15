
import React from 'react';
import { Laptop, Smartphone, Brain, BarChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card bg-white dark:bg-spark-dark/80 p-6 rounded-xl shadow-sm hover:shadow-md">
      <div className="p-3 bg-gradient-to-br from-spark-purple/20 to-spark-blue/20 rounded-lg w-14 h-14 mb-5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Laptop className="h-7 w-7 text-spark-purple" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.'
    },
    {
      icon: <Smartphone className="h-7 w-7 text-spark-purple" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that provide seamless experiences across iOS and Android devices.'
    },
    {
      icon: <Brain className="h-7 w-7 text-spark-purple" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that analyze data, recognize patterns, and make intelligent decisions for your business.'
    },
    {
      icon: <BarChart className="h-7 w-7 text-spark-purple" />,
      title: 'Data Analytics',
      description: 'Powerful data visualization and analytics tools that help you make informed business decisions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive technology solutions tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
