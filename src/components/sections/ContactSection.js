import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
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
        <a href="https://github.com/DeRen2021" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300">
          <Github className="mr-2" /> DeRen2021
        </a>
      </div>
    </section>
  );
};

export default ContactSection; 