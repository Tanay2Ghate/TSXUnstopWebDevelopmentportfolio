
import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML', level: 85, color: 'bg-[#E34F26]' },
  { name: 'CSS', level: 80, color: 'bg-[#1572B6]' },
  { name: 'JavaScript', level: 75, color: 'bg-[#F7DF1E]' },
  { name: 'React', level: 70, color: 'bg-[#61DAFB]' },
  { name: 'Responsive Design', level: 85, color: 'bg-neon-purple' },
  { name: 'UI/UX Basics', level: 65, color: 'bg-neon-pink' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-y-10 animate-fade-in">
            {skills.map((skill, index) => (
              <div key={skill.name} className="relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full`}
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Additional Technologies</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="skill-badge">Git</span>
              <span className="skill-badge">GitHub</span>
              <span className="skill-badge">Responsive Design</span>
              <span className="skill-badge">Bootstrap</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">SCSS</span>
              <span className="skill-badge">Figma Basics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
