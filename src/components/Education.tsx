import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Education: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-slate-900/40 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all relative overflow-hidden"
    >
      {/* 科技感背景装饰 */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
      
      <motion.div variants={itemVariants} className="flex items-center mb-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4 border border-indigo-500/30">
          <i className="fas fa-graduation-cap text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">教育背景</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>
        
        <div className="relative pl-8 border-l-2 border-indigo-500/30">
          <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          
          <motion.div 
            className="mb-4 p-4 bg-slate-800/20 rounded-lg border border-slate-700/30 hover:border-indigo-500/30 transition-all"
            whileHover={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)' }}
          >
             <h3 className="text-lg font-semibold text-slate-100">计算机科学与技术</h3>
             <p className="text-indigo-300 mb-1">本科</p>
             
             {/* 个人基本信息卡片 */}
             <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
               <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                 <p className="text-slate-400 text-xs mb-1">所在地</p>
                 <p className="text-slate-200">深圳</p>
               </div>
               <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                 <p className="text-slate-400 text-xs mb-1">工作经验</p>
                 <p className="text-slate-200">8年</p>
               </div>
               <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                 <p className="text-slate-400 text-xs mb-1">性别</p>
                 <p className="text-slate-200">男</p>
               </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;