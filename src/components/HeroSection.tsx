
import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/adilmunawarx', label: 'Instagram' },
    { Icon: Github, href: 'https://github.com/adilmunawar', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/adilmunawar', label: 'LinkedIn' },
    { Icon: Phone, href: 'tel:+923244965220', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/20 to-cyber-dark opacity-80"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-lg md:text-xl text-cyber-cyan mb-4 font-medium tracking-wider animate-pulse">
            Hello
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            I am <span className="text-gradient animate-shimmer">Adil Munawar</span>
          </h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-200 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Full-Stack Developer
          </h3>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-cyber-cyan/20 rounded-full flex items-center justify-center hover:bg-cyber-cyan hover:text-black transition-all duration-500 glow-effect hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-cyber-cyan/30 animate-subtle-tilt"
              aria-label={social.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.Icon size={22} className="drop-shadow-lg" />
            </a>
          ))}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Button 
            className="bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 glow-effect hover:shadow-2xl hover:shadow-cyber-cyan/50 backdrop-blur-sm border border-cyber-cyan/50 group relative overflow-hidden"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              Read More →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
