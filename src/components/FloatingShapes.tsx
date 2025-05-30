
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const developmentElements = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '5%',
      animation: 'animate-cursor-react-float'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '25%',
      right: '8%',
      animation: 'animate-cursor-react-float-2'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '20%',
      left: '12%',
      animation: 'animate-cursor-react-float-3'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '65%',
      right: '5%',
      animation: 'animate-cursor-react-float-4'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      bottom: '35%',
      right: '25%',
      animation: 'animate-cursor-react-float-5'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '45%',
      left: '3%',
      animation: 'animate-cursor-react-float-6'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '80%',
      left: '20%',
      animation: 'animate-collision-bounce-1'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      bottom: '55%',
      right: '35%',
      animation: 'animate-collision-bounce-2'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      top: '85%',
      right: '15%',
      animation: 'animate-collision-bounce-3'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '70%',
      left: '35%',
      animation: 'animate-collision-bounce-4'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      top: '35%',
      left: '60%',
      animation: 'animate-collision-bounce-5'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bottom: '45%',
      left: '70%',
      animation: 'animate-collision-bounce-6'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      top: '15%',
      left: '40%',
      animation: 'animate-drift-delayed-1'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      bottom: '25%',
      right: '45%',
      animation: 'animate-drift-delayed-2'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      top: '75%',
      left: '55%',
      animation: 'animate-drift-delayed-3'
    },
    {
      name: 'Docker',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      bottom: '60%',
      right: '60%',
      animation: 'animate-drift-delayed-4'
    },
    {
      name: 'Firebase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      top: '55%',
      left: '80%',
      animation: 'animate-drift-delayed-5'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      bottom: '15%',
      left: '85%',
      animation: 'animate-drift-delayed-6'
    },
    {
      name: 'Vue.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      top: '90%',
      left: '65%',
      animation: 'animate-cursor-react-float'
    },
    {
      name: 'Angular',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      bottom: '80%',
      right: '80%',
      animation: 'animate-cursor-react-float-2'
    },
    {
      name: 'Webpack',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      top: '20%',
      left: '75%',
      animation: 'animate-collision-bounce-1'
    },
    {
      name: 'Sass',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      bottom: '40%',
      left: '45%',
      animation: 'animate-collision-bounce-2'
    },
    {
      name: 'Redis',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      top: '40%',
      right: '75%',
      animation: 'animate-collision-bounce-3'
    },
    {
      name: 'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      bottom: '10%',
      left: '50%',
      animation: 'animate-collision-bounce-4'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '18%', left: '30%', color: 'text-cyber-cyan/30', size: 'text-2xl', animation: 'animate-drift-delayed-1' },
    { shape: '○', bottom: '28%', right: '50%', color: 'text-cyber-blue/25', size: 'text-3xl', animation: 'animate-drift-delayed-2' },
    { shape: '△', top: '75%', left: '45%', color: 'text-cyber-cyan/28', size: 'text-xl', animation: 'animate-drift-delayed-3' },
    { shape: '□', top: '32%', right: '60%', color: 'text-cyber-blue/30', size: 'text-2xl', animation: 'animate-drift-delayed-4' },
    { shape: '◯', bottom: '65%', left: '55%', color: 'text-cyber-cyan/25', size: 'text-4xl', animation: 'animate-drift-delayed-5' },
    { shape: '◈', top: '88%', right: '40%', color: 'text-cyber-blue/28', size: 'text-xl', animation: 'animate-drift-delayed-6' },
    { shape: '◊', top: '48%', left: '85%', color: 'text-cyber-cyan/30', size: 'text-2xl', animation: 'animate-drift-delayed-1' },
    { shape: '▽', bottom: '8%', left: '80%', color: 'text-cyber-blue/25', size: 'text-3xl', animation: 'animate-drift-delayed-2' },
    { shape: '◢', top: '15%', left: '75%', color: 'text-cyber-cyan/22', size: 'text-2xl', animation: 'animate-drift-delayed-3' },
    { shape: '◤', bottom: '25%', right: '70%', color: 'text-cyber-blue/24', size: 'text-xl', animation: 'animate-drift-delayed-4' },
    { shape: '⬟', top: '60%', left: '90%', color: 'text-cyber-cyan/26', size: 'text-2xl', animation: 'animate-drift-delayed-5' },
    { shape: '◐', bottom: '15%', right: '55%', color: 'text-cyber-blue/28', size: 'text-3xl', animation: 'animate-drift-delayed-6' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Development Elements - Smaller and Equal Size */}
      {developmentElements.map((element, index) => (
        <div
          key={`dev-${index}`}
          className={`absolute w-16 h-16 ${element.animation} opacity-30 transition-all duration-500 ease-in-out transform-gpu`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            filter: `drop-shadow(0 0 10px rgba(0, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(0, 128, 255, 0.2))`,
            animationDelay: `${index * 1.5}s`,
            animationDuration: `${20 + (index * 1)}s`,
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src={element.image} 
            alt={element.name}
            className="w-full h-full object-contain transition-all duration-500 hover:brightness-125"
            style={{
              filter: 'contrast(1.1) brightness(1.0) saturate(1.1)'
            }}
          />
          
          {/* Subtle glowing ring */}
          <div 
            className="absolute inset-0 rounded-full border border-cyber-cyan/10 animate-rotate-slow"
            style={{
              transform: 'scale(1.1)',
              animationDelay: `${index * 0.8}s`
            }}
          ></div>
          
          {/* Center dot */}
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2 opacity-50"
            style={{
              animationDelay: `${index * 0.3}s`
            }}
          ></div>
        </div>
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.color} ${shape.size} ${shape.animation} transition-all duration-2000 transform-gpu`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${index * 2}s`,
            animationDuration: `${15 + (index * 1)}s`,
            textShadow: '0 0 15px currentColor, 0 0 30px currentColor',
            willChange: 'transform'
          }}
        >
          {shape.shape}
        </div>
      ))}
      
      {/* Static Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-cyan/6 via-cyber-cyan/3 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyber-blue/6 via-cyber-blue/3 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-radial from-cyber-cyan/4 via-cyber-cyan/2 to-transparent rounded-full blur-3xl opacity-35"></div>
    </div>
  );
};

export default FloatingShapes;
