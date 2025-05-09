
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Experience</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-full bg-neon-purple/20 text-neon-purple">
                  <Briefcase size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Web Development Intern</h3>
                <p className="text-neon-blue mb-2">Techsonic Solution</p>
                <p className="text-gray-400 mb-4">Summer 2024</p>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mt-2"></span>
                    <span>Built responsive web pages using HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mt-2"></span>
                    <span>Collaborated with the design team to implement front-end layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mt-2"></span>
                    <span>Optimized website performance and improved UI/UX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mt-2"></span>
                    <span>Assisted with debugging and fixing cross-browser compatibility issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 italic">Looking for new opportunities to grow and contribute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
