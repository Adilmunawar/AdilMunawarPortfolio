
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Search, Wrench, TrendingUp, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      Icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms. Creating scalable and efficient solutions for your business needs.',
    },
    {
      Icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with seamless user experiences. Specializing in React Native and hybrid app development with native performance.',
    },
    {
      Icon: TrendingUp,
      title: 'Digital Solutions',
      description: 'Custom digital solutions including corporate management systems, social platforms, and automation tools designed to streamline business operations.',
    },
    {
      Icon: Wrench,
      title: 'System Integration',
      description: 'Seamless integration of various systems and APIs to create unified digital ecosystems. Database management and server configuration expertise.',
    },
    {
      Icon: Search,
      title: 'Performance Optimization',
      description: 'Website and application performance optimization, SEO implementation, and user experience enhancement to maximize your digital presence.',
    },
    {
      Icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick development of MVPs and prototypes to validate ideas and accelerate time-to-market using agile development methodologies.',
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyber-cyan/30 transition-colors duration-300">
                  <service.Icon size={32} className="text-cyber-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
