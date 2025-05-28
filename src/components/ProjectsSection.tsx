
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Aditron',
      description: 'A futuristic social media and corporate chat platform that redefines user engagement through secure, email-based access and smooth global interaction.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AdiNox',
      description: 'A WebView-based Android app built for adinox.vercel.app, featuring camera integration, custom splash screen, and sleek UI aligned with brand palette.',
      technologies: ['React Native', 'WebView', 'Android SDK', 'JavaScript'],
      image: '/api/placeholder/400/250',
      liveUrl: 'https://adinox.vercel.app',
      githubUrl: '#',
    },
    {
      title: 'AdiCorp',
      description: 'A powerful corporate employee management web app focused on automation of attendance, salary, leave management, and live admin dashboards in sleek dark mode.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Chart.js'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projects
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-cyber-cyan/20 to-cyber-blue/20 flex items-center justify-center">
                  <div className="text-center text-cyber-cyan">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-sm rounded-full border border-cyber-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      className="bg-cyber-cyan text-black hover:bg-cyber-blue flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      Repository
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/adilmunawar', '_blank')}
          >
            Read More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
