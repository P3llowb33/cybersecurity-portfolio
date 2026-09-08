'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge } from '@/components/ui/Badge';
import { SkillDetailModal } from '@/components/interactive/SkillModal';
import { skills } from '@/lib/data';

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skillCategories = [
    { key: 'networking', label: 'Networking' },
    { key: 'cybersecurity', label: 'Cybersecurity Foundations' },
    { key: 'systems', label: 'IT & Systems' },
    { key: 'monitoring', label: 'Security Monitoring' },
    { key: 'tools', label: 'Tools' },
  ];

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
          title="Technical Skills"
          subtitle="Evidence-based skill development with clear status indicators"
          className="mb-12"
        />

        {/* Current Skills by Category */}
        {skillCategories.map(({ key, label }) => (
          <motion.div key={key} className="mb-16">
            <h2 className="text-h2 font-bold text-text-primary mb-8">{label}</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skills[key as keyof typeof skills]?.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants}>
                  <button
                    onClick={() => setSelectedSkill(skill)}
                    className="w-full text-left"
                  >
                    <Card hover>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-text-primary flex-1 hover:text-accent-blue transition-colors">
                            {skill.name}
                          </h3>
                          <StatusBadge status={skill.status} size="sm" />
                        </div>
                        <p className="text-text-secondary text-small">{skill.description}</p>
                      </div>
                    </Card>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Future Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-h2 font-bold text-text-primary mb-8">Future Development</h2>
          <Card className="bg-dark-surface">
            <p className="text-text-secondary mb-6">
              The following areas represent planned skill development and learning goals. These are not current expertise but areas of focused study moving forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.futureAreas.map((area) => (
                <div
                  key={area.name}
                  className="p-3 bg-dark-card border border-dark-border rounded"
                >
                  <p className="font-semibold text-accent-blue">{area.name}</p>
                  <p className="text-text-muted text-small mt-1">{area.focus}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Status Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-text-primary mb-4">Skill Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { status: 'EXPOSURE', desc: 'Basic awareness' },
                { status: 'LEARNING', desc: 'Active learning' },
                { status: 'DEVELOPING', desc: 'Building proficiency' },
                { status: 'PRACTICAL', desc: 'Applied experience' },
                { status: 'DOCUMENTED', desc: 'Evidence available' },
              ].map((item) => (
                <div key={item.status} className="text-center">
                  <StatusBadge status={item.status} size="sm" />
                  <p className="text-text-muted text-xs mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <SkillDetailModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </div>
  );
}
