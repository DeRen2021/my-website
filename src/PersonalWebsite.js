import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { useSpring, animated, useTransition } from 'react-spring';

// 导入组件
import InteractiveTerminal from './components/terminal/InteractiveTerminal';
import AnimatedBackground from './components/background/AnimatedBackground';
import WebsiteParkour from './components/dashboard/WebsiteParkour';
import DownloadSection from './components/dashboard/DownloadSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import InternshipsSection from './components/sections/InternshipsSection';
import ContactSection from './components/sections/ContactSection';

const PersonalWebsite = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [projectData, setProjectData] = useState([]);
    const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 }
    });

    // 部分切换动画
    const sectionTransition = useTransition(activeSection, {
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(-20px)' },
      config: { duration: 300 },
      onRest: () => setIsTransitioning(false)
    });
  
    const fetchProjectData = useCallback(() => {
      setTimeout(() => {
        setProjectData([
          {
            name: 'NYU/Citi Trading Competition Platform',
            description: 'Designed a multi-agent system workflow for generating and improving trading bots using ChatGPT API/Claude API with AutoGen. \n Design a debuger for the AI Bot wtih assitance API to correct the AI code',
            
            tags: ['Python', 'AutoGen', 'ChatGPT API','Assitance API','Claude API']
          },
          {
            name: 'IOS App Development',
            description: 'Implemented a health scoring system using USDA data and Selenium automation.',
            tags: ['Python', 'Selenium', 'iOS', 'Health']
          },
          {
            name: 'Deep Learning Projects',
            description: 'Developed an LSTM-based predictive text model and an AI-driven Minecraft mining bot using Deep Q-Learning.',
            tags: ['Python', 'PyTorch', 'LSTM', 'Deep Q-Learning', 'AWS']
          },
          {
            name: 'Web Development',
            description: 'Created a personal website with Flask, Gunicorn, Apache, and ChatGPT integration.',
            tags: ['Flask', 'Gunicorn', 'Apache', 'ChatGPT', 'Web Development']
          }
        ]);
      }, 1000);
    }, []);
  
    useEffect(() => {
      if (activeSection === 'projects' && projectData.length === 0) {
        fetchProjectData();
      }
    }, [activeSection, projectData.length, fetchProjectData]);
  
    const handleCommand = (cmd) => {
      const command = cmd.toLowerCase().trim();
      
      const changeSection = (newSection) => {
        if (newSection !== activeSection) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveSection(newSection);
          }, 300);
        }
        return [`Switching to ${newSection} section...`];
      };
      
      switch(command) {
        case 'help':
          return ['Available commands:', 'about - About me', 'skills - Skills', 'projects - Projects', 'internships - Internships', 'contact - Contact', 'clear - Clear screen', 'home - Return to home'];
        case 'about':
          return changeSection('about');
        case 'skills':
          return changeSection('skills');
        case 'projects':
          fetchProjectData();
          return changeSection('projects');
        case 'internships':
          return changeSection('internships');
        case 'contact':
          return changeSection('contact');
        case 'clear':
          return ['CLEAR'];
        case 'home':
          return changeSection('home');
        default:
          return [`Command not recognized: ${cmd}. Type "help" for available commands.`];
      }
    };
  
    return (
      <div className="min-h-screen bg-transparent relative">
        {/* 矩阵背景位于最底层 */}
        <AnimatedBackground />
        
        {/* 内容层 */}
        <animated.div style={fadeIn} className="min-h-screen relative z-10">
          <div className="min-h-screen bg-black bg-opacity-30">
            <header className="bg-black bg-opacity-75 p-4 sticky top-0 z-20 backdrop-blur-sm border-b border-green-500/30">
              <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center text-green-400">
                  <Cpu className="mr-2" /> De Ren
                </h1>
              </nav>
            </header>
    
            <main className="container mx-auto px-4 py-8">
              <div className={`grid ${isTerminalMaximized ? '' : 'grid-cols-1 lg:grid-cols-2'} gap-8`}>
                <section className={isTerminalMaximized ? 'col-span-full' : 'lg:col-span-2'}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold flex items-center text-green-400">
                      <Terminal className="mr-2" /> Command Center
                    </h2>
                    <button
                      onClick={() => setIsTerminalMaximized(!isTerminalMaximized)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
                    >
                      {isTerminalMaximized ? 'Minimize' : 'Maximize'}
                    </button>
                  </div>
                  <InteractiveTerminal onCommand={handleCommand} />
                </section>
    
                {!isTerminalMaximized && (
                  <>
                    {sectionTransition((style, item) => (
                      <animated.div style={style} className="col-span-1 lg:col-span-2">
                        {item === 'home' && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <WebsiteParkour />
                            <DownloadSection />
                          </div>
                        )}
                        {item === 'about' && <AboutSection />}
                        {item === 'skills' && <SkillsSection />}
                        {item === 'projects' && <ProjectsSection projectData={projectData} />}
                        {item === 'internships' && <InternshipsSection />}
                        {item === 'contact' && <ContactSection />}
                      </animated.div>
                    ))}
                  </>
                )}
              </div>
            </main>
    
            <footer className="bg-black bg-opacity-75 text-center py-4 text-green-400 border-t border-green-500/30 backdrop-blur-sm">
              <p>&copy; 2024 De Ren. All rights reserved.</p>
            </footer>
          </div>
        </animated.div>
      </div>
    );
  };

export default PersonalWebsite;