'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card } from '@/components/ui/Badge';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { education, previousStudies } from '@/lib/data';

export default function EducationPage() {
  return (
    <div className="bg-dark-bg">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Education" className="mb-12" />

        {/* Completed Education */}
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-text-primary mb-8">Completed Qualification</h2>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                date={`${edu.startDate} — ${edu.endDate || 'Present'}`}
                title={edu.institution}
                subtitle={edu.qualification}
                isLast={index === education.length - 1}
              />
            ))}
          </Timeline>
        </div>

        {/* Previous Studies */}
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-text-primary mb-8">Previous Studies</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="space-y-4">
                {previousStudies.map((study) => (
                  <div key={study.id} className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-h3 font-bold text-text-primary">
                          {study.institution}
                        </h3>
                        <p className="text-text-secondary mt-1">{study.qualification}</p>
                      </div>
                      <span className="px-3 py-1 bg-slate-700 text-slate-200 text-xs rounded-full font-medium whitespace-nowrap">
                        {study.status}
                      </span>
                    </div>
                    <p className="text-text-secondary text-small italic p-3 bg-dark-surface border border-dark-border rounded">
                      {study.note}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-dark-surface">
            <h3 className="text-h3 font-bold text-text-primary mb-4">Why It Matters to My Development</h3>
            <p className="text-text-secondary">
              My educational background—from secondary education through technology exploration at university—has built a foundation in computing fundamentals and sparked an ongoing interest in technology. While my university studies in Information Technology were not completed, this journey contributed significantly to my curiosity about systems, networks, and information security. This foundation continues to support my development toward a career in cybersecurity, where understanding how systems work is essential.
            </p>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
