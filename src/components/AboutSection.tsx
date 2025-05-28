
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const frontendSkills = [
    { 
      name: 'HTML5', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
    },
    { 
      name: 'CSS3', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
    },
    { 
      name: 'JavaScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'TypeScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' 
    },
    { 
      name: 'React', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    },
    { 
      name: 'Next.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' 
    },
  ];

  const backendSkills = [
    { 
      name: 'Node.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },
    { 
      name: 'Python', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
    },
    { 
      name: 'MongoDB', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
    },
    { 
      name: 'PostgreSQL', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' 
    },
    { 
      name: 'Firebase', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' 
    },
    { 
      name: 'Express.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' 
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">My name is Adil Munawar and I am a passionate and results-driven developer</strong> with extensive experience in frontend development, backend systems, and mobile/web app integration.
                </p>
                <p>
                  Over the years, I've built a strong presence in the tech space through my innovative projects, each crafted to solve real-world problems and push the boundaries of design and functionality.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong className="text-cyber-cyan">Phone:</strong> +92 324 4965220</p>
              </div>
              <div>
                <p><strong className="text-cyber-cyan">Focus:</strong> Full-Stack Development</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-cyber-cyan mb-4">Front-End</h3>
              <div className="grid grid-cols-3 gap-4">
                {frontendSkills.map((skill, index) => (
                  <Card key={index} className="p-4 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="mb-2 flex justify-center">
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-8 h-8"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-sm font-medium">{skill.name}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyber-cyan mb-4">Back-End</h3>
              <div className="grid grid-cols-3 gap-4">
                {backendSkills.map((skill, index) => (
                  <Card key={index} className="p-4 bg-cyber-gray/20 border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="mb-2 flex justify-center">
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-8 h-8"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-sm font-medium">{skill.name}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
