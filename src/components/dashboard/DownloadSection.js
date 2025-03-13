import React from 'react';
import { Download } from 'lucide-react';
import { downloadConfig } from '../../config/downloads';

const DownloadSection = () => {
    const { downloads } = downloadConfig;
  
    return (
      <section className="bg-gray-900 bg-opacity-90 p-6 rounded-lg relative border border-green-500 shadow-lg shadow-green-500/20" style={{height: '300px'}}>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-green-400">
          <Download className="mr-2" /> Download Center
        </h2>
        <div className="overflow-y-auto h-[calc(100%-3rem)] pr-1">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800 bg-opacity-90 p-4 rounded-lg border border-gray-700 hover:border-green-400 transition-all">
                <div className="flex items-center">
                  <item.icon className="text-green-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm mr-3 ${item.status === 'Available' ? 'text-green-400' : 'text-yellow-400'} font-medium`}>
                    {item.status}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded transition-colors font-medium ${
                      item.status === 'Available' 
                        ? 'bg-green-600 hover:bg-green-500 text-white' 
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
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

export default DownloadSection; 