
import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [{
    Icon: Instagram,
    href: 'https://instagram.com/adilmunawarx',
    label: 'Instagram',
    color: 'hover:text-pink-400',
    bgGradient: 'from-pink-500/20 to-purple-500/20',
    hoverGradient: 'hover:from-pink-500/40 hover:to-purple-500/40',
    borderColor: 'border-pink-400/30 hover:border-pink-400/60',
    shadowColor: 'hover:shadow-pink-500/40'
  }, {
    Icon: Github,
    href: 'https://github.com/adilmunawar',
    label: 'GitHub',
    color: 'hover:text-white',
    bgGradient: 'from-gray-500/20 to-slate-500/20',
    hoverGradient: 'hover:from-gray-500/40 hover:to-slate-500/40',
    borderColor: 'border-gray-400/30 hover:border-white/60',
    shadowColor: 'hover:shadow-gray-500/40'
  }, {
    Icon: Linkedin,
    href: 'https://linkedin.com/in/adilmunawar',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    hoverGradient: 'hover:from-blue-500/40 hover:to-indigo-500/40',
    borderColor: 'border-blue-400/30 hover:border-blue-400/60',
    shadowColor: 'hover:shadow-blue-500/40'
  }, {
    Icon: Phone,
    href: 'tel:+923244965220',
    label: 'Phone',
    color: 'hover:text-green-400',
    bgGradient: 'from-green-500/20 to-emerald-500/20',
    hoverGradient: 'hover:from-green-500/40 hover:to-emerald-500/40',
    borderColor: 'border-green-400/30 hover:border-green-400/60',
    shadowColor: 'hover:shadow-green-500/40'
  }];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/20 to-cyber-dark opacity-80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Status indicator */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">Available for work</span>
            </div>
          </div>

          <h2 className="text-lg md:text-xl text-cyber-cyan mb-4 font-medium tracking-wider animate-pulse">
            Hello, I'm
          </h2>
          
          {/* Enhanced name with multiple effects */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg relative">
            <span className="text-gradient animate-shimmer relative z-10">Adil Munawar</span>
            <div className="absolute inset-0 text-gradient blur-sm opacity-50 animate-shimmer"></div>
          </h1>
          
          {/* Typing effect simulation */}
          <div className="relative mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 drop-shadow-md animate-fade-in-up" style={{
              animationDelay: '0.3s'
            }}>
              Full-Stack Developer
            </h3>
          </div>

          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            {['React', 'Node.js', 'TypeScript', 'Python', 'Azure'].map((skill, index) => (
              <span key={skill} className="px-3 py-1 text-sm bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-cyber-cyan backdrop-blur-sm hover:bg-cyber-cyan/20 transition-all duration-300 animate-scale-in" style={{
                animationDelay: `${0.5 + index * 0.1}s`
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced social links with modern rounded square design */}
        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{
          animationDelay: '0.6s'
        }}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative w-16 h-16 bg-gradient-to-br ${social.bgGradient} ${social.hoverGradient} rounded-2xl flex items-center justify-center transition-all duration-700 hover:scale-125 hover:rotate-12 backdrop-blur-sm border-2 ${social.borderColor} hover:shadow-2xl ${social.shadowColor} ${social.color} animate-subtle-tilt`}
              aria-label={social.label}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <social.Icon size={24} className="transition-all duration-500 group-hover:scale-110" />
              
              {/* Hover background effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyber-cyan/50 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>

        {/* Enhanced CTA button */}
        <div className="animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
          <Button 
            className="relative bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 glow-effect hover:shadow-2xl hover:shadow-cyber-cyan/50 backdrop-blur-sm border border-cyber-cyan/50 group overflow-hidden" 
            onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              Explore My Work →
            </span>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            {/* Particle effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i % 2 * 40}%`,
                  animationDelay: `${i * 0.1}s`
                }}></div>
              ))}
            </div>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
