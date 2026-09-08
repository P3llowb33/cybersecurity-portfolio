'use client';

import { candidateData, navigationConfig } from '@/lib/data';
import { Button } from './ui/Badge';
import { Github, Mail, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-text-primary mb-3">Thapelo Moalosi</h3>
            <p className="text-text-secondary text-small">{candidateData.title}</p>
            <p className="text-text-muted text-small mt-2">{candidateData.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Navigation</h4>
            <ul className="space-y-2">
              {navigationConfig.primary.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-text-secondary text-small hover:text-accent-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">More</h4>
            <ul className="space-y-2">
              {navigationConfig.secondary.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-text-secondary text-small hover:text-accent-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${candidateData.email}`}
                  className="text-text-secondary text-small hover:text-accent-blue transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${candidateData.phone.replace(/\s/g, '')}`}
                  className="text-text-secondary text-small hover:text-accent-blue transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={candidateData.github}
                  className="text-text-secondary text-small hover:text-accent-blue transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={candidateData.linkedin}
                  className="text-text-secondary text-small hover:text-accent-blue transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-small">
            © {currentYear} Thapelo Moalosi. All rights reserved.
          </p>
          <Button href={navigationConfig.cvUrl} variant="secondary" size="sm" external>
            Download CV
          </Button>
        </div>
      </div>
    </footer>
  );
}
