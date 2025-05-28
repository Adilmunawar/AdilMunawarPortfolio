
const FloatingShapes = () => {
  const frameworkLogos = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '10%',
      left: '5%',
      size: 'w-24 h-24',
      animation: 'animate-float'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '20%',
      right: '8%',
      size: 'w-28 h-28',
      animation: 'animate-float-delayed'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '15%',
      left: '10%',
      size: 'w-32 h-32',
      animation: 'animate-float'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '60%',
      right: '5%',
      size: 'w-26 h-26',
      animation: 'animate-float-delayed'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      bottom: '30%',
      right: '15%',
      size: 'w-30 h-30',
      animation: 'animate-float'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '40%',
      left: '3%',
      size: 'w-28 h-28',
      animation: 'animate-float-delayed'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '75%',
      left: '12%',
      size: 'w-24 h-24',
      animation: 'animate-float'
    },
    {
      name: 'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      bottom: '50%',
      right: '25%',
      size: 'w-26 h-26',
      animation: 'animate-float-delayed'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '15%', left: '20%', color: 'text-cyber-cyan/30', size: 'text-4xl' },
    { shape: '○', bottom: '25%', right: '30%', color: 'text-cyber-blue/20', size: 'text-5xl' },
    { shape: '△', top: '70%', left: '25%', color: 'text-cyber-cyan/25', size: 'text-3xl' },
    { shape: '□', top: '30%', right: '40%', color: 'text-cyber-blue/30', size: 'text-4xl' },
    { shape: '◯', bottom: '60%', left: '35%', color: 'text-cyber-cyan/20', size: 'text-6xl' },
    { shape: '◈', top: '85%', right: '20%', color: 'text-cyber-blue/25', size: 'text-3xl' },
    { shape: '◊', top: '50%', left: '80%', color: 'text-cyber-cyan/30', size: 'text-4xl' },
    { shape: '▽', bottom: '10%', left: '60%', color: 'text-cyber-blue/20', size: 'text-5xl' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Framework Logo Icons */}
      {frameworkLogos.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className={`absolute ${logo.size} ${logo.animation} opacity-20 hover:opacity-40 transition-all duration-1000 ease-in-out`}
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            bottom: logo.bottom,
            filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.3))',
            animationDelay: `${index * 2}s`,
            animationDuration: '8s'
          }}
        >
          <img 
            src={logo.image} 
            alt={logo.name}
            className="w-full h-full object-contain transition-transform duration-1000 hover:scale-110 hover:rotate-12"
          />
        </div>
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.color} ${shape.size} animate-float-delayed transition-all duration-1000`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${index * 1.5}s`,
            animationDuration: '10s'
          }}
        >
          {shape.shape}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
