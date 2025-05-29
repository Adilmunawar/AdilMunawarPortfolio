
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const AboutSection = () => {
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
      description: 'Semantic markup and accessibility'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: 'Advanced styling and animations'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'ES6+ and modern features'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Type-safe development'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Modern component architecture'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      description: 'Full-stack React framework'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      description: 'Utility-first CSS framework'
    }
  ];

  const backendSkills = [
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Server-side JavaScript runtime'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Versatile programming language'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      description: 'Database management and queries'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      description: 'Real-time backend services'
    },
    {
      name: 'Firebase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      description: 'Google cloud platform'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      description: 'Minimal web framework'
    }
  ];

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => (
    <Card 
      key={skill.name}
      className={`relative p-8 bg-gradient-to-br from-cyber-gray/10 to-cyber-gray/30 border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-700 hover:scale-105 group cursor-pointer overflow-hidden backdrop-blur-sm ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 via-cyber-blue/5 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
      
      {/* Skill icon with enhanced hover effects */}
      <div className="relative z-10 text-center">
        <div className="relative mb-6 flex justify-center">
          <div className="relative w-20 h-20 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="w-full h-full object-contain transition-all duration-700 group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]" 
              loading="lazy" 
            />
            {/* Orbiting particles */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-2 animate-spin-slow">
                <div className="w-3 h-3 bg-cyber-cyan rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="absolute -inset-6 animate-spin-reverse">
                <div className="w-2 h-2 bg-cyber-blue rounded-full absolute bottom-0 right-0"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skill name with enhanced glow effect */}
        <h4 className="text-xl font-bold mb-4 transition-all duration-500 group-hover:text-cyber-cyan group-hover:text-shadow-glow text-white">
          {skill.name}
        </h4>
        
        {/* Skill description with enhanced reveal animation */}
        <p className="text-sm text-gray-300 transition-all duration-700 group-hover:text-gray-100 leading-relaxed">
          {skill.description}
        </p>
      </div>
      
      {/* Enhanced corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-cyber-cyan/20 group-hover:border-t-cyber-cyan/60 transition-all duration-500"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-cyan/20 via-cyber-blue/20 to-cyber-cyan/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
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
          <div className="h-8 mb-12">
            <h3 className={`text-2xl md:text-3xl font-semibold text-cyber-cyan transition-all duration-700 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              {dynamicTexts[currentTextIndex]}
            </h3>
          </div>
        </div>

        {/* Who I Am Section with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
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

          {/* Professional Image with Glowing Circle */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            <div className="relative">
              {/* Outer glowing rings */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyber-cyan/30 via-cyber-blue/30 to-cyber-cyan/30 animate-spin-slow blur-lg"></div>
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyber-blue/40 via-cyber-cyan/40 to-cyber-blue/40 animate-spin-reverse blur-md"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyber-cyan/50 shadow-[0_0_50px_rgba(0,255,255,0.5)]">
                <img 
                  src="/lovable-uploads/eaf50e40-682a-4730-ac3c-407cf3e4896e.png" 
                  alt="Professional Portrait"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute -inset-12 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyber-cyan rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-cyber-blue rounded-full animate-float-delayed opacity-50"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse opacity-70"></div>
                <div className="absolute bottom-0 left-1/3 w-2.5 h-2.5 bg-cyber-blue rounded-full animate-float opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills sections moved below */}
        <div className={`space-y-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
        }`}>
          {/* Frontend Skills */}
          <div>
            <div className="flex items-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent flex-1"></div>
              <h3 className="text-3xl font-bold text-cyber-cyan mx-8 relative">
                <span className="relative z-10">Frontend Technologies</span>
                <div className="absolute -inset-4 bg-cyber-cyan/20 rounded-lg blur-md opacity-50"></div>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <div className="flex items-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent flex-1"></div>
              <h3 className="text-3xl font-bold text-cyber-blue mx-8 relative">
                <span className="relative z-10">Backend Technologies</span>
                <div className="absolute -inset-4 bg-cyber-blue/20 rounded-lg blur-md opacity-50"></div>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl animate-drift-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl animate-drift-2"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-cyber-cyan/3 rounded-full blur-3xl animate-drift-3"></div>
      </div>
    </section>
  );
};

export default AboutSection;
