
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
      {/* Enhanced background with moving gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-gray/10 to-cyber-dark"></div>
      <div className="absolute inset-0 bg-gradient-moving opacity-30"></div>
      
      <div id="about-section" className="max-w-7xl mx-auto relative z-10">
        {/* Professional title section */}
        <div className="text-center mb-20">
          <div className={`inline-block transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}>
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-bold mb-8 relative">
                <span className="text-gradient animate-shimmer relative z-10">About Me</span>
                <div className="absolute inset-0 text-gradient blur-sm opacity-30 animate-shimmer"></div>
              </h2>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan rounded-tl-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan rounded-br-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Enhanced morphing subtitle */}
          <div className="h-12 mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent rounded-full blur-xl"></div>
            <h3 className={`text-3xl md:text-4xl font-semibold text-cyber-cyan transition-all duration-700 relative z-10 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              {dynamicTexts[currentTextIndex]}
            </h3>
          </div>
        </div>

        {/* Professional content layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Enhanced content cards */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'
          }`}>
            {/* Main about card */}
            <Card className="relative group overflow-hidden bg-cyber-gray/20 border-cyber-cyan/30 backdrop-blur-xl hover:border-cyber-cyan/60 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-cyber-cyan to-cyber-blue rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-3xl font-bold text-cyber-cyan">Who I Am</h3>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg group-hover:text-white transition-colors duration-300">
                    <span className="text-white font-semibold bg-gradient-to-r from-cyber-cyan to-cyber-blue bg-clip-text text-transparent">
                      I am a passionate and results-driven developer
                    </span> with extensive experience in frontend development, backend systems, and mobile/web app integration.
                  </p>
                  <p className="text-lg group-hover:text-white transition-colors duration-300">
                    Over the years, I've built a strong presence in the tech space through my innovative projects, each crafted to solve real-world problems and push the boundaries of design and functionality.
                  </p>
                </div>
              </div>
            </Card>

            {/* Enhanced info cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="relative group overflow-hidden bg-cyber-gray/20 border-cyber-cyan/20 backdrop-blur-xl hover:border-cyber-cyan/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-cyber-cyan font-semibold text-sm uppercase tracking-wider">Contact</p>
                      <p className="text-white font-mono">+92 324 4965220</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="relative group overflow-hidden bg-cyber-gray/20 border-cyber-cyan/20 backdrop-blur-xl hover:border-cyber-cyan/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div>
                      <p className="text-cyber-blue font-semibold text-sm uppercase tracking-wider">Specialization</p>
                      <p className="text-white font-mono">Full-Stack Development</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional image with advanced effects */}
          <div className={`flex justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            <div className="relative group">
              {/* Multi-layered glow effects */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyber-cyan/30 via-cyber-blue/30 to-purple-500/30 animate-spin-slow blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyber-blue/40 via-purple-500/40 to-cyber-cyan/40 animate-spin-reverse blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50 animate-pulse blur-lg"></div>
              
              {/* Main image container with advanced border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-purple-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                    <img 
                      src="/lovable-uploads/eaf50e40-682a-4730-ac3c-407cf3e4896e.png" 
                      alt="Professional Portrait"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                    />
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/30 via-transparent to-transparent group-hover:opacity-0 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating particles */}
              <div className="absolute -inset-12 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full animate-float opacity-60 ${
                      i % 3 === 0 ? 'bg-cyber-cyan' : i % 3 === 1 ? 'bg-cyber-blue' : 'bg-purple-500'
                    }`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/3 rounded-full blur-3xl animate-drift-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-blue/3 rounded-full blur-3xl animate-drift-2"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-500/3 rounded-full blur-3xl animate-drift-3"></div>
      </div>
    </section>
  );
};

export default AboutSection;
