import React, { useState, useEffect } from 'react';
import { Code, Server } from 'lucide-react';
import SkillMeter from '../skills/SkillMeter';
import { useSpring, animated } from 'react-spring';

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState({
    programming: 0,
    technologies: 0
  });

  const programmingSkills = [
    { name: "Python", level: 95 },
    { name: "C/C++", level: 85 },
    { name: "SQL", level: 75 },
    { name: "Git", level: 90 },
    { name: "Linux", level: 85 }
  ];

  const techSkills = [
    { name: "Machine Learning", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Flask", level: 80 }
  ];

  // 页面加载时的淡入效果
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 }
  });

  useEffect(() => {
    // 编程技能逐个显示
    const programmingTimer = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev.programming < programmingSkills.length) {
          return { ...prev, programming: prev.programming + 1 };
        }
        clearInterval(programmingTimer);
        return prev;
      });
    }, 400);

    // 技术技能延迟后逐个显示
    const techDelay = setTimeout(() => {
      const techTimer = setInterval(() => {
        setVisibleSkills(prev => {
          if (prev.technologies < techSkills.length) {
            return { ...prev, technologies: prev.technologies + 1 };
          }
          clearInterval(techTimer);
          return prev;
        });
      }, 400);

      return () => clearInterval(techTimer);
    }, programmingSkills.length * 400 + 200);

    return () => {
      clearInterval(programmingTimer);
      clearTimeout(techDelay);
    };
  }, []);

  return (
    <>
      <animated.section style={fadeIn} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Code className="mr-2" /> Programming & Tools
        </h3>
        {programmingSkills.slice(0, visibleSkills.programming).map((skill, index) => (
          <SkillMeter key={index} skill={skill.name} level={skill.level} />
        ))}
      </animated.section>
      <animated.section style={fadeIn} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Server className="mr-2" /> Technologies & Frameworks
        </h3>
        {techSkills.slice(0, visibleSkills.technologies).map((skill, index) => (
          <SkillMeter key={index} skill={skill.name} level={skill.level} />
        ))}
      </animated.section>
    </>
  );
};

export default SkillsSection; 