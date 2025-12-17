import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PersonalStatement from '../components/PersonalStatement';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import StarBackground from '../components/StarBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
      {/* 星星背景效果 */}
      <StarBackground />
      
      {/* 导航栏 */}
      <Navigation />
      
      {/* 头部区域 */}
      <Header />
      
      {/* 主内容区域 */}
      <main className="container mx-auto px-4 py-12">
        {/* 个人陈述 */}
        <section className="mb-20 animate-fade-in">
          <PersonalStatement />
        </section>
        
        {/* 教育背景 */}
        <section className="mb-20 animate-fade-in">
          <Education />
        </section>
        
        {/* 工作经验 */}
        <section className="mb-20 animate-fade-in">
          <WorkExperience />
        </section>
        
        {/* 技能 */}
        <section className="mb-20 animate-fade-in">
          <Skills />
        </section>
        
        {/* 项目 */}
        <section className="mb-20 animate-fade-in">
          <Projects />
        </section>
        
        {/* 兴趣爱好 */}
        <section className="mb-20 animate-fade-in">
          <Interests />
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className="bg-slate-900 py-8 border-t border-indigo-800/30">
        <div className="container mx-auto px-4 text-center text-indigo-300 text-sm">
          <p>© 2025 Personal Portfolio | Designed with ❤️</p>
        </div>
      </footer>
    </div>
  );
}