'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    PLANNED: 'bg-slate-700 text-slate-100',
    'IN PROGRESS': 'bg-blue-900 text-accent-blue',
    COMPLETED: 'bg-green-900 text-green-300',
    CURRENT: 'bg-accent-blue text-dark-bg font-semibold',
    DEVELOPING: 'bg-blue-900 text-accent-blue',
    LEARNING: 'bg-purple-900 text-purple-300',
    EXPOSURE: 'bg-slate-700 text-slate-200',
    PRACTICAL: 'bg-green-900 text-green-300',
    'NOT COMPLETED': 'bg-slate-700 text-slate-200',
    'NOT VERIFIED': 'bg-slate-700 text-slate-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`inline-block rounded-full font-medium ${colors[status] || colors.PLANNED} ${sizeClasses[size]}`}>
      {status}
    </span>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-dark-card border border-dark-border rounded-lg p-6
        ${hover ? 'hover:shadow-card-hover hover:border-accent-blue/30 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className="text-h2 font-display font-bold text-text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-text-secondary">{subtitle}</p>}
    </motion.div>
  );
}

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-dark-bg';

  const variants = {
    primary:
      'bg-accent-blue text-dark-bg hover:bg-accent-blue-dim hover:shadow-glow active:scale-95',
    secondary:
      'bg-dark-card border border-dark-border text-text-primary hover:border-accent-blue hover:text-accent-blue active:scale-95',
    ghost: 'text-accent-blue hover:text-accent-blue-dim hover:bg-dark-card/50 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const target = external ? '_blank' : undefined;
    const rel = external ? 'noopener noreferrer' : undefined;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
}

export function GlassContainer({ children, className = '' }: GlassContainerProps) {
  return (
    <div className={`backdrop-blur-xs bg-white/5 border border-white/10 rounded-xl ${className}`}>
      {children}
    </div>
  );
}
