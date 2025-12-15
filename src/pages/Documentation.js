import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, BookOpen, ExternalLink
} from 'lucide-react';

const Documentation = () => {
  // Updated: Both sections now use 'cyan' to match the About Us page theme
  const sections = [
    {
      title: "Research Paper",
      description: "Read the full research paper on MED-Net architecture, methodology, and experimental results.",
      icon: BookOpen,
      url: process.env.REACT_APP_RESEARCH_PAPER_URL,
      color: "cyan"
    },
    {
      title: "Project Report",
      description: "Access the comprehensive project report detailing implementation, system design, and analysis.",
      icon: FileText,
      url: process.env.REACT_APP_PROJECT_REPORT_URL,
      color: "cyan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col justify-center bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Documentation
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Access the technical resources and detailed reports for the MED-Net Anomaly Detection System.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(section.url, '_blank')}
              className="relative overflow-hidden p-10 rounded-2xl border cursor-pointer group transition-all duration-300
                bg-white dark:bg-white/5 backdrop-blur-md shadow-xl dark:shadow-none
                border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400/50"
            >
              {/* Background Glow Effect (Subtle) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl rounded-full -mr-10 -mt-10 transition-all group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20" />

              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                
                {/* Icon Circle - Matching 'About Us' Style (Solid Teal with White Icon) */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-cyan-500 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="w-10 h-10 text-white" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                    {section.description}
                  </p>
                </div>

                {/* Button Visual */}
                <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  <span>Open Document</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Documentation;