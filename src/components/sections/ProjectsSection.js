import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { useSpring, animated, config } from 'react-spring';

const ProjectCard = ({ project, index, delay }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: delay * index,
    config: config.gentle
  });

  return (
    <animated.div style={springProps} className="border border-green-500 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2 flex items-center">
        <Shield className="mr-2" /> {project.name}
      </h3>
      <p className="mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="bg-green-500 text-white px-2 py-1 rounded text-sm">{tag}</span>
        ))}
      </div>
    </animated.div>
  );
};

const ProjectsSection = ({ projectData }) => {
  const [isLoading, setIsLoading] = useState(true);

  const sectionFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 }
  });

  // 在数据加载后设置 loading 状态为 false
  useEffect(() => {
    if (projectData.length > 0) {
      // 添加延迟给予动画效果时间
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [projectData]);

  // 创建加载动画效果
  const loadingSpring = useSpring({
    from: { opacity: 0.3 },
    to: { opacity: 1 },
    loop: { reverse: true },
    config: { duration: 800 }
  });

  return (
    <animated.section style={sectionFade} className="lg:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      {projectData.length === 0 ? (
        <animated.div style={loadingSpring} className="flex justify-center items-center h-40">
          <p className="text-lg text-green-400">Loading project data...</p>
        </animated.div>
      ) : (
        <div className="space-y-4">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              delay={300} 
            />
          ))}
        </div>
      )}
    </animated.section>
  );
};

export default ProjectsSection; 