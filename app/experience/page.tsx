'use client';

import { motion } from 'framer-motion';
import { SectionTitle, Card } from '@/components/ui/Badge';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { experience } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <div className="bg-dark-bg">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Professional Experience"
          subtitle="Experience that has developed my reliability, attention to detail, responsibility and problem-solving abilities."
          className="mb-12"
        />

        <Timeline>
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              date={`${exp.startDate} — ${exp.endDate}`}
              title={exp.company}
              subtitle={`${exp.position} • ${exp.location}`}
              isLast={index === experience.length - 1}
            >
              <div className="space-y-4">
                {exp.subtitle && (
                  <p className="text-accent-blue text-small font-semibold">{exp.subtitle}</p>
                )}

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-text-secondary text-small flex items-start gap-2">
                        <span className="text-accent-blue mt-1">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Transferable Strengths */}
                {exp.transferableStrengths && (
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Transferable Strengths</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.transferableStrengths.map((strength) => (
                        <div
                          key={strength}
                          className="px-3 py-2 bg-dark-surface border border-dark-border rounded text-text-secondary text-small"
                        >
                          {strength}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                {exp.disclaimer && (
                  <div className="p-3 bg-dark-surface border-l-2 border-accent-blue rounded">
                    <p className="text-text-secondary text-small italic">{exp.disclaimer}</p>
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </div>
  );
}
