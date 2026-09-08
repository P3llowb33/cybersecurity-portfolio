'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ date, title, subtitle, children, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pb-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-accent-blue rounded-full ring-4 ring-dark-bg" />

      {/* Timeline line */}
      {!isLast && <div className="absolute left-1.5 top-6 w-0.5 h-full bg-dark-border" />}

      {/* Content */}
      <div className="ml-8">
        <p className="text-accent-blue text-small font-semibold">{date}</p>
        <h3 className="text-h3 font-bold text-text-primary mt-1">{title}</h3>
        {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
        {children && <div className="mt-4 text-text-secondary">{children}</div>}
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return <div className="relative">{children}</div>;
}
