
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dynamicTexts = [
    "Passionate Developer",
    "Full-Stack Engineer", 
    "Problem Solver",
    "Innovation Driver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 95,
      description: 'Semantic markup and accessibility'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 92,
      description: 'Advanced styling and animations'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 90,
      description: 'ES6+ and modern features'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      level: 88,
      description: 'Type-safe development'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 93,
      description: 'Modern component architecture'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      level: 85,
      description: 'Full-stack React framework'
    }
  ];

  const backendSkills = [
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 87,
      description: 'Server-side JavaScript runtime'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 82,
      description: 'Versatile programming language'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      level: 89,
      description: 'Database management and queries'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      level: 91,
      description: 'Real-time backend services'
    },
    {
      name: 'Firebase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      level: 84,
      description: 'Google cloud platform'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      level: 86,
      description: 'Minimal web framework'
    }
  ];

  const SkillCard = ({ skill, index, category }: { skill: any, index: number, category: string }) => (
    <Card 
      key={skill.name}
      className={`relative p-6 bg-gradient-to-br from-cyber-gray/10 to-cyber-gray/30 border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-500 hover:scale-110 group cursor-pointer overflow-hidden ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setHoveredSkill(`${category}-${skill.name}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 via-cyber-blue/5 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
      
      {/* Skill icon with advanced hover effects */}
      <div className="relative z-10 text-center">
        <div className="relative mb-4 flex justify-center">
          <div className={`relative w-16 h-16 transition-all duration-500 ${
            hoveredSkill === `${category}-${skill.name}` ? 'scale-125 rotate-12' : ''
          }`}>
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]" 
              loading="lazy" 
            />
            {/* Orbiting particles */}
            {hoveredSkill === `${category}-${skill.name}` && (
              <>
                <div className="absolute -inset-2 animate-spin-slow">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="absolute -inset-4 animate-spin-reverse">
                  <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full absolute bottom-0 right-0"></div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Skill name with glow effect */}
        <h4 className={`text-lg font-bold mb-2 transition-all duration-300 ${
          hoveredSkill === `${category}-${skill.name}` ? 'text-cyber-cyan text-shadow-glow' : 'text-white'
        }`}>
          {skill.name}
        </h4>
        
        {/* Animated progress bar */}
        <div className="relative mb-3">
          <div className="w-full bg-cyber-gray/40 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full transition-all duration-1000 ${
                isVisible ? 'animate-progress-fill' : 'w-0'
              }`}
              style={{ 
                width: `${skill.level}%`,
                animationDelay: `${index * 200 + 500}ms`
              }}
            ></div>
          </div>
          <span className="absolute right-0 -top-6 text-xs text-cyber-cyan font-semibold">
            {skill.level}%
          </span>
        </div>
        
        {/* Skill description with reveal animation */}
        <p className={`text-sm text-gray-300 transition-all duration-500 ${
          hoveredSkill === `${category}-${skill.name}` ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
        }`}>
          {skill.description}
        </p>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-cyber-cyan/20 group-hover:border-t-cyber-cyan/50 transition-colors duration-300"></div>
    </Card>
  );

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div id="about-section" className="max-w-7xl mx-auto relative z-10">
        {/* Advanced title with morphing text */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}>
            <span className="text-gradient animate-shimmer">About Me</span>
          </h2>
          
          {/* Morphing subtitle */}
          <div className="h-8 mb-8">
            <h3 className={`text-2xl md:text-3xl font-semibold text-cyber-cyan transition-all duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              {dynamicTexts[currentTextIndex]}
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced about content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-cyan/20 via-cyber-blue/20 to-cyber-cyan/20 rounded-lg blur-lg opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-cyber-gray/20 backdrop-blur-sm p-8 rounded-lg border border-cyber-cyan/30">
                <h3 className="text-3xl font-bold text-cyber-cyan mb-6 flex items-center">
                  <span className="w-2 h-2 bg-cyber-cyan rounded-full mr-4 animate-pulse"></span>
                  Who I Am
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-white bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                      I am a passionate and results-driven developer
                    </strong> with extensive experience in frontend development, backend systems, and mobile/web app integration.
                  </p>
                  <p className="text-lg">
                    Over the years, I've built a strong presence in the tech space through my innovative projects, each crafted to solve real-world problems and push the boundaries of design and functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced contact info with animated cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-cyber-gray/40 p-6 rounded-lg border border-cyber-cyan/20">
                  <p className="text-lg">
                    <strong className="text-cyber-cyan">Phone:</strong> 
                    <span className="ml-2 text-white">+92 324 4965220</span>
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-cyber-gray/40 p-6 rounded-lg border border-cyber-cyan/20">
                  <p className="text-lg">
                    <strong className="text-cyber-cyan">Focus:</strong> 
                    <span className="ml-2 text-white">Full-Stack Development</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced skills section */}
          <div className={`space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            {/* Frontend Skills */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-cyber-cyan mx-6 relative">
                  <span className="relative z-10">Front-End</span>
                  <div className="absolute -inset-2 bg-cyber-cyan/20 rounded-lg blur-md opacity-50"></div>
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent flex-1"></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} category="frontend" />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-cyber-blue mx-6 relative">
                  <span className="relative z-10">Back-End</span>
                  <div className="absolute -inset-2 bg-cyber-blue/20 rounded-lg blur-md opacity-50"></div>
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent flex-1"></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} category="backend" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl animate-drift-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl animate-drift-2"></div>
      </div>
    </section>
  );
};

export default AboutSection;
