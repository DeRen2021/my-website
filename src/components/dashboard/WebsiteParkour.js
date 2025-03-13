import React from 'react';
import { ExternalLink } from 'lucide-react';
import { websiteConfig } from '../../config/websites';

const WebsiteParkour = () => {
    const { websites } = websiteConfig;
  
    return (
      <section className="bg-gray-900 bg-opacity-90 p-6 rounded-lg relative border border-green-500 shadow-lg shadow-green-500/20" style={{height: '300px'}}>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-green-400">
          <ExternalLink className="mr-2" /> Website Parkour
        </h2>
        <div className="overflow-y-auto h-[calc(100%-3rem)] pr-1">
          <div className="space-y-4">
            {websites.map((site, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800 bg-opacity-90 p-4 rounded-lg border border-gray-700 hover:border-green-400 transition-all">
                <div className="flex items-center">
                  <site.icon className="text-green-400 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-white">{site.title}</h3>
                    <p className="text-sm text-gray-300">{site.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm mr-3 ${site.status === 'Live' ? 'text-green-400' : 'text-yellow-400'} font-medium`}>
                    {site.status}
                  </span>
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition-colors font-medium"
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

export default WebsiteParkour; 