
interface FloatingElementsProps {
  scrollY: number;
}

export const FloatingElements = ({ scrollY }: FloatingElementsProps) => {
  return (
    <>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.03}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.04}px)` }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 dark:bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `translateY(${scrollY * (0.02 + Math.random() * 0.03)}px)`
            }}
          />
        ))}
      </div>
    </>
  );
};
