import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const InternshipsSection = () => {
  return (
    <section className="lg:col-span-2 bg-gray-900 bg-opacity-90 p-6 rounded-lg border border-green-500 shadow-lg shadow-green-500/20">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-green-400">
        <Briefcase className="mr-2" /> Internships
      </h2>
      <div className="space-y-8">
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-400 transition-all">
          <h3 className="text-xl font-semibold text-white">Machine Learning Engineering Intern</h3>
          <div className="flex items-center text-green-400 mt-1 mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">Jun 2024 - Aug 2024</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>Datalynn, New York, US</span>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-200">
            <li className="hover:text-white transition-colors">Engineered a software solution in Go to replicate a 10+ matrix in the TikTok Sell Center</li>
            <li className="hover:text-white transition-colors">Designed a solution to extract TikTok video and creator information using Tik API</li>
            <li className="hover:text-white transition-colors">Implemented a search engine for TikTok Creators with over 150+ matrices using OpenAI assistance API</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-400 transition-all">
          <h3 className="text-xl font-semibold text-white">Software Engineer - AIGC Algorithm</h3>
          <div className="flex items-center text-green-400 mt-1 mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">Jun 2023 - Aug 2023</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>Beijing QuickMeow Technology Co., Ltd, Beijing, China</span>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-200">
            <li className="hover:text-white transition-colors">Developed AI veterinarian chatbot using ChatGPT API, Langchain, and Llamaindex</li>
            <li className="hover:text-white transition-colors">Created a chatbot for recommending services and products from 10+ categories</li>
            <li className="hover:text-white transition-colors">Utilized Adobe PDF Extract API to index information from veterinary diagnostic books</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-400 transition-all">
          <h3 className="text-xl font-semibold text-white">Software Engineer Assistant</h3>
          <div className="flex items-center text-green-400 mt-1 mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">Jun 2020 - Sep 2020</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>Shenzhen Altitude Drives Technology Co., Ltd, Shenzhen, China</span>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-200">
            <li className="hover:text-white transition-colors">Implemented Rs485 Modbus communication for the AD300 series AC driver using C</li>
            <li className="hover:text-white transition-colors">Developed the communication module including Modbus function codes and error-checking mechanisms</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection; 