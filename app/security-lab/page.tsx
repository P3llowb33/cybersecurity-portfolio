'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge } from '@/components/ui/Badge';
import { labs } from '@/lib/data';

export default function SecurityLabPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['NETWORKING', 'SOC', 'THREAT DETECTION', 'SECURITY AWARENESS', 'AUTOMATION', 'SYSTEMS'];

  const filteredLabs = selectedCategory
    ? labs.filter((lab) => lab.category === selectedCategory)
    : labs;

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
          title="Cybersecurity Lab"
          subtitle="BUILDING • INVESTIGATING • DOCUMENTING • LEARNING"
          className="mb-12"
        />

        {/* Building in Public */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-dark-surface border-l-4 border-accent-blue">
            <h2 className="text-h2 font-bold text-accent-blue mb-3">Building in Public</h2>
            <p className="text-text-secondary mb-4">
              This lab evolves as I develop practical cybersecurity skills. Completed work will be documented with evidence, repositories, screenshots, reports and lessons learned.
            </p>
            <p className="text-text-muted text-small italic">
              No fabricated results. No invented findings. Only genuine cybersecurity work, documented as it develops.
            </p>
          </Card>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-12">
          <p className="text-text-secondary text-small font-semibold mb-4">Filter by category:</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-small font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-accent-blue text-dark-bg'
                  : 'bg-dark-card text-text-secondary hover:text-text-primary'
              }`}
            >
              All Labs
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-small font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-blue text-dark-bg'
                    : 'bg-dark-card text-text-secondary hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Labs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {filteredLabs.map((lab) => (
            <motion.div key={lab.id} variants={itemVariants}>
              <Card hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-h3 font-bold text-text-primary flex-1">{lab.title}</h3>
                    <StatusBadge status={lab.status} size="sm" />
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-text-muted text-xs font-semibold mb-1">OBJECTIVE</p>
                      <p className="text-text-secondary text-sm">{lab.objective}</p>
                    </div>

                    <div>
                      <p className="text-text-muted text-xs font-semibold mb-1">TOOLS</p>
                      <div className="flex flex-wrap gap-1">
                        {lab.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-dark-surface border border-dark-border rounded text-xs text-text-secondary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-text-muted text-xs font-semibold mb-1">SKILLS</p>
                      <div className="flex flex-wrap gap-1">
                        {lab.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-accent-blue/10 text-accent-blue rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No labs found in this category yet.</p>
          </div>
        )}

        {/* Progression Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface">
            <h2 className="text-h2 font-bold text-text-primary mb-6">Lab Progression</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary text-small">Planned Labs</span>
                  <span className="font-semibold text-accent-blue">
                    {labs.filter((l) => l.status === 'PLANNED').length} / {labs.length}
                  </span>
                </div>
                <div className="w-full bg-dark-card rounded-full h-2">
                  <div
                    className="bg-slate-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${(labs.filter((l) => l.status === 'PLANNED').length / labs.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary text-small">In Progress</span>
                  <span className="font-semibold text-blue-400">
                    {labs.filter((l) => l.status === 'IN PROGRESS').length} / {labs.length}
                  </span>
                </div>
                <div className="w-full bg-dark-card rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${(labs.filter((l) => l.status === 'IN PROGRESS').length / labs.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary text-small">Completed</span>
                  <span className="font-semibold text-green-400">
                    {labs.filter((l) => l.status === 'COMPLETED').length} / {labs.length}
                  </span>
                </div>
                <div className="w-full bg-dark-card rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${(labs.filter((l) => l.status === 'COMPLETED').length / labs.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
