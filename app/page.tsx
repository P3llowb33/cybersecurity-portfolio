'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Button, Card } from '@/components/ui/Badge';
import { NetworkTopology } from '@/components/interactive/NetworkTopology';
import { AttackDetectRespond } from '@/components/interactive/AttackDetectRespond';
import { candidateData, projects } from '@/lib/data';
import { navigationConfig } from '@/lib/config';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
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

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-display font-display font-bold text-text-primary mb-4">
            Thapelo Moalosi
          </h1>
          <p className="text-h2 font-display font-semibold text-accent-blue mb-3">
            Junior Cybersecurity Analyst
          </p>
          <p className="text-h3 text-text-secondary mb-6">
            Networking • Defensive Security • Security Monitoring
          </p>
          <p className="text-body text-text-secondary max-w-2xl mx-auto mb-8">
            {candidateData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button href="/projects" variant="primary" size="lg">
              View Projects <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button href={navigationConfig.cvUrl} variant="secondary" size="lg" external>
              Download CV
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button
              href={candidateData.github}
              variant="ghost"
              size="md"
              external
              className="inline-flex"
            >
              <Github size={20} />
            </Button>
            <Button
              href={candidateData.linkedin}
              variant="ghost"
              size="md"
              external
              className="inline-flex"
            >
              <Linkedin size={20} />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Simulated Security Environment */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-dark-border">
        <SectionTitle
          title="Security Environment"
          subtitle="Simulated topology for educational purposes"
          className="mb-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <NetworkTopology />
          </Card>
        </motion.div>
      </section>

      {/* Currently Focused On */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Currently Focused On" className="mb-12" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {candidateData.coreAreas.map((area) => (
            <motion.div key={area} variants={itemVariants}>
              <Card hover>
                <p className="font-semibold text-accent-blue text-lg">{area}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-dark-border">
        <SectionTitle
          title="Featured Projects"
          subtitle="Active cybersecurity research and development"
          className="mb-12"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <Card hover>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-text-primary text-lg flex-1">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">{project.objective}</p>
                    <div className="pt-2 flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-dark-surface rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <Button href="/projects" variant="secondary" size="md">
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* How I Think */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Security Analysis Methodology" className="mb-12" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {['Understand', 'Identify', 'Investigate', 'Respond', 'Learn'].map(
            (step, index) => (
              <motion.div key={step} variants={itemVariants}>
                <Card hover className="text-center h-full flex flex-col justify-center">
                  <div className="text-3xl font-bold text-accent-blue mb-2">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-text-primary">{step}</p>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      {/* Attack → Detect → Respond Interactive */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-dark-border">
        <SectionTitle
          title="Interactive Scenario: Attack → Detect → Respond"
          subtitle="Simulated cybersecurity incident response exercise"
          className="mb-12"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AttackDetectRespond />
        </motion.div>
      </section>

      {/* Cybersecurity Development Status */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Development Journey"
          subtitle="Progression through cybersecurity fundamentals"
          className="mb-12"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card hover>
              <h3 className="text-h3 font-bold text-accent-blue mb-2">Foundation</h3>
              <p className="text-text-secondary text-sm">Networking fundamentals and IT systems</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card hover>
              <h3 className="text-h3 font-bold text-accent-blue mb-2">Core Skills</h3>
              <p className="text-text-secondary text-sm">Cybersecurity concepts and security monitoring</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card hover>
              <h3 className="text-h3 font-bold text-accent-blue mb-2">Practical Labs</h3>
              <p className="text-text-secondary text-sm">Hands-on development and investigation</p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Recruiter CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-y border-dark-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-4">
            Comprehensive Background Review
          </h2>
          <p className="text-text-secondary text-body mb-8 max-w-2xl mx-auto">
            Review my professional background, technical development, projects, and experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/recruiter" variant="primary" size="lg">
              View Recruiter Profile
            </Button>
            <Button href={navigationConfig.cvUrl} variant="secondary" size="lg" external>
              Download CV
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-4">Get in Touch</h2>
          <p className="text-text-secondary text-body mb-8">
            Interested in cybersecurity collaboration or opportunities?
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Me <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
