import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarBackground from '@/components/StarBackground';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Show content after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterResume = () => {
    navigate('/resume');
  };

  // 科技感的文字动画效果
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Starry background */}
      <StarBackground />
      
      {/* Overlay */}
       {/* Background gradient with cosmic colors */}
       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-indigo-950/80 to-black/90"></div>
      
      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
        {/* 科技感装饰元素 */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>
        
        {/* 科技感网格线 */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute left-0 right-0 h-[1px] bg-indigo-500/5"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute top-0 bottom-0 w-[1px] bg-indigo-500/5"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
        
        {/* Personal statement with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl text-center mb-20 relative"
        >
          {/* 文本装饰线 */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
          
          <p 
            ref={textRef}
            className="text-[clamp(1.25rem,4vw,2rem)] font-light leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-indigo-100 to-cyan-100 relative inline-block pulse-soft"
            style={{
              textShadow: "0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.1)",
              letterSpacing: "0.02em",
              backdropFilter: "blur(1px)"
            }}
          >
            我是朱能捷，一名致力于用工程技术推动社会进步的工程师。在AI浪潮奔涌的时代，我渴望加入一支富有创造力与挑战精神的团队，共同探索技术的边界，把想法变成改变世界的产品。👉 了解更多 | 💬 与我的AI智能体对话
          </p>
          
          {/* 文本装饰线 */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
          
          {/* 科技感光晕效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 blur-xl -z-10 rounded-lg"></div>
        </motion.div>
        
        {/* Enter resume button with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-16 flex flex-col items-center cursor-pointer group"
          onClick={handleEnterResume}
        >
          <span className="text-slate-300 mb-4 text-lg font-light tracking-wider relative inline-block">
            了解更多
            <motion.span
              className="absolute -bottom-1 left-0 h-[1px] bg-indigo-400"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border-2 border-indigo-500/50 flex items-center justify-center group-hover:border-indigo-400 transition-colors"
          >
            <i className="fas fa-chevron-down text-indigo-400 group-hover:text-indigo-300"></i>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;