import React from 'react';
import { SITE_DATA } from '../constants';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-neutral-900 dark:text-white font-bold text-lg transition-colors duration-300">{SITE_DATA.name}</p>
          <p className="text-neutral-500 dark:text-neutral-600 text-sm mt-1 transition-colors duration-300">© {new Date().getFullYear()}</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={SITE_DATA.social.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors" 
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={SITE_DATA.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors" 
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;