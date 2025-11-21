import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 scroll-mt-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4 transition-colors duration-300">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg leading-relaxed transition-colors duration-300">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-neutral-200 dark:bg-neutral-800 mt-6 transition-colors duration-300" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;