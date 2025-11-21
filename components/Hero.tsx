import React from 'react';
import { SITE_DATA } from '../constants';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-200/40 via-neutral-50 to-neutral-50 dark:from-neutral-900/20 dark:via-neutral-950 dark:to-neutral-950 -z-10 transition-colors duration-300" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10 pointer-events-none mix-blend-overlay" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm shadow-sm dark:shadow-none">
          <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="text-green-500 mr-2">●</span>
            Available for hire
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
          {SITE_DATA.name}
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-mono mb-8 transition-colors duration-300">
          &gt; {SITE_DATA.role} <span className="animate-pulse text-neutral-900 dark:text-white">_</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="h-auto md:h-16 flex items-start justify-center">
          <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto text-lg leading-relaxed transition-colors duration-300">
            {SITE_DATA.tagline}
            <span className="animate-pulse text-neutral-900 dark:text-white ml-1">|</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-sm rounded-full transition-all duration-300 hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center gap-2 shadow-lg dark:shadow-none"
          >
            View Projects <ArrowRight size={16} />
          </a>

          <a
            href={SITE_DATA.resumeLink}
            className="w-full sm:w-auto px-8 py-3 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-700 hover:scale-105 flex items-center justify-center gap-2 bg-white dark:bg-transparent"
          >
            <Download size={16} /> Resume
          </a>

          <a
            href={`mailto:${SITE_DATA.email}`}
            className="w-full sm:w-auto px-8 py-3 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-700 hover:scale-105 flex items-center justify-center gap-2 bg-white dark:bg-transparent"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-600 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;