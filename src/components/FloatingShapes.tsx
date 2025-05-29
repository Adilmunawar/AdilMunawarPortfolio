
const FloatingShapes = () => {
  const frameworkLogos = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '3%',
      size: 'w-64 h-64',
      animation: 'animate-realistic-float-1'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '15%',
      right: '5%',
      size: 'w-72 h-72',
      animation: 'animate-realistic-float-2'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '12%',
      left: '8%',
      size: 'w-80 h-80',
      animation: 'animate-realistic-float-3'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '55%',
      right: '2%',
      size: 'w-60 h-60',
      animation: 'animate-realistic-float-4'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      bottom: '25%',
      right: '12%',
      size: 'w-68 h-68',
      animation: 'animate-realistic-float-5'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '35%',
      left: '1%',
      size: 'w-64 h-64',
      animation: 'animate-realistic-float-6'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '72%',
      left: '12%',
      size: 'w-56 h-56',
      animation: 'animate-realistic-float-1'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      bottom: '45%',
      right: '20%',
      size: 'w-58 h-58',
      animation: 'animate-realistic-float-2'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      top: '80%',
      right: '8%',
      size: 'w-52 h-52',
      animation: 'animate-realistic-float-3'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '60%',
      left: '25%',
      size: 'w-54 h-54',
      animation: 'animate-realistic-float-4'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      top: '25%',
      left: '45%',
      size: 'w-48 h-48',
      animation: 'animate-realistic-float-5'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bottom: '35%',
      left: '55%',
      size: 'w-50 h-50',
      animation: 'animate-realistic-float-6'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '18%', left: '22%', color: 'text-cyber-cyan/30', size: 'text-4xl', animation: 'animate-drift-delayed-1' },
    { shape: '○', bottom: '28%', right: '35%', color: 'text-cyber-blue/25', size: 'text-5xl', animation: 'animate-drift-delayed-2' },
    { shape: '△', top: '75%', left: '28%', color: 'text-cyber-cyan/28', size: 'text-3xl', animation: 'animate-drift-delayed-3' },
    { shape: '□', top: '32%', right: '45%', color: 'text-cyber-blue/30', size: 'text-4xl', animation: 'animate-drift-delayed-4' },
    { shape: '◯', bottom: '65%', left: '40%', color: 'text-cyber-cyan/25', size: 'text-6xl', animation: 'animate-drift-delayed-5' },
    { shape: '◈', top: '88%', right: '25%', color: 'text-cyber-blue/28', size: 'text-3xl', animation: 'animate-drift-delayed-6' },
    { shape: '◊', top: '48%', left: '85%', color: 'text-cyber-cyan/30', size: 'text-4xl', animation: 'animate-drift-delayed-1' },
    { shape: '▽', bottom: '8%', left: '65%', color: 'text-cyber-blue/25', size: 'text-5xl', animation: 'animate-drift-delayed-2' },
    { shape: '◢', top: '25%', left: '50%', color: 'text-cyber-cyan/22', size: 'text-4xl', animation: 'animate-drift-delayed-3' },
    { shape: '◤', bottom: '35%', right: '55%', color: 'text-cyber-blue/24', size: 'text-3xl', animation: 'animate-drift-delayed-4' },
    { shape: '⬟', top: '60%', left: '75%', color: 'text-cyber-cyan/26', size: 'text-4xl', animation: 'animate-drift-delayed-5' },
    { shape: '◐', bottom: '15%', right: '40%', color: 'text-cyber-blue/28', size: 'text-5xl', animation: 'animate-drift-delayed-6' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Framework Logo Icons with Ultra-Realistic Movement */}
      {frameworkLogos.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className={`absolute ${logo.size} ${logo.animation} opacity-30 hover:opacity-60 transition-all duration-2000 ease-in-out transform-gpu`}
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            bottom: logo.bottom,
            filter: 'drop-shadow(0 0 25px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 50px rgba(0, 128, 255, 0.3))',
            animationDelay: `${index * 4}s`,
            animationDuration: `${35 + (index * 2)}s`,
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src={logo.image} 
            alt={logo.name}
            className="w-full h-full object-contain transition-all duration-2000 hover:scale-125 hover:rotate-12 hover:brightness-150 hover:saturate-150"
            style={{
              filter: 'contrast(1.1) brightness(1.1) saturate(1.2)'
            }}
          />
          
          {/* Glowing orbital ring */}
          <div 
            className="absolute inset-0 rounded-full border border-cyber-cyan/20 animate-rotate-slow"
            style={{
              transform: 'scale(1.2)',
              animationDelay: `${index * 1.5}s`
            }}
          ></div>
          
          {/* Pulsing center dot */}
          <div 
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2"
            style={{
              animationDelay: `${index * 0.8}s`
            }}
          ></div>
        </div>
      ))}

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
            animationDelay: `${index * 3}s`,
            animationDuration: `${20 + (index * 1.5)}s`,
            textShadow: '0 0 20px currentColor, 0 0 40px currentColor',
            willChange: 'transform'
          }}
        >
          {shape.shape}
        </div>
      ))}
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-cyan/10 via-cyber-cyan/5 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyber-blue/10 via-cyber-blue/5 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-radial from-cyber-cyan/8 via-cyber-cyan/4 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingShapes;
