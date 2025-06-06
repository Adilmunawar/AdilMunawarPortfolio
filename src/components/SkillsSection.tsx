
import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone, Server, GitBranch, Zap, Shield } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'GraphQL'],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'AWS', 'Azure', 'Docker'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Ionic', 'PWA', 'Cordova'],
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30'
    },
    {
      title: 'DevOps & Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub Actions', 'Jenkins', 'Kubernetes', 'Terraform'],
      color: 'from-teal-500 to-blue-500',
      borderColor: 'border-teal-500/30'
    },
    {
      title: 'AI & Automation',
      icon: Zap,
      skills: ['Machine Learning', 'TensorFlow', 'OpenAI API', 'Automation', 'Data Analysis'],
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500/30'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/5 to-cyber-dark"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-flow animate-fade-in-up drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group relative p-6 bg-cyber-gray/30 ${category.borderColor} hover:border-cyber-cyan/60 transition-all duration-700 hover:scale-105 backdrop-blur-xl animate-scale-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg`}>
                  <category.icon size={28} className="text-white drop-shadow-lg" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md group-hover:text-cyber-cyan transition-colors duration-500">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-block bg-cyber-gray/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 group-hover:bg-cyber-cyan/20 group-hover:text-cyber-cyan transition-all duration-500 backdrop-blur-sm border border-cyber-cyan/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-colors duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-colors duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
