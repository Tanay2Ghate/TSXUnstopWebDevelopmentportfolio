
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-neon-blue">T</span>anay
            </a>
            <p className="text-gray-400 mt-2">Front-End Web Developer</p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#home" className="text-gray-400 hover:text-neon-blue transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-neon-blue transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-neon-blue transition-colors">Experience</a>
            <a href="#services" className="text-gray-400 hover:text-neon-blue transition-colors">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</a>
          </div>
          
          <div>
            <a 
              href="#contact" 
              className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
