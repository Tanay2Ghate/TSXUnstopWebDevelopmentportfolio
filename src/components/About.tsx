
import { GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-neon-blue/20 text-neon-blue">
                <User size={24} />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              Passionate about web and app development, I thrive on turning ideas into functional, user-friendly digital experiences. I enjoy solving complex problems with clean, efficient code and creating interfaces that users love to interact with.
            </p>
            
            <p className="text-gray-300">
              Beyond coding, I'm enthusiastic about exploring new technologies, collaborating with fellow developers, and continuously expanding my skills to stay at the forefront of this ever-evolving digital landscape.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-neon-blue/20 text-neon-blue">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education & Interests</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white">B.Tech Student</h4>
              <p className="text-neon-blue">SRM University</p>
              <p className="text-gray-400">Currently in Third Year</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-3">Personal Interests</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                  Exploring modern JavaScript frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                  User interface design principles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                  Mobile-first responsive development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                  Continuous learning and growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
