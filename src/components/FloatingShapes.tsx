
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const frameworkLogos = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '5%',
      size: 'w-32 h-32',
      animation: 'animate-cursor-react-float'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '25%',
      right: '8%',
      size: 'w-36 h-36',
      animation: 'animate-cursor-react-float-2'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '20%',
      left: '12%',
      size: 'w-40 h-40',
      animation: 'animate-cursor-react-float-3'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '65%',
      right: '5%',
      size: 'w-30 h-30',
      animation: 'animate-cursor-react-float-4'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      bottom: '35%',
      right: '25%',
      size: 'w-34 h-34',
      animation: 'animate-cursor-react-float-5'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '45%',
      left: '3%',
      size: 'w-32 h-32',
      animation: 'animate-cursor-react-float-6'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '80%',
      left: '20%',
      size: 'w-28 h-28',
      animation: 'animate-collision-bounce-1'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      bottom: '55%',
      right: '35%',
      size: 'w-29 h-29',
      animation: 'animate-collision-bounce-2'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      top: '85%',
      right: '15%',
      size: 'w-26 h-26',
      animation: 'animate-collision-bounce-3'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '70%',
      left: '35%',
      size: 'w-27 h-27',
      animation: 'animate-collision-bounce-4'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      top: '35%',
      left: '60%',
      size: 'w-24 h-24',
      animation: 'animate-collision-bounce-5'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bottom: '45%',
      left: '70%',
      size: 'w-25 h-25',
      animation: 'animate-collision-bounce-6'
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
      {/* Framework Logo Icons with Cursor Interaction and Collision Effects */}
      {frameworkLogos.map((logo, index) => {
        const distanceFromCursor = Math.sqrt(
          Math.pow(mousePosition.x - (window.innerWidth * (parseFloat(logo.left || logo.right || '50') / 100)), 2) +
          Math.pow(mousePosition.y - (window.innerHeight * (parseFloat(logo.top || logo.bottom || '50') / 100)), 2)
        );
        const cursorEffect = distanceFromCursor < 200 ? 'scale-125 brightness-150' : 'scale-100';
        
        return (
          <div
            key={`logo-${index}`}
            className={`absolute ${logo.size} ${logo.animation} opacity-25 hover:opacity-50 transition-all duration-1000 ease-in-out transform-gpu ${cursorEffect}`}
            style={{
              top: logo.top,
              left: logo.left,
              right: logo.right,
              bottom: logo.bottom,
              filter: `drop-shadow(0 0 15px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 30px rgba(0, 128, 255, 0.2)) ${distanceFromCursor < 150 ? 'hue-rotate(30deg)' : ''}`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${25 + (index * 1.5)}s`,
              willChange: 'transform, opacity',
              transform: distanceFromCursor < 100 ? `translate(${(mousePosition.x - window.innerWidth/2) * 0.02}px, ${(mousePosition.y - window.innerHeight/2) * 0.02}px)` : ''
            }}
          >
            <img 
              src={logo.image} 
              alt={logo.name}
              className="w-full h-full object-contain transition-all duration-1000 hover:rotate-12 hover:brightness-125 hover:saturate-125"
              style={{
                filter: 'contrast(1.1) brightness(1.1) saturate(1.2)'
              }}
            />
            
            {/* Enhanced glowing orbital ring with cursor interaction */}
            <div 
              className={`absolute inset-0 rounded-full border border-cyber-cyan/15 animate-rotate-slow transition-all duration-500 ${
                distanceFromCursor < 150 ? 'border-cyber-cyan/40 shadow-[0_0_20px_rgba(0,255,255,0.4)]' : ''
              }`}
              style={{
                transform: 'scale(1.1)',
                animationDelay: `${index * 1}s`
              }}
            ></div>
            
            {/* Pulsing center dot with cursor reaction */}
            <div 
              className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                distanceFromCursor < 100 ? 'w-3 h-3 shadow-[0_0_15px_rgba(0,255,255,0.8)]' : ''
              }`}
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            ></div>
          </div>
        );
      })}

      {/* Enhanced Geometric Shapes with Better Spacing */}
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
      
      {/* Enhanced Ambient Light Effects with Cursor Interaction */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-cyber-cyan/8 via-cyber-cyan/4 to-transparent rounded-full blur-3xl animate-tech-pulse transition-all duration-1000"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          opacity: 0.3
        }}
      ></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyber-blue/8 via-cyber-blue/4 to-transparent rounded-full blur-3xl animate-tech-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-radial from-cyber-cyan/6 via-cyber-cyan/3 to-transparent rounded-full blur-3xl animate-tech-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingShapes;
