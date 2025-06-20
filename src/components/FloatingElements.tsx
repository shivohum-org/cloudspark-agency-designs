
interface FloatingElementsProps {
  scrollY: number;
}

export const FloatingElements = ({ scrollY }: FloatingElementsProps) => {
  return (
    <>
      {/* Animated background elements - more subtle and premium */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.02}px)`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/5 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${-scrollY * 0.025}px, ${scrollY * 0.015}px)`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/6 to-blue-500/4 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.01}px)`,
            animation: 'float 30s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/4 to-purple-500/6 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${-scrollY * 0.015}px, ${scrollY * 0.025}px)`,
            animation: 'float 35s ease-in-out infinite reverse'
          }}
        />
      </div>
      
      {/* Premium floating particles - fewer and more elegant */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${scrollY * (0.005 + Math.random() * 0.01)}px)`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay for premium feel */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.005}px)`
        }}
      />
    </>
  );
};
