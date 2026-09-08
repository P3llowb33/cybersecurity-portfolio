'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card, StatusBadge } from '@/components/ui/Badge';
import { training } from '@/lib/data';

export default function TrainingPage() {
  const categorizedTraining = training.reduce(
    (acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, typeof training>
  );

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
          title="Training & Development"
          subtitle="Structured learning and professional development"
          className="mb-12"
        />

        {Object.entries(categorizedTraining).map(([category, items]) => (
          <motion.div key={category} className="mb-16">
            <h2 className="text-h2 font-bold text-text-primary mb-8">{category}</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {items.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card hover>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-text-primary">{item.course}</h3>
                          <p className="text-text-secondary text-small mt-1">{item.provider}</p>
                        </div>
                        <StatusBadge status={item.status} size="sm" />
                      </div>

                      {(item.startDate || item.endDate) && (
                        <p className="text-text-muted text-small">
                          {item.startDate}
                          {item.endDate && item.startDate && ' — '}
                          {item.endDate}
                        </p>
                      )}

                      {item.note && (
                        <p className="text-text-secondary text-small italic p-2 bg-dark-surface rounded border border-dark-border">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface border-l-4 border-accent-blue">
            <h3 className="text-h3 font-bold text-accent-blue mb-3">About This Training</h3>
            <p className="text-text-secondary text-small">
              <strong>Cisco Networking Academy courses</strong> are presented as ongoing training and coursework. Formal certification status is verified through official channels.
              <br />
              <br />
              <strong>CAPACITI programme</strong> is presented as current technology development, not as a cybersecurity certification.
              <br />
              <br />
              <strong>Truworths training</strong> includes professional and compliance training relevant to retail operations and customer service.
              <br />
              <br />
              All training listed here represents genuine professional development without fabricated credentials or unsupported claims.
            </p>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
