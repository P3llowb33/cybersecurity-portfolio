'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Expandable({ title, children, defaultOpen = false }: ExpandableProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div className="border border-dark-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-dark-card hover:bg-dark-card/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text-primary">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-accent-blue" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-3 bg-dark-surface border-t border-dark-border text-text-secondary"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
