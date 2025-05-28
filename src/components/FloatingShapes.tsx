
const FloatingShapes = () => {
  const frameworkImages = [
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
      top: '10%', 
      left: '10%', 
      animation: 'animate-float', 
      size: 'w-16 h-16' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      alt: 'Node.js',
      top: '20%', 
      right: '15%', 
      animation: 'animate-float-delayed', 
      size: 'w-14 h-14' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      alt: 'Vue.js',
      top: '60%', 
      left: '5%', 
      animation: 'animate-float', 
      size: 'w-12 h-12' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      alt: 'Angular',
      bottom: '20%', 
      right: '20%', 
      animation: 'animate-float-delayed', 
      size: 'w-18 h-18' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'Python',
      top: '80%', 
      left: '80%', 
      animation: 'animate-float', 
      size: 'w-16 h-16' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'MongoDB',
      top: '40%', 
      right: '5%', 
      animation: 'animate-float-delayed', 
      size: 'w-12 h-12' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      alt: 'Next.js',
      top: '15%', 
      left: '70%', 
      animation: 'animate-float', 
      size: 'w-14 h-14' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      alt: 'Express.js',
      bottom: '30%', 
      left: '30%', 
      animation: 'animate-float-delayed', 
      size: 'w-16 h-16' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
      top: '50%', 
      left: '85%', 
      animation: 'animate-float', 
      size: 'w-12 h-12' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      alt: 'Tailwind CSS',
      bottom: '10%', 
      right: '10%', 
      animation: 'animate-float-delayed', 
      size: 'w-14 h-14' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      alt: 'PostgreSQL',
      top: '35%', 
      left: '15%', 
      animation: 'animate-float', 
      size: 'w-12 h-12' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      alt: 'Docker',
      bottom: '40%', 
      right: '35%', 
      animation: 'animate-float-delayed', 
      size: 'w-16 h-16' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
      top: '25%', 
      left: '40%', 
      animation: 'animate-float', 
      size: 'w-13 h-13' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML5',
      bottom: '50%', 
      left: '60%', 
      animation: 'animate-float-delayed', 
      size: 'w-14 h-14' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS3',
      top: '70%', 
      right: '50%', 
      animation: 'animate-float', 
      size: 'w-12 h-12' 
    },
    { 
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      alt: 'Firebase',
      bottom: '60%', 
      right: '60%', 
      animation: 'animate-float-delayed', 
      size: 'w-13 h-13' 
    }
  ];

  const geometricShapes = [
    { shape: 'hexagon', top: '25%', right: '8%', color: 'text-green-400', size: 'w-8 h-8' },
    { shape: 'square', top: '70%', left: '25%', color: 'text-yellow-400', size: 'w-7 h-7' },
    { shape: 'triangle', bottom: '15%', left: '50%', color: 'text-purple-400', size: 'w-9 h-9' },
    { shape: 'circle', top: '45%', right: '25%', color: 'text-blue-400', size: 'w-7 h-7' },
    { shape: 'hexagon', bottom: '35%', left: '8%', color: 'text-pink-400', size: 'w-8 h-8' },
    { shape: 'square', top: '5%', left: '45%', color: 'text-cyan-400', size: 'w-6 h-6' },
    { shape: 'triangle', top: '85%', right: '30%', color: 'text-orange-400', size: 'w-8 h-8' },
    { shape: 'circle', bottom: '25%', right: '70%', color: 'text-indigo-400', size: 'w-6 h-6' },
    { shape: 'hexagon', top: '55%', left: '3%', color: 'text-red-400', size: 'w-7 h-7' },
    { shape: 'square', bottom: '5%', left: '75%', color: 'text-teal-400', size: 'w-8 h-8' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {frameworkImages.map((framework, index) => (
        <div
          key={index}
          className={`floating-shape ${framework.animation}`}
          style={{
            top: framework.top,
            left: framework.left,
            right: framework.right,
            bottom: framework.bottom,
          }}
        >
          <img 
            src={framework.src} 
            alt={framework.alt}
            className={`${framework.size} opacity-15 hover:opacity-50 transition-all duration-500 hover:scale-110`}
            loading="lazy"
          />
        </div>
      ))}

      {geometricShapes.map((shape, index) => (
        <div
          key={`geo-${index}`}
          className={`floating-shape animate-rotate-slow ${shape.color} ${shape.size} opacity-15 hover:opacity-30 transition-all duration-300`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
        >
          {shape.shape === 'hexagon' && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
            </svg>
          )}
          {shape.shape === 'square' && (
            <div className="w-full h-full bg-current transform rotate-45"></div>
          )}
          {shape.shape === 'triangle' && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L22 20H2L12 2z" />
            </svg>
          )}
          {shape.shape === 'circle' && (
            <div className="w-full h-full bg-current rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
