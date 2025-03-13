import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const SkillMeter = ({ skill, level }) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const numberProps = useSpring({
    number: show ? level : 0,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  const barProps = useSpring({
    width: show ? `${level}%` : '0%',
    from: { width: '0%' },
    config: { duration: 2000 },
  });

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-green-400">{skill}</span>
        <animated.span className="text-sm font-medium text-green-400">
          {numberProps.number.to(val => Math.floor(val))}%
        </animated.span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <animated.div 
          className="bg-green-500 h-2.5 rounded-full" 
          style={{ width: barProps.width }}
        />
      </div>
    </div>
  );
};

export default SkillMeter; 