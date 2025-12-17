import React, { useEffect, useRef, useState } from 'react';

interface StarProps {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  intensity: number; // 1-3 for star brightness intensity
  zIndex: number; // For parallax effect layers
}

const Star: React.FC<StarProps> = ({ size, left, top, delay, duration, intensity, zIndex }) => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  // Random glow pulsing effect for stars
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => {
        // Create subtle random variations in glow
        const variation = Math.random() * 0.3 + 0.7;
        return prev * variation;
      });
    }, 2000 + Math.random() * 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate properties based on intensity
  const opacityBase = 0.3 + (intensity * 0.2);
  const boxShadowSize = size * 2 * (1 + intensity * 0.5);
  const boxShadowOpacity = 0.1 + (intensity * 0.1);
  
  return (
    <div 
      className="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: opacityBase * (glowIntensity || 1),
        backgroundColor: intensity > 2 
          ? 'rgba(255, 255, 255, 0.9)' 
          : `rgba(255, 255, 255, ${0.5 + (intensity * 0.15)})`,
        boxShadow: `0 0 ${boxShadowSize}px ${size}px rgba(255, 255, 255, ${boxShadowOpacity * (glowIntensity || 1)})`,
        zIndex: zIndex,
      }}
    />
  );
};

// Nebula component for galaxy-like background effects
const Nebula: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`absolute opacity-20 mix-blend-screen pointer-events-none ${className}`}>
      <div className="absolute w-full h-full rounded-full bg-indigo-500 blur-[100px]"></div>
      <div className="absolute w-2/3 h-2/3 rounded-full bg-purple-500 blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full bg-blue-500 blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
    </div>
  );
};

// 科技感网格线背景
const TechGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* 水平线 */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`h-${i}`} 
          className="absolute left-0 right-0 h-[1px] bg-indigo-500/5"
          style={{ top: `${i * 5}%` }}
        />
      ))}
      
      {/* 垂直线 */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`v-${i}`} 
          className="absolute top-0 bottom-0 w-[1px] bg-indigo-500/5"
          style={{ left: `${i * 5}%` }}
        />
      ))}
      
      {/* 中心网格线 */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-indigo-500/10"></div>
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-indigo-500/10"></div>
    </div>
  );
};

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create stars with different characteristics for depth
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing elements
    containerRef.current.innerHTML = '';
    
    // Create document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Generate small, faint background stars (deep space)
    const smallStarsCount = 400;
    for (let i = 0; i < smallStarsCount; i++) {
      const size = Math.random() * 1 + 0.3;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;
      const duration = Math.random() * 7 + 5;
      
      const div = document.createElement('div');
      div.className = 'star';
      Object.assign(div.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.4 + 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`,
        zIndex: 1,
      });
      fragment.appendChild(div);
    }
    
    // Generate medium stars (middle layer)
    const mediumStarsCount = 200;
    for (let i = 0; i < mediumStarsCount; i++) {
      const size = Math.random() * 1.5 + 1;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 3;
      
      const div = document.createElement('div');
      div.className = 'star';
      Object.assign(div.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.6 + 0.3,
        backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.6})`,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
        zIndex: 2,
      });
      fragment.appendChild(div);
    }
    
    // Generate large, bright stars (foreground)
    const largeStarsCount = 60;
    for (let i = 0; i < largeStarsCount; i++) {
      const size = Math.random() * 2 + 1.5;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;
      const duration = Math.random() * 4 + 4;
      
      const div = document.createElement('div');
      div.className = 'star';
      Object.assign(div.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.7 + 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: `0 0 ${size * 3}px ${size * 1.5}px rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`,
        zIndex: 3,
      });
      fragment.appendChild(div);
    }
    
    // Add colored stars for a more realistic galaxy effect
    const coloredStarsCount = 50;
    const colors = ['rgba(139, 92, 246, 0.8)', 'rgba(56, 189, 248, 0.8)', 'rgba(251, 113, 133, 0.8)'];
    
    for (let i = 0; i < coloredStarsCount; i++) {
      const size = Math.random() * 1.5 + 1;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 3;
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      const div = document.createElement('div');
      div.className = 'star';
      Object.assign(div.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: left,
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: Math.random() * 0.6 + 0.4,
        backgroundColor: colors[colorIndex],
        boxShadow: `0 0 ${size * 2.5}px ${size * 1.2}px ${colors[colorIndex]}80`,
        zIndex: 2,
      });
      fragment.appendChild(div);
    }
    
    // Append all stars to container
    containerRef.current.appendChild(fragment);
  }, []);
  
  // Parallax effect on scroll for depth
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const stars = containerRef.current.querySelectorAll('.star');
      
      stars.forEach((star, index) => {
        // Different parallax speed based on star size and z-index for depth effect
        const size = parseFloat(star.style.width || '1');
        const zIndex = parseInt(star.style.zIndex || '1');
        const baseSpeed = zIndex * 0.03; // Farther stars move slower
        const speed = size * baseSpeed;
        
        star.style.transform = `translateY(${scrollY * speed}px)`;
        
        // Slight horizontal movement for more natural effect
        const horizontalOffset = Math.sin(index * 0.1 + scrollY * 0.001) * 5;
        star.style.transform += `translateX(${horizontalOffset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* 科技感网格背景 */}
      <TechGrid />
      
      {/* Add enhanced nebula effects */}
      <Nebula className="top-0 left-0 w-full h-full z-0" />
      <Nebula className="bottom-0 right-0 w-2/3 h-2/3 z-0" />
      <Nebula className="top-1/4 right-1/4 w-1/2 h-1/2 z-0" />
      
      {/* 添加科技感光晕效果 */}
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-indigo-500/5 blur-[150px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 rounded-full bg-cyan-500/5 blur-[120px]"></div>
    </div>
  );
};

export default StarBackground;