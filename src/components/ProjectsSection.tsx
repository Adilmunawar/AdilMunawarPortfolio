
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Code, Zap, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Aditron',
      description: 'A futuristic social media and corporate chat platform that redefines user engagement through secure, email-based access and smooth global interaction.',
      technologies: ['React', 'Node.js', 'Socket.io', 'SQL', 'Express'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3543&auto=format&fit=crop',
      liveUrl: 'https://aditron.vercel.app',
      githubUrl: 'https://github.com/adilmunawar/aditron',
      featured: true,
      status: 'Paused',
      stats: { stars: 156, forks: 42 },
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AdiNox',
      description: 'A WebView-based Android app built for adinox.vercel.app, featuring camera integration, custom splash screen, and sleek UI aligned with brand palette.',
      technologies: ['React Native', 'WebView', 'Android SDK', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3882&auto=format&fit=crop',
      liveUrl: 'https://adinox.vercel.app',
      githubUrl: 'https://github.com/adilmunawar/adinox',
      featured: false,
      status: 'Live',
      stats: { stars: 89, forks: 23 },
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      title: 'AdiCorp',
      description: 'A powerful corporate employee management web app focused on automation of attendance, salary, leave management, and live admin dashboards in sleek dark mode.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Node.js', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=5760&auto=format&fit=crop',
      liveUrl: 'https://adicorp.vercel.app',
      githubUrl: 'https://github.com/adilmunawar/adicorp',
      featured: true,
      status: 'Development',
      stats: { stars: 234, forks: 67 },
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/10 to-cyber-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-cyan/5 to-cyber-blue/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyber-blue/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in-up drop-shadow-lg">
            Projects
          </h2>
          <p className="text-xl text-gray-200 animate-fade-in-up drop-shadow-md max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Innovative solutions crafted with passion and precision, showcasing modern development practices
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden bg-cyber-gray/20 border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyber-cyan/30 animate-scale-in backdrop-blur-xl relative ${
                project.featured ? 'ring-2 ring-cyber-cyan/40 shadow-lg shadow-cyber-cyan/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-all duration-1000`}></div>
              
              <div className="grid lg:grid-cols-2 gap-0 relative">
                {/* Enhanced Project Visual */}
                <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-cyber-cyan/20 to-cyber-blue/20 flex items-center justify-center overflow-hidden">
                  {/* Project Image */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 filter brightness-75 group-hover:brightness-90"
                  />
                  
                  {/* Multiple animated background layers */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-all duration-1000`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyber-cyan rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-cyber-blue rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-6 right-1/3 w-2 h-2 bg-cyber-cyan/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  
                  {/* Main content with enhanced animations */}
                  <div className="text-center text-cyber-cyan relative z-10 group-hover:scale-110 transition-transform duration-700">
                    <div className="text-6xl mb-4 animate-float group-hover:rotate-12 transition-transform duration-700 drop-shadow-2xl">🚀</div>
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-500 drop-shadow-lg">{project.title}</h3>
                    
                    {/* Enhanced status badge */}
                    <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border shadow-lg ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-300 border-green-500/40 shadow-green-500/20'
                        : project.status === 'Paused'
                        ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 shadow-yellow-500/20' 
                        : 'bg-orange-500/20 text-orange-300 border-orange-500/40 shadow-orange-500/20'
                    } group-hover:scale-105 transition-all duration-500`}>
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'Live' ? 'bg-green-400 animate-pulse' 
                        : project.status === 'Paused' ? 'bg-yellow-400 animate-pulse'
                        : 'bg-orange-400 animate-bounce'
                      }`}></div>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Enhanced Project Details */}
                <div className="p-8 flex flex-col justify-center relative">
                  {/* Enhanced featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-cyber-cyan/20 text-cyber-cyan text-sm rounded-full border border-cyber-cyan/40 backdrop-blur-sm shadow-lg animate-pulse">
                      <Star size={14} className="fill-current animate-spin-slow" />
                      Featured
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyber-cyan transition-colors duration-500 drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 drop-shadow-sm">
                    {project.description}
                  </p>
                  
                  {/* Enhanced project stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2 group-hover:text-yellow-400 transition-colors duration-500">
                      <Star size={16} className="group-hover:animate-pulse" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-500">
                      <Code size={16} className="group-hover:animate-pulse" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-cyber-cyan/20 text-cyber-cyan text-sm rounded-full border border-cyber-cyan/40 hover:bg-cyber-cyan/30 hover:scale-110 transition-all duration-500 cursor-default backdrop-blur-sm shadow-lg hover:shadow-cyber-cyan/30 animate-fade-in-up"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced action buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="bg-cyber-cyan text-black hover:bg-cyber-blue flex items-center gap-2 group/btn hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-cyber-cyan/40 backdrop-blur-sm border border-cyber-cyan/50 relative overflow-hidden"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-500">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black flex items-center gap-2 group/btn hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-cyber-cyan/30 backdrop-blur-sm relative overflow-hidden"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-500">Code</span>
                      <div className="absolute inset-0 bg-cyber-cyan transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Button>
                  </div>
                  
                  {/* Enhanced animated progress bar */}
                  <div className="mt-8 relative">
                    <div className="h-1 bg-cyber-gray/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className={`h-full bg-gradient-to-r ${project.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1500 shadow-lg`}
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
        <div className="text-center mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent rounded-full blur-xl"></div>
          <Button 
            className="bg-cyber-cyan text-black hover:bg-cyber-blue px-10 py-5 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-cyber-cyan/50 group relative overflow-hidden backdrop-blur-sm border border-cyber-cyan/50"
            onClick={() => window.open('https://github.com/adilmunawar', '_blank')}
          >
            <span className="relative z-10 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500">
              <Zap size={24} className="group-hover:rotate-180 transition-transform duration-700" />
              Explore More Projects
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
