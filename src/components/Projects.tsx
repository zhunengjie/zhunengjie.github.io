import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
   const projects: Project[] = [
    {
      id: 'proj1',
      name: '创意海报生成智能体',
      description: '输入文字交互，即可生成多张定制化海报，同时支持批量生产海报。基于langchain框架进行项目开发，基于deepseek进行对话交互，基于火山方舟大模型进行图片生成，使用fastapi后端接口开发，Redis实现缓存，Celery批量任务调度。从0到1成功上线，设计师效率提升明显。',
      technologies: ['Python', 'LangChain', 'DeepSeek', 'FastAPI', 'Redis', 'Celery'],
      link: 'https://hi-light.ai',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%20generated%20creative%20poster%20design%20interface%20with%20stars%20background&sign=4d2a208eca03b0b909f023a5a1187ad6'
    },
    {
      id: 'proj2',
      name: '营销短视频生成智能体',
      description: '一键生成跨境电商多语言、本地化种草带货视频。负责MCP工具开发、知识库建设和微调数据获取。完成10个工具，支撑4个知识库建设，5个模型场景微调，产品按时上线。',
      technologies: ['Python', 'LangChain', 'MCP', 'Redis', 'Kafka', 'MongoDB'],
      link: 'https://hi-light.ai',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Short%20video%20marketing%20AI%20platform%20interface%20with%20stars%20background&sign=2e215de27c0db58bda0ea0cadbd5d0b8'
    },
    {
      id: 'proj3',
      name: '社媒监测分析系统',
      description: '解决业务中，产品、市场公关、数据分析师数据获取难度大、数据不全、不及时问题。业务需求响应耗时由天级缩短至分钟级，持续稳定支撑营赛产品。',
      technologies: ['Python', 'Flask', 'Celery', 'Redis', 'MySQL', 'Kafka', 'Vue'],
      link: 'https://mip.yingsaidata.com',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Social%20media%20monitoring%20dashboard%20with%20data%20visualization%20and%20stars%20background&sign=c13dbe915050c46909606c32bf4dd96a'
    },
    {
      id: 'proj4',
      name: '分布式爬虫系统',
      description: '从0到1建设，基于Scarpy、RabbitMQ架构，Mongo进行数据存储、Kafka进行数据同步。实现爬虫模块化，资源快速拓展，提高2倍爬虫速度，服务器利用率提升3倍。',
      technologies: ['Python', 'Scrapy', 'RabbitMQ', 'MongoDB', 'Kafka', 'Kubernetes'],
      link: '',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Distributed%20web%20crawler%20system%20architecture%20with%20stars%20background&sign=a2b9f486725a8b78b1bf31f5889a475c'
    },
    {
      id: 'proj5',
      name: '社媒数据采集',
      description: '解决国内主流社媒平台的数据采集，包括抖音、微博、小红书等社媒，以及巨量星图、蒲公英等官方达人平台。团队完成6大主流平台的采集能力建设，个人负责的抖音、微博平台均可实现日采亿级数据。',
      technologies: ['Python', 'Scrapy', 'RPC', 'Frida', 'Yolov8', 'DrissionPage'],
      link: '',
      imageUrl: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Social%20media%20data%20collection%20process%20with%20stars%20background&sign=b4e337d44c7f78362e455ce9a368f084'
    }
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
          <i className="fas fa-project-diagram text-indigo-300"></i>
        </div>
        <h2 className="text-xl font-bold text-slate-100">个人项目</h2>
      </motion.div>
      
      <motion.div variants={itemVariants} className="relative z-10">
        {/* 更具科技感的分隔线 */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="bg-slate-800/30 rounded-lg overflow-hidden hover:bg-slate-800/40 transition-all border border-slate-700/30"
              whileHover={{ 
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.2)',
                scale: 1.01
              }}
            >
               {/* Project image */}
               <div className="h-52 overflow-hidden relative group border-b border-slate-700/50">
                 {/* 科技感图片边框 */}
                 <div className="absolute inset-0 border-2 border-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                 <motion.img 
                   src={project.imageUrl} 
                   alt={`${project.name} 预览`} 
                   className="w-full h-full object-cover"
                   initial={{ scale: 1 }}
                   animate={{ scale: 1 }}
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-indigo-900/70 backdrop-blur-sm rounded-full text-xs text-indigo-200 border border-indigo-500/30">
                     项目 #{index + 1}
                   </span>
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 p-5">
                   <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.slice(0, 3).map((tech, i) => (
                       <span 
                         key={i} 
                         className="px-2 py-0.5 text-xs rounded-full bg-slate-800/80 text-slate-200"
                       >
                         {tech}
                       </span>
                     ))}
                     {project.technologies.length > 3 && (
                       <span className="px-2 py-0.5 text-xs rounded-full bg-slate-800/80 text-slate-200">
                         +{project.technologies.length - 3}
                       </span>
                     )}
                   </div>
                 </div>
               </div>
              
              <div className="p-5">
                <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project link */}
                {project.link && (
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>查看项目</span>
                    <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;