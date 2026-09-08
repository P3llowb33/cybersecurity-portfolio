'use client';

import { motion } from 'framer-motion';

export function NetworkTopology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const nodes = [
    { label: 'Internet', icon: '🌐' },
    { label: 'Firewall', icon: '🛡️' },
    { label: 'Router', icon: '📡' },
    { label: 'Switch', icon: '🔌' },
    { label: 'Workstations', icon: '💻' },
    { label: 'Server', icon: '🖥️' },
    { label: 'SIEM', icon: '📊' },
  ];

  return (
    <div className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {nodes.map((node, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-dark-card border border-accent-blue/30 rounded-lg flex items-center justify-center text-xl">
                {node.icon}
              </div>
              <div>
                <p className="font-semibold text-text-primary">{node.label}</p>
              </div>
              {index < nodes.length - 1 && (
                <div className="ml-auto text-accent-blue text-sm">↓</div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-text-muted text-small mt-6 p-3 bg-dark-card border border-dark-border rounded-lg">
        <strong>Label:</strong> SIMULATED SECURITY ENVIRONMENT - This is a fictional topology for educational purposes.
      </p>
    </div>
  );
}
