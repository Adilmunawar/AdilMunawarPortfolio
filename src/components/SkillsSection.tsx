
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js & Express', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python & AI/ML', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Database Design', level: 87, color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Platforms', level: 82, color: 'from-indigo-500 to-purple-500' },
    { name: 'Mobile Development', level: 80, color: 'from-pink-500 to-rose-500' },
    { name: 'DevOps & CI/CD', level: 78, color: 'from-teal-500 to-cyan-500' },
  ];

  const frameworks = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'FastAPI',
    'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS',
    'Vercel', 'Tailwind CSS', 'TypeScript', 'Python', 'JavaScript'
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cyber-dark via-cyber-gray/5 to-cyber-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyber-cyan/3 rounded-full blur-3xl animate-drift-1"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyber-blue/3 rounded-full blur-3xl animate-drift-2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 section-heading animate-fade-in-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient-enhanced mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Technical Proficiency
            </h3>
            
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-cyber-gray/20 border-cyber-cyan/30 hover:border-cyber-cyan/60 backdrop-blur-xl transition-all duration-500 animate-scale-in neon-hover"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-cyber-cyan font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-cyber-gray/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `scale-in 1s ease-out ${0.5 + index * 0.1}s both`
                    }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-3xl font-bold text-gradient-enhanced mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Technologies & Frameworks
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frameworks.map((framework, index) => (
                <Card 
                  key={framework}
                  className="p-4 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/60 backdrop-blur-xl text-center transition-all duration-500 hover:scale-105 animate-scale-in neon-hover group"
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                >
                  <span className="text-white font-medium group-hover:text-cyber-cyan transition-colors duration-300">
                    {framework}
                  </span>
                </Card>
              ))}
            </div>

            {/* Additional info card */}
            <Card className="mt-8 p-6 bg-cyber-gray/20 border-cyber-cyan/30 hover:border-cyber-cyan/60 backdrop-blur-xl transition-all duration-500 animate-fade-in-up neon-hover" style={{ animationDelay: '1s' }}>
              <h4 className="text-xl font-bold text-gradient-enhanced mb-4">Continuous Learning</h4>
              <p className="text-gray-200 leading-relaxed">
                Staying at the forefront of technology through continuous learning and hands-on experience 
                with emerging tools and methodologies. Always exploring new ways to solve complex problems 
                and deliver innovative solutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
