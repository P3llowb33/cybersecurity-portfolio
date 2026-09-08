'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge } from '@/components/ui/Badge';
import { securityByDesign } from '@/lib/data';

export default function SecurityByDesignPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-dark-bg">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Security by Design"
          subtitle="This portfolio itself demonstrates security awareness and best practices"
          className="mb-12"
        />

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <h2 className="text-h2 font-bold text-text-primary mb-4">Philosophy</h2>
            <p className="text-text-secondary mb-4">
              Building a professional cybersecurity portfolio requires practicing security principles throughout the project itself. This portfolio implements security controls across multiple layers: communication, data handling, access control, and privacy.
            </p>
            <p className="text-text-secondary">
              Rather than simply claiming security awareness, this site demonstrates it through architecture, design decisions, and technical implementation.
            </p>
          </Card>
        </motion.div>

        {/* Security Controls */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {securityByDesign.map((control) => (
            <motion.div key={control.id} variants={itemVariants}>
              <Card hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary text-lg">{control.control}</h3>
                      <p className="text-text-secondary text-small mt-1">{control.purpose}</p>
                    </div>
                    <StatusBadge status={control.status} size="sm" />
                  </div>
                  <p className="text-text-secondary text-small italic">{control.explanation}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Explanations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Encryption in Transit (HTTPS)</h3>
            <p className="text-text-secondary mb-3">
              All connections use HTTPS with modern TLS protocols. This protects all communication between your browser and the server from interception.
            </p>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>

          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">HTTP Security Headers</h3>
            <p className="text-text-secondary mb-3">
              Configured headers protect against common web vulnerabilities:
            </p>
            <ul className="text-text-secondary text-small space-y-1 list-disc list-inside mb-3">
              <li>X-Content-Type-Options: Prevents MIME-type sniffing</li>
              <li>X-Frame-Options: Prevents clickjacking attacks</li>
              <li>X-XSS-Protection: Additional XSS protection</li>
              <li>Referrer-Policy: Controls referrer information</li>
            </ul>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>

          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Minimal Dependencies</h3>
            <p className="text-text-secondary mb-3">
              Only essential, well-maintained libraries are included. This reduces the attack surface and supply chain risk.
            </p>
            <p className="text-text-secondary text-small mb-3">
              <strong>Current dependencies:</strong> Next.js, React, Framer Motion, Lucide Icons
            </p>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>

          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Input Validation</h3>
            <p className="text-text-secondary mb-3">
              All user inputs are validated and sanitized on the client side to prevent injection attacks and malformed data processing.
            </p>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>

          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Privacy & Data Protection</h3>
            <p className="text-text-secondary mb-3">
              No tracking, no analytics cookies, no third-party integrations. Only necessary contact information is displayed. This portfolio respects visitor privacy.
            </p>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>

          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Accessibility Standards</h3>
            <p className="text-text-secondary mb-3">
              WCAG 2.1 AA compliance ensures inclusive access:
            </p>
            <ul className="text-text-secondary text-small space-y-1 list-disc list-inside mb-3">
              <li>Semantic HTML structure</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Strong color contrast ratios</li>
              <li>Respects prefers-reduced-motion</li>
            </ul>
            <p className="text-text-muted text-small"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>
        </motion.div>

        {/* Performance & Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">Performance & DoS Mitigation</h3>
            <p className="text-text-secondary mb-3">
              Optimized assets, efficient code, and minimal dependencies reduce the attack surface and improve resilience:
            </p>
            <ul className="text-text-secondary text-small space-y-1 list-disc list-inside">
              <li>Static site generation where possible</li>
              <li>Lazy loading of heavy components</li>
              <li>Minimal JavaScript payload</li>
              <li>Efficient animation and transitions</li>
              <li>Optimized images and assets</li>
            </ul>
            <p className="text-text-muted text-small mt-3"><strong>Status:</strong> IMPLEMENTED</p>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
