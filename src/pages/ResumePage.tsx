import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PersonalStatement from '@/components/PersonalStatement';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('intro');
  
  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'education', 'work', 'projects', 'skills', 'interests'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Starry background */}
      <StarBackground />
      
      {/* Overlay */}
       {/* Background gradient with cosmic colors */}
       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-indigo-950/80 to-black/90"></div>
      
      {/* Header */}
      <Header />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      
       {/* Main content */}
      <div className="container mx-auto px-6 lg:pl-64 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column */}
          <div className="lg:col-span-5 space-y-8">
            <div id="intro">
              <PersonalStatement />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="interests">
              <Interests />
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-7 space-y-8">
            <div id="education">
              <Education />
            </div>
            <div id="work">
              <WorkExperience />
            </div>
            <div id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;