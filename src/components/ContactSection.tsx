
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Instagram, Twitter, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      Icon: Mail,
      label: 'Email',
      value: 'Contact via Gmail',
      link: 'mailto:adilmunawar@gmail.com',
      color: 'text-red-400 border-red-400'
    },
    {
      Icon: Phone,
      label: 'WhatsApp',
      value: '+92 324 4965220',
      link: 'https://wa.me/923244965220',
      color: 'text-green-400 border-green-400'
    },
    {
      Icon: Instagram,
      label: 'Instagram',
      value: '@adilmunawarx',
      link: 'https://instagram.com/adilmunawarx',
      color: 'text-pink-400 border-pink-400'
    },
    {
      Icon: MessageSquare,
      label: 'Telegram',
      value: 'Telegram',
      link: 'https://t.me/adilmunawar',
      color: 'text-blue-400 border-blue-400'
    },
    {
      Icon: Twitter,
      label: 'LinkedIn',
      value: 'LinkedIn',
      link: 'https://linkedin.com/in/adilmunawar',
      color: 'text-blue-400 border-blue-400'
    },
    {
      Icon: Github,
      label: 'GitHub',
      value: 'github.com/adilmunawar',
      link: 'https://github.com/adilmunawar',
      color: 'text-white border-white'
    },
  ];

  const footerSocials = [
    { Icon: Twitter, link: 'https://twitter.com/AdilMunawarX' },
    { Icon: Github, link: 'https://github.com/adilmunawar' },
    { Icon: Instagram, link: 'https://instagram.com/adilmunawarx' },
    { Icon: Phone, link: 'https://wa.me/923244965220' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Contact
          </h2>
          <p className="text-xl text-gray-300">
            Contact me by: <span className="text-cyber-cyan font-semibold">Social Media</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="p-6 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
              onClick={() => window.open(method.link, '_blank')}
            >
              <div className="text-center">
                <div className={`w-16 h-16 rounded-lg border-2 ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.Icon size={32} />
                </div>
                <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                <p className="text-gray-300 text-sm">{method.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-cyber-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                Page Created By <span className="text-cyber-cyan font-semibold">Adil Munawar</span>
              </p>
              <p className="text-gray-400 text-sm">© 2025. All Rights Reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              {footerSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-cyan/20 rounded-full flex items-center justify-center hover:bg-cyber-cyan hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-cyber-cyan text-black rounded-full flex items-center justify-center hover:bg-cyber-blue transition-all duration-300 hover:scale-110 glow-effect"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
