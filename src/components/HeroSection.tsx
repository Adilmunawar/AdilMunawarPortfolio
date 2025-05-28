
import { Github, Instagram, Twitter, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/adilmunawarx', label: 'Instagram' },
    { Icon: Github, href: 'https://github.com/adilmunawar', label: 'GitHub' },
    { Icon: Twitter, href: 'https://twitter.com/AdilMunawarX', label: 'Twitter/X' },
    { Icon: Phone, href: 'tel:+923244965220', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-lg md:text-xl text-cyber-cyan mb-4 font-medium">
            Hello
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            I Am <span className="text-gradient">Adil Munawar</span>
          </h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
            Full-Stack Developer
          </h3>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-scale-in">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cyber-cyan/20 rounded-full flex items-center justify-center hover:bg-cyber-cyan hover:text-black transition-all duration-300 glow-effect hover:scale-110"
              aria-label={social.label}
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button 
            className="bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 glow-effect"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
