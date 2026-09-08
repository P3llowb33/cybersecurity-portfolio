'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge, Button } from '@/components/ui/Badge';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-dark-bg">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Projects & Case Studies"
          subtitle="Technical research and practical cybersecurity development"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <Card hover>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-h3 font-bold text-text-primary hover:text-accent-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-small mt-1">{project.category}</p>
                      </div>
                      <StatusBadge status={project.status} size="sm" />
                    </div>

                    <p className="text-text-secondary">{project.objective}</p>

                    <div>
                      <p className="text-text-muted text-small font-semibold mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-surface border border-dark-border rounded text-text-secondary text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center text-accent-blue text-small font-semibold">
                      View Case Study <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* About These Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-text-primary mb-4">About These Projects</h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                These projects represent active cybersecurity research and hands-on development. Each project is presented with its current status: <strong>PLANNED</strong>, <strong>IN PROGRESS</strong>, or <strong>COMPLETED</strong>.
              </p>
              <p>
                Rather than presenting incomplete work as finished, these case studies emphasize methodology, learning objectives, and development process. Each project will be updated with evidence, findings, and lessons learned as work progresses.
              </p>
              <p className="italic">
                No findings are invented. No screenshots are fabricated. No results are exaggerated. This portfolio grows with genuine cybersecurity development.
              </p>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
