import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const handleContactClick = (type: 'email' | 'phone' | 'website') => {
    // Simple implementation for demonstration
    if (type === 'email') {
      window.location.href = 'mailto:nengjie@126.com';
    } else if (type === 'phone') {
      window.location.href = 'tel:+8618814128973';
    } else if (type === 'website') {
      window.open('https://nengjie.site', '_blank');
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/40 border-b border-indigo-500/20"
    >
      {/* 科技感装饰线 */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            朱能捷
          </motion.h1>
          <motion.p 
            className="text-slate-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            资深Python工程师
          </motion.p>
        </div>
        
        <div className="flex space-x-6">
          <motion.button 
            whileHover={{ scale: 1.1, color: '#a5b4fc', boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' }}
            className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-indigo-900/30"
            onClick={() => handleContactClick('email')}
          >
            <i className="fas fa-envelope"></i>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, color: '#a5b4fc', boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' }}
            className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-indigo-900/30"
            onClick={() => handleContactClick('phone')}
          >
            <i className="fas fa-phone"></i>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, color: '#a5b4fc', boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' }}
            className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-indigo-900/30"
            onClick={() => handleContactClick('website')}
          >
            <i className="fas fa-globe"></i>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;