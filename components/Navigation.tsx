'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig } from '@/lib/config';
import { Button } from './Badge';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-accent-blue text-xl hover:text-accent-blue-dim transition-colors">
            TM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationConfig.primary.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-accent-blue bg-dark-card'
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-card/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Secondary & CV */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="px-2 py-1 text-sm text-text-secondary hover:text-text-primary transition-colors relative group">
              More
              <div className="absolute right-0 mt-0 w-40 bg-dark-card border border-dark-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                {navigationConfig.secondary.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </button>
            <Button href={navigationConfig.cvUrl} variant="primary" size="sm" external>
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-accent-blue hover:bg-dark-card rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-dark-border"
            >
              <div className="px-2 py-4 space-y-1">
                {navigationConfig.primary.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-accent-blue bg-dark-card'
                        : 'text-text-secondary hover:text-text-primary hover:bg-dark-card/50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {navigationConfig.secondary.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-dark-border mt-2">
                  <Button href={navigationConfig.cvUrl} variant="primary" size="md" external className="w-full">
                    Download CV
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
