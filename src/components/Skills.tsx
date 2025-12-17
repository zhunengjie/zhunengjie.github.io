import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'framework' | 'database' | 'devops' | 'ai';
}

interface RadarData {
  subject: string;
  A: number;
  fullMark: number;
}

const Skills: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills: Skill[] = [
    { name: 'Python', level: 5, category: 'programming' },
    { name: 'Go', level: 4, category: 'programming' },
    { name: 'Flask', level: 5, category: 'framework' },
    { name: 'FastAPI', level: 5, category: 'framework' },
    { name: 'Django', level: 4, category: 'framework' },
    { name: 'LangChain', level: 5, category: 'ai' },
    { name: 'LangGraph', level: 4, category: 'ai' },
    { name: 'Dify', level: 4, category: 'ai' },
    { name: 'Redis', level: 5, category: 'database' },
    { name: 'MongoDB', level: 5, category: 'database' },
    { name: 'MySQL', level: 5, category: 'database' },
    { name: 'Scrapy', level: 5, category: 'framework' },
    { name: 'Docker', level: 5, category: 'devops' },
    { name: 'Kafka', level: 4, category: 'devops' },
    { name: 'RabbitMQ', level: 4, category: 'devops' }
  ];
  
  // 转换为雷达图数据格式，选择代表性技能
  const radarData: RadarData[] = [
    { subject: 'Python', A: 5, fullMark: 5 },
    { subject: 'AI框架', A: 4.8, fullMark: 5 },
    { subject: 'Web开发', A: 5, fullMark: 5 },
    { subject: '数据库', A: 5, fullMark: 5 },
    { subject: '爬虫技术', A: 5, fullMark: 5 },
    { subject: 'DevOps', A: 4.5, fullMark: 5 }
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
  
  // 获取技能类别对应的图标
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'programming': return 'code';
      case 'framework': return 'cubes';
      case 'database': return 'database';
      case 'devops': return 'server';
      case 'ai': return 'robot';
      default: return 'code';
    }
  };
  
  // 获取技能类别对应的颜色
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'programming': return 'text-blue-400';
      case 'framework': return 'text-purple-400';
      case 'database': return 'text-green-400';
      case 'devops': return 'text-orange-400';
      case 'ai': return 'text-pink-400';
      default: return 'text-blue-400';
    }
  };
  
   // 获取技能等级的文本描述 - 当前不使用
  
   // 获取技能等级对应的颜色类 - 当前不使用
  
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
          <i className="fas fa-code text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">技能栈</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-6"></div>
        
        {/* 技能雷达图 */}
        <div className="mb-10">
          <h3 className="text-lg font-medium text-slate-300 mb-4">核心能力概览</h3>
          <div className="rounded-xl overflow-hidden border border-indigo-500/20 bg-slate-800/30 p-2 backdrop-blur-sm">
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#94a3b8' }} axisLine={false} />
                <Radar
                  name="技能水平"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* 技能类别分组 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-slate-300 mb-4">详细技能列表</h3>
          
          {/* 编程语言 */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <i className={`fas fa-code ${getCategoryColor('programming')} mr-2`}></i>
              <h4 className="text-md font-medium text-slate-200">编程语言</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
              {skills.filter(s => s.category === 'programming').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -10
                  }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border border-slate-700/30 hover:border-${
                    skill.category === 'programming' ? 'blue' : 
                    skill.category === 'framework' ? 'purple' : 
                    skill.category === 'database' ? 'green' : 
                    skill.category === 'devops' ? 'orange' : 'pink'
                  }-500/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                 >
                  <span className={`text-slate-300 flex items-center`}>
                    <i className={`fas fa-${getCategoryIcon(skill.category)} ${getCategoryColor(skill.category)} mr-2 text-sm`}></i>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 框架与库 */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <i className={`fas fa-cubes ${getCategoryColor('framework')} mr-2`}></i>
              <h4 className="text-md font-medium text-slate-200">框架与库</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
              {skills.filter(s => s.category === 'framework').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -10
                  }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border border-slate-700/30 hover:border-${
                    skill.category === 'programming' ? 'blue' : 
                    skill.category === 'framework' ? 'purple' : 
                    skill.category === 'database' ? 'green' : 
                    skill.category === 'devops' ? 'orange' : 'pink'
                  }-500/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className={`text-slate-300 flex items-center`}>
                    <i className={`fas fa-${getCategoryIcon(skill.category)} ${getCategoryColor(skill.category)} mr-2 text-sm`}></i>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 数据库 */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <i className={`fas fa-database ${getCategoryColor('database')} mr-2`}></i>
              <h4 className="text-md font-medium text-slate-200">数据库</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
              {skills.filter(s => s.category === 'database').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -10
                  }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border border-slate-700/30 hover:border-${
                    skill.category === 'programming' ? 'blue' : 
                    skill.category === 'framework' ? 'purple' : 
                    skill.category === 'database' ? 'green' : 
                    skill.category === 'devops' ? 'orange' : 'pink'
                  }-500/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className={`text-slate-300 flex items-center`}>
                    <i className={`fas fa-${getCategoryIcon(skill.category)} ${getCategoryColor(skill.category)} mr-2 text-sm`}></i>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* DevOps */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <i className={`fas fa-server ${getCategoryColor('devops')} mr-2`}></i>
              <h4 className="text-md font-medium text-slate-200">DevOps & 中间件</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
              {skills.filter(s => s.category === 'devops').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -10
                  }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border border-slate-700/30 hover:border-${
                    skill.category === 'programming' ? 'blue' : 
                    skill.category === 'framework' ? 'purple' : 
                    skill.category === 'database' ? 'green' : 
                    skill.category === 'devops' ? 'orange' : 'pink'
                  }-500/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className={`text-slate-300 flex items-center`}>
                    <i className={`fas fa-${getCategoryIcon(skill.category)} ${getCategoryColor(skill.category)} mr-2 text-sm`}></i>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* AI 相关 */}
          <div className="mb-2">
            <div className="flex items-center mb-3">
              <i className={`fas fa-robot ${getCategoryColor('ai')} mr-2`}></i>
              <h4 className="text-md font-medium text-slate-200">AI 相关</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-6">
              {skills.filter(s => s.category === 'ai').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -10
                  }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border border-slate-700/30 hover:border-${
                    skill.category === 'programming' ? 'blue' : 
                    skill.category === 'framework' ? 'purple' : 
                    skill.category === 'database' ? 'green' : 
                    skill.category === 'devops' ? 'orange' : 'pink'
                  }-500/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className={`text-slate-300 flex items-center`}>
                    <i className={`fas fa-${getCategoryIcon(skill.category)} ${getCategoryColor(skill.category)} mr-2 text-sm`}></i>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* 技能悬浮提示 */}
      {hoveredSkill && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed pointer-events-none bg-slate-800/95 backdrop-blur-md border border-indigo-500/30 rounded-lg p-3 shadow-lg"
          style={{
            left: `${event?.clientX + 10}px`,
            top: `${event?.clientY - 10}px`,
            zIndex: 1000
          }}
        >
          <p className="text-sm text-slate-200">{hoveredSkill}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Skills;