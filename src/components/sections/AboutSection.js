import React from 'react';
import { User, GraduationCap, Code, Award, HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="lg:col-span-2 bg-gray-900 bg-opacity-90 p-6 rounded-lg border border-green-500 shadow-lg shadow-green-500/20">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-green-400">
        <User className="mr-2" /> About De Ren
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <div className="flex items-start mb-3">
            <GraduationCap className="text-green-400 mt-1 mr-3 h-5 w-5" />
            <div>
              <h3 className="text-white font-semibold mb-2">Education & Skills</h3>
              <p className="text-gray-200 leading-relaxed">
                I'm a Computer Science graduate student at NYU (expected graduation: May 2025), specializing in Artificial Intelligence.
                I earned my B.S. in Computer Science from UC Irvine, with a focus on Algorithms.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <div className="flex items-start mb-3">
            <Code className="text-green-400 mt-1 mr-3 h-5 w-5" />
            <div>
              <h3 className="text-white font-semibold mb-2">Technical Background</h3>
              <p className="text-gray-200 leading-relaxed">
                I am familiar with several programming languages, with Python being my primary language. I have a natural aptitude for computer science.
                In my final year at UCI, I took 13 upper-division Computer Science courses and maintained a 3.8 GPA throughout that academic year.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <div className="flex items-start mb-3">
            <HeartHandshake className="text-green-400 mt-1 mr-3 h-5 w-5" />
            <div>
              <h3 className="text-white font-semibold mb-2">Personal Interests</h3>
              <p className="text-gray-200 leading-relaxed">
                When I'm not coding, I enjoy playing soccer and NL Hold'em.
                I also hold a bartender certification and have an impressive alcohol tolerance.
                Consider hiring me as a Software Development Engineer (SDE) and a complementary bartender for company events! <span className="text-green-400">:)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 