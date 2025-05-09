
import React from 'react';
import { Code, Layout, Globe } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Layout size={36} />,
    title: 'Web Design',
    description: 'Creating visually appealing and user-friendly website layouts that align with your brand and goals.',
  },
  {
    icon: <Code size={36} />,
    title: 'Front-End Development',
    description: 'Building responsive, interactive websites using modern HTML, CSS, and JavaScript frameworks.',
  },
  {
    icon: <Globe size={36} />,
    title: 'Responsive Web Development',
    description: 'Ensuring your website looks and functions perfectly across all devices and screen sizes.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">What I Offer</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="glass-card p-6 md:p-8 flex flex-col items-center text-center group hover:border-neon-blue/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 text-neon-blue p-4 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-300">
              I'm constantly expanding my skillset and will be adding more services soon, including UI/UX design, JavaScript frameworks specialization, and website performance optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
