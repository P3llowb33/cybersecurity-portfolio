'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '../ui/Badge';
import { ChevronRight } from 'lucide-react';

interface SkillDetailModalProps {
  skill: {
    name: string;
    description: string;
    status: string;
    relatedTraining?: string[];
    relatedProject?: string;
  };
  onClose: () => void;
}

export function SkillDetailModal({ skill, onClose }: SkillDetailModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-dark-card border border-dark-border rounded-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="border-0 shadow-none">
          <div className="space-y-4">
            <div>
              <h3 className="text-h3 font-bold text-text-primary">{skill.name}</h3>
              <span className="inline-block mt-2 px-3 py-1 bg-accent-blue/20 text-accent-blue text-sm rounded-full">
                {skill.status}
              </span>
            </div>

            <p className="text-text-secondary">{skill.description}</p>

            {skill.relatedTraining && skill.relatedTraining.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-text-primary mb-2">Related Training:</p>
                <ul className="space-y-1">
                  {skill.relatedTraining.map((training) => (
                    <li key={training} className="text-text-secondary text-sm flex items-center gap-2">
                      <ChevronRight size={16} className="text-accent-blue" />
                      {training}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!skill.relatedTraining || skill.relatedTraining.length === 0 ? (
              <p className="text-text-muted text-sm italic">Evidence not yet documented.</p>
            ) : null}

            <div className="pt-4 border-t border-dark-border flex gap-2">
              <Button variant="secondary" onClick={onClose} className="flex-1">
                Close
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
