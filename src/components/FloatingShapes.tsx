
const FloatingShapes = () => {
  const frameworkLogos = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '3%',
      size: 'w-40 h-40',
      animation: 'animate-drift-1'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '15%',
      right: '5%',
      size: 'w-44 h-44',
      animation: 'animate-drift-2'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '12%',
      left: '8%',
      size: 'w-48 h-48',
      animation: 'animate-drift-3'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      top: '55%',
      right: '2%',
      size: 'w-38 h-38',
      animation: 'animate-drift-4'
    },
    {
      name: 'Supabase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      bottom: '25%',
      right: '12%',
      size: 'w-42 h-42',
      animation: 'animate-drift-5'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '35%',
      left: '1%',
      size: 'w-40 h-40',
      animation: 'animate-drift-6'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '72%',
      left: '10%',
      size: 'w-36 h-36',
      animation: 'animate-drift-1'
    },
    {
      name: 'SQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      bottom: '45%',
      right: '20%',
      size: 'w-38 h-38',
      animation: 'animate-drift-2'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      top: '80%',
      right: '8%',
      size: 'w-35 h-35',
      animation: 'animate-drift-3'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '60%',
      left: '25%',
      size: 'w-37 h-37',
      animation: 'animate-drift-4'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '18%', left: '22%', color: 'text-cyber-cyan/20', size: 'text-3xl', animation: 'animate-drift-delayed-1' },
    { shape: '○', bottom: '28%', right: '35%', color: 'text-cyber-blue/15', size: 'text-4xl', animation: 'animate-drift-delayed-2' },
    { shape: '△', top: '75%', left: '28%', color: 'text-cyber-cyan/18', size: 'text-2xl', animation: 'animate-drift-delayed-3' },
    { shape: '□', top: '32%', right: '45%', color: 'text-cyber-blue/20', size: 'text-3xl', animation: 'animate-drift-delayed-4' },
    { shape: '◯', bottom: '65%', left: '40%', color: 'text-cyber-cyan/15', size: 'text-5xl', animation: 'animate-drift-delayed-5' },
    { shape: '◈', top: '88%', right: '25%', color: 'text-cyber-blue/18', size: 'text-2xl', animation: 'animate-drift-delayed-6' },
    { shape: '◊', top: '48%', left: '85%', color: 'text-cyber-cyan/20', size: 'text-3xl', animation: 'animate-drift-delayed-1' },
    { shape: '▽', bottom: '8%', left: '65%', color: 'text-cyber-blue/15', size: 'text-4xl', animation: 'animate-drift-delayed-2' },
    { shape: '◢', top: '25%', left: '50%', color: 'text-cyber-cyan/12', size: 'text-3xl', animation: 'animate-drift-delayed-3' },
    { shape: '◤', bottom: '35%', right: '55%', color: 'text-cyber-blue/14', size: 'text-2xl', animation: 'animate-drift-delayed-4' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Framework Logo Icons */}
      {frameworkLogos.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className={`absolute ${logo.size} ${logo.animation} opacity-25 hover:opacity-50 transition-all duration-1000 ease-in-out`}
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            bottom: logo.bottom,
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4))',
            animationDelay: `${index * 3}s`,
            animationDuration: '25s'
          }}
        >
          <img 
            src={logo.image} 
            alt={logo.name}
            className="w-full h-full object-contain transition-all duration-1000 hover:scale-110 hover:rotate-12 hover:brightness-125"
          />
        </div>
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.color} ${shape.size} ${shape.animation} transition-all duration-1000`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${index * 2}s`,
            animationDuration: '20s'
          }}
        >
          {shape.shape}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
