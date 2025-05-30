
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Instagram, MessageSquare, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [{
    Icon: Mail,
    label: 'Email',
    value: 'Contact via Gmail',
    link: 'mailto:adilmunawar@gmail.com',
    color: 'text-red-400 border-red-400',
    bgColor: 'bg-red-500/10'
  }, {
    Icon: Phone,
    label: 'WhatsApp',
    value: '+92 324 4965220',
    link: 'https://wa.me/923244965220',
    color: 'text-green-400 border-green-400',
    bgColor: 'bg-green-500/10'
  }, {
    Icon: Instagram,
    label: 'Instagram',
    value: '@adilmunawarx',
    link: 'https://instagram.com/adilmunawarx',
    color: 'text-pink-400 border-pink-400',
    bgColor: 'bg-pink-500/10'
  }, {
    Icon: MessageSquare,
    label: 'Telegram',
    value: 'Telegram',
    link: 'https://t.me/adilmunawar',
    color: 'text-blue-400 border-blue-400',
    bgColor: 'bg-blue-500/10'
  }, {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    link: 'https://linkedin.com/in/adilmunawar',
    color: 'text-blue-500 border-blue-500',
    bgColor: 'bg-blue-600/10'
  }, {
    Icon: Github,
    label: 'GitHub',
    value: 'github.com/adilmunawar',
    link: 'https://github.com/adilmunawar',
    color: 'text-white border-white',
    bgColor: 'bg-gray-500/10'
  }];

  const footerSocials = [{
    Icon: Linkedin,
    link: 'https://linkedin.com/in/adilmunawar'
  }, {
    Icon: Github,
    link: 'https://github.com/adilmunawar'
  }, {
    Icon: Instagram,
    link: 'https://instagram.com/adilmunawarx'
  }, {
    Icon: Phone,
    link: 'https://wa.me/923244965220'
  }];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in-up">
            Contact
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
            Contact me by: <span className="text-cyber-cyan font-semibold">Social Media</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden relative animate-scale-in glow-effect hover:shadow-2xl`} 
              style={{
                animationDelay: `${index * 0.1}s`
              }} 
              onClick={() => window.open(method.link, '_blank')}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 ${method.bgColor} group-hover:opacity-80 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative text-center">
                <div className={`w-16 h-16 rounded-xl border-2 ${method.color} ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm shadow-lg animate-subtle-tilt`}>
                  <method.Icon size={32} className="group-hover:drop-shadow-lg" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-cyber-cyan transition-colors duration-300">{method.label}</h3>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{method.value}</p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-cyan/50 rounded-lg transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-cyber-cyan/20 pt-8 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                Page Created By <span className="text-cyber-cyan font-semibold">Adil Munawar</span>
              </p>
              <p className="text-gray-400 text-sm">© 2025 All Rights Reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              {footerSocials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-cyber-cyan/20 rounded-full flex items-center justify-center hover:bg-cyber-cyan hover:text-black transition-all duration-500 hover:scale-125 hover:rotate-12 glow-effect backdrop-blur-sm animate-subtle-tilt" 
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })} 
            className="w-14 h-14 bg-cyber-cyan text-black rounded-full flex items-center justify-center hover:bg-cyber-blue transition-all duration-500 hover:scale-125 glow-effect text-xl font-bold backdrop-blur-sm shadow-xl animate-float"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
