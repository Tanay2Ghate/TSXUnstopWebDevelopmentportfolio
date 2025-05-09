
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left animate-fade-in-slow">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="text-neon-blue animate-glow">Tanay</span>
              <span className="block mt-2">Front-End Developer</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Passionate about turning ideas into functional, user-friendly digital experiences with clean code and modern design.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-neon-blue text-black font-medium rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2"
              >
                Get in touch <ArrowRight size={18} />
              </a>
              
              <a 
                href="#about" 
                className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Learn more
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-neon-blue/30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/13a85c3c-19ea-4888-ac6f-a7aba15d4ad8.png" 
                alt="Tanay's Profile Image"
                className="w-full h-full object-cover rounded-full p-2"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
