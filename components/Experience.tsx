import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Timeline" subtitle="My professional journey and key milestones.">
      <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12 transition-colors duration-300">
        {EXPERIENCE_DATA.map((item) => (
          <div key={item.id} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-600 group-hover:bg-neutral-200 dark:group-hover:bg-white transition-colors shadow-sm" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white transition-colors duration-300">{item.role}</h3>
              <span className="text-sm font-mono text-neutral-500 dark:text-neutral-500">{item.period}</span>
            </div>
            
            <div className="text-base text-neutral-600 dark:text-neutral-400 font-medium mb-4 transition-colors duration-300">{item.company}</div>
            
            <ul className="space-y-2">
              {item.description.map((desc, i) => (
                <li key={i} className="text-neutral-600 dark:text-neutral-500 text-sm leading-relaxed list-disc ml-4 marker:text-neutral-400 dark:marker:text-neutral-700 transition-colors duration-300">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;