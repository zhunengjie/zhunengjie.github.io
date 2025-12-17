import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Interest {
  name: string;
  icon: string;
}

const Interests: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
   const interests: Interest[] = [
    { name: 'Python开发', icon: 'code' },
    { name: '人工智能', icon: 'brain' },
    { name: '爬虫技术', icon: 'spider' },
    { name: '大模型应用', icon: 'robot' },
    { name: '数据处理', icon: 'database' }
  ];
  
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
        staggerChildren: 0.1,
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
          <i className="fas fa-heart text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">兴趣爱好</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>
        
        <div className="flex flex-wrap gap-4">
          {interests.map((interest, index) => (
            <motion.div 
              key={interest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                scale: isInView ? 1 : 0.9
              }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                borderColor: 'rgba(99, 102, 241, 0.5)'
              }}
              className="bg-slate-800/30 hover:bg-indigo-900/20 border border-slate-700/30 px-5 py-3 rounded-xl flex items-center space-x-3 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                <i className={`fas fa-${interest.icon}`}></i>
              </div>
              <span className="text-slate-200 font-medium">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Interests;