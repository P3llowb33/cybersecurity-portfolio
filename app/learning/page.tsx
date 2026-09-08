'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge } from '@/components/ui/Badge';
import { learningJourney } from '@/lib/data';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';

export default function LearningPage() {
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Cybersecurity Learning Journey"
          subtitle="Progression from IT foundations toward security specialization"
          className="mb-12"
        />

        {/* Journey Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <p className="text-text-secondary">
              This learning journey documents genuine development from IT foundations through cybersecurity fundamentals toward practical security monitoring and threat detection. Each milestone represents actual training, study, or completed work.
            </p>
          </Card>
        </motion.div>

        {/* Timeline */}
        <Timeline>
          {learningJourney.map((milestone, index) => (
            <TimelineItem
              key={milestone.year}
              date={milestone.year}
              title={milestone.phase}
              subtitle={milestone.milestone}
              isLast={index === learningJourney.length - 1}
            >
              <div className="flex items-center gap-2">
                <StatusBadge status={milestone.status} size="sm" />
              </div>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Phase Descriptions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Foundation Phase</h3>
              <p className="text-text-secondary text-small">
                Secondary education provided foundational IT literacy and systems thinking. This phase established the basics required for further technical study.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Technology Exploration</h3>
              <p className="text-text-secondary text-small">
                Introduction to IoT concepts through Cisco Networking Academy, broadening understanding of connected systems and networking principles.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Cybersecurity Fundamentals</h3>
              <p className="text-text-secondary text-small">
                Cisco Introduction to Cybersecurity (2023-2026) provides structured learning in defensive security, threat analysis, and security principles.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Current Development</h3>
              <p className="text-text-secondary text-small">
                CAPACITI AI Development Programme provides exposure to emerging technology. Parallel lab work in networking and SOC monitoring in progress.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Practical Labs</h3>
              <p className="text-text-secondary text-small">
                Hands-on work in network security, SOC monitoring, and threat analysis. Building real experience through documented lab work.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <h3 className="text-h3 font-bold text-text-primary mb-3">Specialization Path</h3>
              <p className="text-text-secondary text-small">
                Future focus on threat detection, incident response, and security monitoring. Building toward Junior Cybersecurity Analyst / SOC roles.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-text-primary mb-4">Learning Philosophy</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent-blue mt-1">→</span>
                <span>Evidence-based: Only document work with genuine supporting evidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue mt-1">→</span>
                <span>Continuous growth: Learning is ongoing; incomplete work is documented as such</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue mt-1">→</span>
                <span>Practical focus: Hands-on labs and real investigation over theory alone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue mt-1">→</span>
                <span>Structured progression: Clear path from fundamentals toward specialization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-blue mt-1">→</span>
                <span>Professional development: Focus on skills relevant to Junior Cybersecurity roles</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
