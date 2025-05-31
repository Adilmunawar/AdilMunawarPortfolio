
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Code, Zap, ArrowRight, Eye, GitBranch } from 'lucide-react';

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
      stats: { stars: 156, forks: 42, views: 1240 },
      gradient: 'from-blue-500 via-purple-500 to-cyan-500',
      category: 'Full Stack'
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
      stats: { stars: 89, forks: 23, views: 890 },
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      category: 'Mobile App'
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
      stats: { stars: 234, forks: 67, views: 1560 },
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      category: 'Enterprise'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-gray-900/50 to-cyber-dark"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyber-cyan/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyber-cyan text-sm font-semibold tracking-widest uppercase bg-cyber-cyan/10 px-4 py-2 rounded-full border border-cyber-cyan/30 backdrop-blur-sm">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient animate-fade-in-up drop-shadow-2xl">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Discover innovative solutions crafted with cutting-edge technologies, 
            <span className="text-cyber-cyan font-semibold"> modern design principles</span>, 
            and exceptional user experiences
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden bg-gradient-to-br from-cyber-gray/30 via-cyber-gray/20 to-transparent border-2 border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyber-cyan/30 animate-scale-in backdrop-blur-xl relative ${
                project.featured ? 'ring-2 ring-cyber-cyan/50 shadow-xl shadow-cyber-cyan/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Enhanced background layers */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-1000`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0 relative min-h-[500px]`}>
                {/* Enhanced Project Visual */}
                <div className={`relative aspect-video lg:aspect-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Project Image with advanced effects */}
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-60 group-hover:brightness-90 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-1000`}></div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-6 left-6 w-2 h-2 bg-cyber-cyan rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                  
                  {/* Enhanced status badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-bold backdrop-blur-md border-2 shadow-xl group-hover:scale-110 transition-all duration-500 ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-300 border-green-400/60 shadow-green-500/30'
                        : project.status === 'Paused'
                        ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/60 shadow-yellow-500/30' 
                        : 'bg-orange-500/20 text-orange-300 border-orange-400/60 shadow-orange-500/30'
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${
                        project.status === 'Live' ? 'bg-green-400 animate-pulse' 
                        : project.status === 'Paused' ? 'bg-yellow-400 animate-pulse'
                        : 'bg-orange-400 animate-bounce'
                      }`}></div>
                      {project.status}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Project Details */}
                <div className={`p-10 flex flex-col justify-center relative bg-gradient-to-br from-cyber-gray/10 to-transparent ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Enhanced featured badge */}
                  {project.featured && (
                    <div className="absolute top-6 right-6 flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyber-cyan/20 to-blue-500/20 text-cyber-cyan rounded-xl border border-cyber-cyan/50 backdrop-blur-sm shadow-lg">
                      <Star size={16} className="fill-current animate-spin-slow" />
                      <span className="font-bold text-sm">Featured</span>
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-cyber-cyan transition-colors duration-500 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-500">
                    {project.description}
                  </p>
                  
                  {/* Enhanced project stats */}
                  <div className="flex items-center gap-8 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-yellow-400 transition-colors duration-500">
                      <Star size={18} className="group-hover:animate-pulse" />
                      <span className="font-semibold">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-500">
                      <GitBranch size={18} className="group-hover:animate-pulse" />
                      <span className="font-semibold">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-green-400 transition-colors duration-500">
                      <Eye size={18} className="group-hover:animate-pulse" />
                      <span className="font-semibold">{project.stats.views}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced technologies */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-5 py-3 bg-gradient-to-r from-cyber-cyan/20 to-blue-500/20 text-cyber-cyan text-sm font-semibold rounded-xl border border-cyber-cyan/40 hover:bg-cyber-cyan/30 hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-default backdrop-blur-sm shadow-lg hover:shadow-cyber-cyan/40"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced action buttons */}
                  <div className="flex gap-5">
                    <Button 
                      className="bg-gradient-to-r from-cyber-cyan to-blue-500 text-black hover:from-blue-500 hover:to-purple-500 flex items-center gap-3 group/btn hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-cyber-cyan/50 backdrop-blur-sm border border-cyber-cyan/50 relative overflow-hidden px-8 py-6 text-lg font-bold rounded-xl"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={20} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-500">Live Demo</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black flex items-center gap-3 group/btn hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-cyber-cyan/40 backdrop-blur-sm relative overflow-hidden px-8 py-6 text-lg font-bold rounded-xl"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={20} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-500">Source Code</span>
                    </Button>
                  </div>
                  
                  {/* Enhanced progress indicator */}
                  <div className="mt-8 relative">
                    <div className="h-2 bg-cyber-gray/30 rounded-full overflow-hidden backdrop-blur-sm border border-cyber-cyan/20">
                      <div 
                        className={`h-full bg-gradient-to-r ${project.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1500 shadow-lg`}
                        style={{ animationDelay: `${index * 0.4}s` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to explore more?</h3>
            <Button 
              className="bg-gradient-to-r from-cyber-cyan via-blue-500 to-purple-500 text-black hover:from-purple-500 hover:to-pink-500 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-cyber-cyan/60 group relative overflow-hidden backdrop-blur-sm border-2 border-white/20"
              onClick={() => window.open('https://github.com/adilmunawar', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                <Zap size={28} className="group-hover:rotate-180 transition-transform duration-700" />
                Explore GitHub Profile
                <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
