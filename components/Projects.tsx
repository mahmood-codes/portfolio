import React from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Deployments" subtitle="Real-world labs and projects demonstrating infrastructure capabilities.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm dark:shadow-none"
          >
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <FolderGit2 className="text-neutral-400 dark:text-neutral-600" size={24} />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a 
                href={project.repoLink}
                className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                <Github size={16} />
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;