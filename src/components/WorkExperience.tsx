import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  logo: string;
  achievements: string[];
}

const WorkExperience: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string[]>(['job1', 'job2']); // All expanded by default
  
  const experiences: Experience[] = [
    {
      id: 'job1',
      company: '深圳市东信时代',
      position: 'AI应用开发',
      period: '2023.8 - 至今',
      logo: 'DX',
      achievements: [
        'Agent开发：主导完成创意海报生成智能体开发，极大提升了设计师的效率',
        'MCP工具开发：负责开发海外电商、社媒搜索/详情/评论实时采集工具，以及图、音、视频下载工具，为产品提供关键工具',
        '知识库、微调：负责采集电商包包、服装等商品素材，应用于包包上身、换背景等模型微调；采集社媒热门贴文、BGM、视频，以及品牌、百科等数据，建设爆款图文等4大知识库，对产品效果提升显著',
        '工作业绩: 从0到1，成功上线2大业务产品（营赛洞见mlm.yingsaidata.com、营赛高光：hi-light.ai）'
      ]
    },
    {
      id: 'job2',
      company: '深圳市东信时代',
      position: 'Python高级开发、组长',
      period: '2020.8 - 2023.8',
      logo: 'DX',
      achievements: [
        '爬虫开发：为业务源数据负责，带领团队完成6大主流社媒平台，以及相关达人库、榜单、热门话题等的采集能力建设，个人负责抖音、微博均可实现日采亿级数据',
        '系统开发：负责数据采集相关的系统建设，从0到1，主导完成分布式爬虫系统建设；从需求、方案、落地，核心完成社媒监测系统开发',
        '团队管理：负责小组的目标管理、需求管理、任务分配、人员招聘等，打造多端多源、稳定的采集体系',
        '工作业绩: 获得东信之星、2022年度突出贡献奖荣誉称号'
      ]
    },
    {
      id: 'job3',
      company: '博悦科创科技',
      position: 'Python中级开发',
      period: '2018.7 - 2020.7',
      logo: 'BY',
      achievements: [
        'WEB开发：参与数据质量、数据标准、风险监控、知识图谱构建等开发，从0到1上线"招商企查查"',
        '数据开发：裁决文书、外贸邦等爬虫开发，万得、天眼查等外部数据源引入，保障业务质量与稳定',
        '工作业绩: 从0到1完成3大系统模块，以及15+稳定数据源开发'
      ]
    },
    {
      id: 'job4',
      company: '南方稀贵金属交易所',
      position: 'Python初级开发',
      period: '2017.4 - 2018.5',
      logo: 'NF',
      achievements: [
        '负责南交所的官网、客户管理系统的后端开发',
        '负责行业、价格相关的爬虫开发'
      ]
    }
  ];
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const toggleExpand = (id: string) => {
    setExpanded(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
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
          <i className="fas fa-briefcase text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">工作经历</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="relative pl-8 border-l-2 border-indigo-500/30 last:border-l-0"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              
              <motion.div 
                className="p-5 bg-slate-800/20 rounded-lg border border-slate-700/30 hover:border-indigo-500/30 transition-all"
                whileHover={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-2 md:mb-0">
                    <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-300 font-bold text-lg mr-4 border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{exp.company}</h3>
                      <p className="text-indigo-300">{exp.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-400 text-sm mr-4 bg-slate-800/50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1, color: '#a5b4fc' }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleExpand(exp.id)}
                      className="text-indigo-400 hover:text-indigo-300 p-2 rounded-full hover:bg-indigo-900/20"
                    >
                      <i className={`fas fa-chevron-${expanded.includes(exp.id) ? 'up' : 'down'}`}></i>
                    </motion.button>
                  </div>
                </div>
                
                <motion.ul 
                  initial={false}
                  animate={{ 
                    height: expanded.includes(exp.id) ? 'auto' : 0,
                    opacity: expanded.includes(exp.id) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-4 space-y-3 pl-0"
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      className="text-slate-300 flex items-start p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-indigo-400 mr-3 mt-1">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;