import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'intro', label: '个人简介' },
    { id: 'education', label: '教育背景' },
    { id: 'work', label: '工作经历' },
    { id: 'projects', label: '个人项目' },
    { id: 'skills', label: '技能栈' },
    { id: 'interests', label: '兴趣爱好' }
  ];

  // Close mobile menu when section is clicked
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  // 科技感装饰线
  const NavigationDivider = () => (
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-2"></div>
  );

  return (
    <>
      {/* 滚动进度指示器 */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50"
        initial={{ width: 0 }}
        animate={{ width: `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        transition={{ type: "spring", damping: 20 }}
      />
      
      {/* Mobile navigation toggle */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-slate-900/80 backdrop-blur-lg border border-indigo-500/30 rounded-full px-4 py-2 text-slate-200 flex items-center shadow-lg"
        >
          <span className="mr-2">{isMobileMenuOpen ? '关闭' : '导航'}</span>
          <i className={`fas fa-chevron-${isMobileMenuOpen ? 'up' : 'down'}`}></i>
        </motion.button>
      </div>

      {/* Mobile navigation menu */}
      <motion.div
        initial={{ opacity: 0, y: 20, pointerEvents: 'none' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          y: isMobileMenuOpen ? 0 : 20,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
      >
        <div className="bg-slate-900/90 backdrop-blur-lg border border-indigo-500/30 rounded-xl p-4 shadow-lg">
          <ul className="flex flex-col space-y-1">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-indigo-900/40 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Desktop navigation */}
      <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <motion.nav 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-4 shadow-xl w-52"
        >
          {/* 科技感装饰元素 */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-50"></div>
          
          <ul className="space-y-1 relative z-10">
            {navItems.map(item => (
              <li key={item.id}>
                <motion.button
                  onClick={() => onSectionClick(item.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-indigo-900/40 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className={`block w-1.5 h-6 rounded-full transition-all ${
                    activeSection === item.id 
                      ? 'bg-indigo-400' 
                      : 'bg-transparent'
                  }`}></span>
                  <span>{item.label}</span>
                </motion.button>
              </li>
            ))}
          </ul>
          
          <NavigationDivider />
          
          {/* 导航底部装饰 */}
          <div className="text-center text-xs text-slate-500 mt-2">
            <span>SCROLL TO EXPLORE</span>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navigation;