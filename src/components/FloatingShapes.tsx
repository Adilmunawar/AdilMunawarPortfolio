
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const developmentElements = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '5%',
      animation: 'animate-float-tech-1'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '25%',
      right: '8%',
      animation: 'animate-float-tech-2'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '20%',
      left: '12%',
      animation: 'animate-float-tech-3'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '65%',
      right: '5%',
      animation: 'animate-float-tech-4'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      bottom: '35%',
      right: '25%',
      animation: 'animate-float-tech-5'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '45%',
      left: '3%',
      animation: 'animate-float-tech-6'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '80%',
      left: '20%',
      animation: 'animate-float-tech-1'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      bottom: '55%',
      right: '35%',
      animation: 'animate-float-tech-2'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      top: '85%',
      right: '15%',
      animation: 'animate-float-tech-3'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '70%',
      left: '35%',
      animation: 'animate-float-tech-4'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      top: '35%',
      left: '60%',
      animation: 'animate-float-tech-5'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bottom: '45%',
      left: '70%',
      animation: 'animate-float-tech-6'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      top: '15%',
      left: '40%',
      animation: 'animate-float-tech-1'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      bottom: '25%',
      right: '45%',
      animation: 'animate-float-tech-2'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      top: '75%',
      left: '55%',
      animation: 'animate-float-tech-3'
    },
    {
      name: 'Docker',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      bottom: '60%',
      right: '60%',
      animation: 'animate-float-tech-4'
    },
    {
      name: 'Firebase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      top: '55%',
      left: '80%',
      animation: 'animate-float-tech-5'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      bottom: '15%',
      left: '85%',
      animation: 'animate-float-tech-6'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '18%', left: '30%', color: 'text-cyber-cyan/20', size: 'text-xl', animation: 'animate-drift-1' },
    { shape: '○', bottom: '28%', right: '50%', color: 'text-cyber-blue/15', size: 'text-2xl', animation: 'animate-drift-2' },
    { shape: '△', top: '75%', left: '45%', color: 'text-cyber-cyan/18', size: 'text-lg', animation: 'animate-drift-3' },
    { shape: '□', top: '32%', right: '60%', color: 'text-cyber-blue/20', size: 'text-xl', animation: 'animate-drift-1' },
    { shape: '◯', bottom: '65%', left: '55%', color: 'text-cyber-cyan/15', size: 'text-2xl', animation: 'animate-drift-2' },
    { shape: '◈', top: '88%', right: '40%', color: 'text-cyber-blue/18', size: 'text-lg', animation: 'animate-drift-3' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Development Elements - Smaller and optimized */}
      {developmentElements.map((element, index) => (
        <div
          key={`dev-${index}`}
          className={`absolute w-10 h-10 ${element.animation} opacity-20 transition-all duration-300 ease-in-out transform-gpu will-change-transform`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            filter: `drop-shadow(0 0 8px rgba(0, 255, 255, 0.2))`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${15 + (index % 5)}s`
          }}
        >
          <img 
            src={element.image} 
            alt={element.name}
            className="w-full h-full object-contain transition-all duration-300 hover:brightness-125"
            style={{
              filter: 'contrast(1.0) brightness(0.9) saturate(1.0)'
            }}
          />
          
          {/* Subtle ring */}
          <div 
            className="absolute inset-0 rounded-full border border-cyber-cyan/5 animate-rotate-slow"
            style={{
              transform: 'scale(1.2)',
              animationDelay: `${index * 0.5}s`
            }}
          ></div>
        </div>
      ))}

      {/* Geometric Shapes - Reduced opacity */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.color} ${shape.size} ${shape.animation} transition-all duration-1000 transform-gpu will-change-transform`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${12 + (index % 3)}s`,
            textShadow: '0 0 10px currentColor'
          }}
        >
          {shape.shape}
        </div>
      ))}
      
      {/* Optimized ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-cyan/4 via-cyber-cyan/2 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyber-blue/4 via-cyber-blue/2 to-transparent rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-radial from-cyber-cyan/3 via-cyber-cyan/1 to-transparent rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default FloatingShapes;
