'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge, Button, Expandable } from '@/components/ui/Badge';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-dark-bg">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-dim mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-h1 font-bold text-text-primary mb-2">{project.title}</h1>
              <p className="text-text-secondary text-lg">{project.category}</p>
            </div>
            <StatusBadge status={project.status} size="lg" />
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <h2 className="text-h2 font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-secondary text-lg">{project.description}</p>
          </Card>
        </motion.div>

        {/* Objective & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Objective</h2>
              <p className="text-text-secondary">{project.objective}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Approach</h2>
              <p className="text-text-secondary">
                This project follows a structured methodology:
              </p>
              <ol className="text-text-secondary text-small space-y-2 mt-3 list-decimal list-inside">
                <li>Define clear objectives and scope</li>
                <li>Establish testing environment</li>
                <li>Conduct systematic investigation</li>
                <li>Document findings and observations</li>
                <li>Extract lessons and recommendations</li>
              </ol>
            </Card>
          </motion.div>
        </div>

        {/* Technologies & Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-dark-surface border border-dark-border rounded text-text-secondary text-small"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="text-h2 font-bold text-text-primary mb-4">Security Concepts</h2>
              <div className="flex flex-wrap gap-2">
                {project.concepts.map((concept) => (
                  <span
                    key={concept}
                    className="px-3 py-1.5 bg-accent-blue/20 text-accent-blue rounded text-small"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Project Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <Expandable title="Environment" defaultOpen={true}>
            <p className="text-text-secondary">
              Documentation will be added as the project progresses. This section will describe the testing environment, tools, and infrastructure used.
            </p>
          </Expandable>

          <Expandable title="Investigation">
            <p className="text-text-secondary">
              Investigation details and methodology will be documented as work progresses. This will include the steps taken, observations, and analysis approach.
            </p>
          </Expandable>

          <Expandable title="Findings">
            <p className="text-text-secondary">
              Key findings will be added upon project completion. No findings are invented or speculated here—only genuine results from hands-on work will be documented.
            </p>
          </Expandable>

          <Expandable title="Evidence">
            <p className="text-text-secondary">
              Supporting evidence including screenshots, logs, reports, and GitHub repository links will be added as the project reaches completion stages.
            </p>
          </Expandable>

          <Expandable title="Lessons Learned">
            <p className="text-text-secondary">
              Key insights, best practices, and lessons from this project will be documented upon completion.
            </p>
          </Expandable>

          <Expandable title="Future Improvements">
            <p className="text-text-secondary">
              Planned enhancements and next steps for this project will be outlined as the work progresses.
            </p>
          </Expandable>
        </motion.div>

        {/* Status Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface border-l-4 border-accent-blue">
            <h3 className="text-h3 font-bold text-accent-blue mb-2">Project Status: {project.status}</h3>
            <p className="text-text-secondary text-small">
              {project.status === 'PLANNED'
                ? 'This project is in the planning phase. Development will begin as resources and scope are finalized.'
                : project.status === 'IN PROGRESS'
                ? 'Active development in progress. Documentation is being added as work advances.'
                : 'Project completed. Full documentation, evidence, and findings are available above.'}
            </p>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
