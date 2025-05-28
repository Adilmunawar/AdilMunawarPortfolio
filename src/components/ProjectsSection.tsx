
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Code, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Aditron',
      description: 'A futuristic social media and corporate chat platform that redefines user engagement through secure, email-based access and smooth global interaction.',
      technologies: ['React', 'Node.js', 'Socket.io', 'SQL', 'Express'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'Live',
      stats: { stars: 156, forks: 42 }
    },
    {
      title: 'AdiNox',
      description: 'A WebView-based Android app built for adinox.vercel.app, featuring camera integration, custom splash screen, and sleek UI aligned with brand palette.',
      technologies: ['React Native', 'WebView', 'Android SDK', 'JavaScript'],
      image: '/api/placeholder/400/250',
      liveUrl: 'https://adinox.vercel.app',
      githubUrl: '#',
      featured: false,
      status: 'Live',
      stats: { stars: 89, forks: 23 }
    },
    {
      title: 'AdiCorp',
      description: 'A powerful corporate employee management web app focused on automation of attendance, salary, leave management, and live admin dashboards in sleek dark mode.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Node.js', 'Chart.js'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'Development',
      stats: { stars: 234, forks: 67 }
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in-up">
            Projects
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Innovative solutions crafted with passion and precision
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyber-cyan/20 animate-scale-in ${
                project.featured ? 'ring-2 ring-cyber-cyan/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0 relative">
                {/* Project Visual */}
                <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-cyber-cyan/20 to-cyber-blue/20 flex items-center justify-center overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-cyber-blue/10 animate-pulse" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyber-cyan rounded-full animate-ping" />
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/2 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Main Content */}
                  <div className="text-center text-cyber-cyan relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-6xl mb-4 animate-float group-hover:rotate-12 transition-transform duration-500">🚀</div>
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-300">{project.title}</h3>
                    
                    {/* Status Badge */}
                    <div className={`inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400 animate-bounce'
                      }`} />
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center relative">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan text-xs rounded-full border border-cyber-cyan/30">
                      <Star size={12} className="fill-current" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyber-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-sm rounded-full border border-cyber-cyan/30 hover:bg-cyber-cyan/30 hover:scale-105 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="bg-cyber-cyan text-black hover:bg-cyber-blue flex items-center gap-2 group/btn hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/30"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Demo</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black flex items-center gap-2 group/btn hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/20"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Repository</span>
                    </Button>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-6 relative">
                    <div className="h-1 bg-cyber-gray/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent rounded-full" />
          <Button 
            className="bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyber-cyan/40 group relative overflow-hidden"
            onClick={() => window.open('https://github.com/adilmunawar', '_blank')}
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              <Zap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Explore More Projects →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
