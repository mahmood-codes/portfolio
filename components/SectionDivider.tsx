import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center py-0" aria-hidden="true">
      <div className="relative w-full max-w-6xl px-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent transition-colors duration-300" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rotate-45 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default SectionDivider;