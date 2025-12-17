import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const PersonalStatement: React.FC = () => {
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
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
          <i className="fas fa-user text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">个人简介</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>
        
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            8年Python开发经验，专注于<span className="text-indigo-300 font-medium">智能体开发、数据采集与Web后端</span>。
          </p>
          
          {/* 个人技能亮点 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <motion.div 
              className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30"
              whileHover={{ 
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-indigo-300"></i>
                </div>
                <h3 className="font-semibold text-slate-200">智能体服务</h3>
              </div>
              <p className="text-sm text-slate-400">实现基于大语言模型的智能体服务，显著提升用户体验</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30"
              whileHover={{ 
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center mr-3">
                  <i className="fas fa-tools text-indigo-300"></i>
                </div>
                <h3 className="font-semibold text-slate-200">MCP工具开发</h3>
              </div>
              <p className="text-sm text-slate-400">开发多种数据采集和处理工具，提升数据获取效率</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30"
              whileHover={{ 
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center mr-3">
                  <i className="fas fa-database text-indigo-300"></i>
                </div>
                <h3 className="font-semibold text-slate-200">知识库构建</h3>
              </div>
              <p className="text-sm text-slate-400">采集和整理高质量数据，构建知识库和训练数据集</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30"
              whileHover={{ 
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center mr-3">
                  <i className="fas fa-cogs text-indigo-300"></i>
                </div>
                <h3 className="font-semibold text-slate-200">工程规范</h3>
              </div>
              <p className="text-sm text-slate-400">注重交付效率与工程规范，确保代码质量</p>
            </motion.div>
          </div>
          
          {/* 个人优势 */}
          <div className="mt-6">
            <p className="text-slate-300 leading-relaxed">
              具备优秀的<span className="text-cyan-300 font-medium">沟通协作能力</span>与<span className="text-cyan-300 font-medium">问题解决能力</span>，能够快速响应业务需求，交付高质量的技术解决方案。
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalStatement;