
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

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div id="about-section" className="max-w-7xl mx-auto relative z-10">
        {/* Advanced title with morphing text */}
        <div className="text-center mb-16">
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

        {/* Who I Am Section with Image - Centered and Closer */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
          {/* Enhanced about content - Left side */}
          <div className={`flex-1 max-w-2xl space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-cyan/20 via-cyber-blue/20 to-cyber-cyan/20 rounded-lg blur-lg opacity-30 animate-tech-pulse"></div>
              <div className="relative bg-cyber-gray/20 backdrop-blur-sm p-6 rounded-lg border border-cyber-cyan/30">
                <h3 className="text-2xl lg:text-3xl font-bold text-cyber-cyan mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyber-cyan rounded-full mr-4 animate-pulse"></span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-base lg:text-lg">
                    <strong className="text-white bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                      I am a passionate and results-driven developer
                    </strong> with extensive experience in frontend development, backend systems, and mobile/web app integration.
                  </p>
                  <p className="text-base lg:text-lg">
                    Over the years, I've built a strong presence in the tech space through my innovative projects, each crafted to solve real-world problems and push the boundaries of design and functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced contact info with animated cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-cyber-gray/40 p-4 rounded-lg border border-cyber-cyan/20">
                  <p className="text-sm lg:text-base">
                    <strong className="text-cyber-cyan">Phone:</strong> 
                    <span className="ml-2 text-white">+92 324 4965220</span>
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-cyber-gray/40 p-4 rounded-lg border border-cyber-cyan/20">
                  <p className="text-sm lg:text-base">
                    <strong className="text-cyber-cyan">Focus:</strong> 
                    <span className="ml-2 text-white">Full-Stack Development</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image with Glowing Circle - Right side, closer */}
          <div className={`flex-shrink-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            <div className="relative">
              {/* Outer glowing rings */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyber-cyan/30 via-cyber-blue/30 to-cyber-cyan/30 animate-spin-slow blur-lg"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyber-blue/40 via-cyber-cyan/40 to-cyber-blue/40 animate-spin-reverse blur-md"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyber-cyan/50 shadow-[0_0_50px_rgba(0,255,255,0.5)]">
                <img 
                  src="/lovable-uploads/eaf50e40-682a-4730-ac3c-407cf3e4896e.png" 
                  alt="Professional Portrait"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute -inset-8 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyber-cyan rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-cyber-blue rounded-full animate-float-delayed opacity-50"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse opacity-70"></div>
                <div className="absolute bottom-0 left-1/3 w-2.5 h-2.5 bg-cyber-blue rounded-full animate-float opacity-40"></div>
              </div>
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
