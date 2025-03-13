import React, { useState, useEffect, useRef, useMemo } from 'react';

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
      // 检查是否是命令行提示符
      if (line.startsWith('>')) {
        return <div className="text-green-500 font-bold my-1">{line}</div>;
      }
      
      // 检查是否是命令回显（如 "Switching to..."）
      if (line.startsWith('Switching to')) {
        return <div className="text-blue-400 font-semibold my-1 ml-2">{line}</div>;
      }
      
      // 检查是否是标题行（如 "Available commands:"）
      if (line === 'Available commands:') {
        return <div className="text-yellow-300 font-bold mt-2 mb-1">{line}</div>;
      }
      
      // 检查是否是可点击命令
      if (commands.includes(line.trim().toLowerCase())) {
        return (
          <button
            onClick={() => handleCommandClick(line.trim())}
            className="text-green-400 hover:text-green-200 hover:underline focus:outline-none bg-transparent border-none cursor-pointer w-full text-left font-medium"
          >
            {line}
          </button>
        );
      }
      
      // 检查是否是命令说明（如 "about - About me"）
      if (line.includes(' - ')) {
        const [cmd, desc] = line.split(' - ');
        return (
          <div className="ml-4 my-1 flex">
            <span className="text-green-500 font-bold mr-2 w-24">{cmd}</span>
            <span className="text-gray-300">{desc}</span>
          </div>
        );
      }
      
      // 未识别命令消息
      if (line.includes('Command not recognized')) {
        return <div className="text-red-400 my-1">{line}</div>;
      }
      
      // 默认输出
      return <div className="text-green-300 my-1">{line}</div>;
    };
  
    return (
      <div className="bg-black bg-opacity-95 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto border-2 border-green-500 shadow-lg shadow-green-500/30">
        <div className="space-y-1">
          {output.map((line, i) => (
            <div key={i}>{renderOutputLine(line)}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
          <div className="flex">
            <span className="mr-2 text-green-500 font-bold">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-grow text-white"
              autoFocus
            />
          </div>
          {suggestions.length > 0 && (
            <div className="flex mt-2 space-x-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-2 py-1 bg-gray-800 rounded hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 border border-green-400"
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

export default InteractiveTerminal; 