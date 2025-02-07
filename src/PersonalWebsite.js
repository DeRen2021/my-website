import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Terminal, Code, Server, Shield, Github, Linkedin, Mail, Cpu, ExternalLink, MessageSquare, CreditCard, Briefcase, Download, FileText, FileBarChart, Globe, Wine } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { websiteConfig } from './config/websites';
import { downloadConfig } from './config/downloads';

const InteractiveTerminal = ({ onCommand }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState(['Welcome to De Ren\'s website. Type "help" for available commands.']);
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
  
    const commands = useMemo(() => ['about', 'skills', 'projects', 'internships', 'contact', 'clear', 'home'], []);
  
    useEffect(() => {
      if (input.trim() === '') {
        setSuggestions([]);
      } else {
        const filtered = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
        setSuggestions(filtered);
      }
    }, [input, commands]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = onCommand(input);
      if (result[0] === 'CLEAR') {
        setOutput([]);
      } else {
        setOutput(prev => [...prev, `> ${input}`, ...result]);
      }
      setInput('');
      setSuggestions([]);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Tab' && suggestions.length > 0) {
        e.preventDefault();
        setInput(suggestions[0]);
      }
    };
  
    const handleSuggestionClick = (suggestion) => {
      setInput(suggestion);
      inputRef.current.focus();
    };
  
    const handleCommandClick = (command) => {
      onCommand(command);
    };
  
    const renderOutputLine = (line) => {
      if (commands.includes(line.trim().toLowerCase())) {
        return (
          <button
            onClick={() => handleCommandClick(line.trim())}
            className="text-green-400 hover:text-green-200 hover:underline focus:outline-none bg-transparent border-none cursor-pointer w-full text-left"
          >
            {line}
          </button>
        );
      }
      return line;
    };
  
    return (
      <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto border border-green-500">
        {output.map((line, i) => (
          <div key={i}>{renderOutputLine(line)}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
          <div className="flex">
            <span className="mr-2">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-grow"
              autoFocus
            />
          </div>
          {suggestions.length > 0 && (
            <div className="flex mt-2 space-x-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-2 py-1 bg-gray-800 rounded hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </form>
      </div>
    );
  };

const AnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrix = "01";
    const matrixArray = matrix.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="matrix-bg" className="fixed top-0 left-0 w-full h-full -z-10" />;
};

const WebsiteParkour = () => {
    const { websites } = websiteConfig;
  
    return (
      <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg relative" style={{height: '300px'}}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <ExternalLink className="mr-2" /> Website Parkour
        </h2>
        <div className="overflow-y-auto h-[calc(100%-3rem)]">
          <div className="space-y-4">
            {websites.map((site, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center">
                  <site.icon className="text-green-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold">{site.title}</h3>
                    <p className="text-sm text-gray-300">{site.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm mr-3 ${site.status === 'Live' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {site.status}
                  </span>
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const DownloadSection = () => {
    const { downloads } = downloadConfig;
  
    return (
      <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg relative" style={{height: '300px'}}>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Download className="mr-2" /> Download Center
        </h2>
        <div className="overflow-y-auto h-[calc(100%-3rem)]">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center">
                  <item.icon className="text-green-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm mr-3 ${item.status === 'Available' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {item.status}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded transition-colors ${
                      item.status === 'Available' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gray-500 cursor-not-allowed text-gray-300'
                    }`}
                    onClick={(e) => item.status !== 'Available' && e.preventDefault()}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const SkillMeter = ({ skill, level }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-green-400">{skill}</span>
        <span className="text-sm font-medium text-green-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};


const PersonalWebsite = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [projectData, setProjectData] = useState([]);
    const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  
    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 }
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
      switch(command) {
        case 'help':
          return ['Available commands:', 'about', 'skills', 'projects', 'internships', 'contact', 'clear', 'home'];
        case 'about':
          setActiveSection('about');
          return ['Displaying about section...'];
        case 'skills':
          setActiveSection('skills');
          return ['Displaying skills section...'];
        case 'projects':
          setActiveSection('projects');
          fetchProjectData();
          return ['Fetching project data...'];
        case 'internships':
          setActiveSection('internships');
          return ['Displaying internships section...'];
        case 'contact':
          setActiveSection('contact');
          return ['Displaying contact section...'];
        case 'clear':
          return ['CLEAR'];
        case 'home':
          setActiveSection('home');
          return ['Returning to home view...'];
        default:
          return [`Command not recognized: ${cmd}. Type "help" for available commands.`];
      }
    };
  
    return (
      <animated.div style={fadeIn} className="min-h-screen bg-gray-900 text-white relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <header className="bg-black bg-opacity-50 p-4 sticky top-0 z-20">
            <nav className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold flex items-center">
                <Cpu className="mr-2" /> De Ren
              </h1>
            </nav>
          </header>
  
          <main className="container mx-auto px-4 py-8">
            <div className={`grid ${isTerminalMaximized ? '' : 'grid-cols-1 lg:grid-cols-2'} gap-8`}>
              <section className={isTerminalMaximized ? 'col-span-full' : 'lg:col-span-2'}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold flex items-center">
                    <Terminal className="mr-2" /> Command Center
                  </h2>
                  <button
                    onClick={() => setIsTerminalMaximized(!isTerminalMaximized)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  >
                    {isTerminalMaximized ? 'Minimize' : 'Maximize'}
                  </button>
                </div>
                <InteractiveTerminal onCommand={handleCommand} />
              </section>
  
              {!isTerminalMaximized && (
                <>
                  {activeSection === 'home' && (
                    <>
                      <WebsiteParkour />
                      <DownloadSection />
                    </>
                  )}
  
                    {activeSection === 'about' && (
                    <section className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">About De Ren</h2>
                        <p className="mb-4">
                        I'm a Computer Science graduate student at NYU (expected graduation: May 2025), specializing in Artificial Intelligence.
                        I earned my B.S. in Computer Science from UC Irvine, with a focus on Algorithms.
                        I am familiar with several programming languages, with Python being my primary language. I have a natural aptitude for computer science.
                        In my final year at UCI, I took 13 upper-division Computer Science courses and maintained a 3.8 GPA throughout that academic year.
                        </p>
                        <p>
                        When I'm not coding, I enjoy playing soccer and NL Hold'em.
                        I also hold a bartender certification and have an impressive alcohol tolerance.
                        Consider hiring me as a Software Development Engineer (SDE) and a complementary bartender for company events! :)
                        </p>
                    </section>
                    )}
                    
                  {activeSection === 'skills' && (
                    <>
                      <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Code className="mr-2" /> Programming & Tools
                        </h3>
                        <SkillMeter skill="Python" level={95} />
                        <SkillMeter skill="C/C++" level={85} />
                        <SkillMeter skill="SQL" level={75} />
                        <SkillMeter skill="Git" level={90} />
                        <SkillMeter skill="Linux" level={85} />
                      </section>
                      <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Server className="mr-2" /> Technologies & Frameworks
                        </h3>
                        <SkillMeter skill="Machine Learning" level={90} />
                        <SkillMeter skill="PyTorch" level={85} />
                        <SkillMeter skill="Docker" level={80} />
                        <SkillMeter skill="AWS" level={75} />
                        <SkillMeter skill="Flask" level={80} />
                      </section>
                    </>
                  )}
  
                  {activeSection === 'projects' && (
                    <section className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
                      {projectData.length === 0 ? (
                        <p>Loading project data...</p>
                      ) : (
                        <div className="space-y-4">
                          {projectData.map((project, index) => (
                            <div key={index} className="border border-green-500 p-4 rounded-lg">
                              <h3 className="text-xl font-semibold mb-2 flex items-center">
                                <Shield className="mr-2" /> {project.name}
                              </h3>
                              <p className="mb-2">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="bg-green-500 text-white px-2 py-1 rounded text-sm">{tag}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  )}
  
                  {activeSection === 'internships' && (
                    <section className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <Briefcase className="mr-2" /> Internships
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold">Machine Learning Engineering Intern</h3>
                          <p className="text-green-400">Datalynn, New York, US (Jun 2024 - Aug 2024)</p>
                          <ul className="list-disc list-inside mt-2">
                            <li>Engineered a software solution in Go to replicate a 10+ matrix in the TikTok Sell Center</li>
                            <li>Designed a solution to extract TikTok video and creator information using Tik API</li>
                            <li>Implemented a search engine for TikTok Creators with over 150+ matrices using OpenAI assistance API</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Software Engineer - AIGC Algorithm</h3>
                          <p className="text-green-400">Beijing QuickMeow Technology Co., Ltd, Beijing, China (Jun 2023 - Aug 2023)</p>
                          <ul className="list-disc list-inside mt-2">
                            <li>Developed AI veterinarian chatbot using ChatGPT API, Langchain, and Llamaindex</li>
                            <li>Created a chatbot for recommending services and products from 10+ categories</li>
                            <li>Utilized Adobe PDF Extract API to index information from veterinary diagnostic books</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Software Engineer Assistant</h3>
                          <p className="text-green-400">Shenzhen Altitude Drives Technology Co., Ltd, Shenzhen, China (Jun 2020 - Sep 2020)</p>
                          <ul className="list-disc list-inside mt-2">
                            <li>Implemented Rs485 Modbus communication for the AD300 series AC driver using C</li>
                            <li>Developed the communication module including Modbus function codes and error-checking mechanisms</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  )}
  
                  {activeSection === 'contact' && (
                    <section className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                      <p className="mb-4">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                      </p>
                      <div className="space-y-2">
                        <a href="mailto:dr3702@nyu.edu" className="flex items-center text-green-400 hover:text-green-300">
                          <Mail className="mr-2" /> dr3702@nyu.edu
                        </a>
                        <a href="https://www.linkedin.com/in/de-ren-807097299/" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300">
                          <Linkedin className="mr-2" /> De Ren
                        </a>
                        <a href="https://github.com/Emm0o0" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300">
                          <Github className="mr-2" /> Emm0o0
                        </a>
                      </div>
                    </section>
                  )}
                </>
              )}
            </div>
          </main>
  
          <footer className="bg-black bg-opacity-50 text-center py-4">
            <p>&copy; 2024 De Ren. All rights reserved.</p>
          </footer>
        </div>
      </animated.div>
    );
  };

export default PersonalWebsite;