
import { Code2, Database, Smartphone, Globe, Cpu, Zap } from 'lucide-react';

const FloatingShapes = () => {
  const shapes = [
    { Icon: Code2, top: '10%', left: '10%', animation: 'animate-float', size: 40 },
    { Icon: Database, top: '20%', right: '15%', animation: 'animate-float-delayed', size: 35 },
    { Icon: Smartphone, top: '60%', left: '5%', animation: 'animate-float', size: 30 },
    { Icon: Globe, bottom: '20%', right: '20%', animation: 'animate-float-delayed', size: 45 },
    { Icon: Cpu, top: '80%', left: '80%', animation: 'animate-float', size: 38 },
    { Icon: Zap, top: '40%', right: '5%', animation: 'animate-float-delayed', size: 32 },
  ];

  const geometricShapes = [
    { shape: 'hexagon', top: '15%', left: '80%', color: 'text-green-400', size: 'w-8 h-8' },
    { shape: 'square', top: '70%', left: '15%', color: 'text-yellow-400', size: 'w-6 h-6' },
    { shape: 'triangle', bottom: '10%', left: '60%', color: 'text-purple-400', size: 'w-10 h-10' },
    { shape: 'circle', top: '30%', left: '70%', color: 'text-blue-400', size: 'w-7 h-7' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape ${shape.animation}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
        >
          <shape.Icon size={shape.size} className="text-cyber-cyan" />
        </div>
      ))}

      {geometricShapes.map((shape, index) => (
        <div
          key={`geo-${index}`}
          className={`floating-shape animate-rotate-slow ${shape.color} ${shape.size}`}
          style={{
            top: shape.top,
            left: shape.left,
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
