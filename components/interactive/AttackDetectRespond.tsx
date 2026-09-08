'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button } from '../ui/Badge';

export function AttackDetectRespond() {
  const [phase, setPhase] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const phases = [
    {
      title: 'PHASE 01: EVENT',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            A workstation has generated multiple failed authentication attempts in the past 5 minutes.
          </p>
          <div className="bg-dark-surface p-4 rounded border border-accent-blue/20">
            <p className="font-mono text-sm text-accent-blue">
              [14:32:15] Authentication Failed: User@CORP from 192.168.1.105<br />
              [14:32:42] Authentication Failed: User@CORP from 192.168.1.105<br />
              [14:33:09] Authentication Failed: User@CORP from 192.168.1.105<br />
              [14:33:28] Authentication Failed: Admin from 192.168.1.105
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'PHASE 02: DETECTION',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">What suspicious indicators do you notice?</p>
          <div className="space-y-2">
            <div className="p-3 bg-dark-surface border-l-2 border-accent-blue rounded">
              <p className="text-accent-blue text-sm font-semibold">Multiple failed attempts</p>
              <p className="text-text-muted text-xs mt-1">4 failures in ~1 minute suggests credential stuffing or brute force</p>
            </div>
            <div className="p-3 bg-dark-surface border-l-2 border-accent-blue rounded">
              <p className="text-accent-blue text-sm font-semibold">User escalation</p>
              <p className="text-text-muted text-xs mt-1">Attempt to use 'Admin' account suggests privilege escalation goal</p>
            </div>
            <div className="p-3 bg-dark-surface border-l-2 border-accent-blue rounded">
              <p className="text-accent-blue text-sm font-semibold">Same source IP</p>
              <p className="text-text-muted text-xs mt-1">All attempts from 192.168.1.105 - either compromised workstation or internal threat</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'PHASE 03: INVESTIGATION',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">Timeline of suspicious activity:</p>
          <div className="space-y-2 text-small">
            <p><span className="text-accent-blue">14:31:50</span> - Workstation 105 connects to network</p>
            <p><span className="text-accent-blue">14:32:15</span> - First failed auth attempt</p>
            <p><span className="text-accent-blue">14:32:42</span> - Second attempt (27 sec interval)</p>
            <p><span className="text-accent-blue">14:33:09</span> - Third attempt (27 sec interval)</p>
            <p><span className="text-accent-blue">14:33:28</span> - Fourth attempt, different user account</p>
            <p><span className="text-accent-blue text-xs mt-2">Observation:</span> Rapid, automated pattern suggests brute force tool</p>
          </div>
        </div>
      ),
    },
    {
      title: 'PHASE 04: ANALYSIS',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">Threat assessment:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-dark-surface rounded">
              <p className="font-semibold text-red-400 text-sm">Severity: HIGH</p>
              <p className="text-text-muted text-xs mt-1">Active credential attack in progress</p>
            </div>
            <div className="p-3 bg-dark-surface rounded">
              <p className="font-semibold text-orange-400 text-sm">Type: Brute Force</p>
              <p className="text-text-muted text-xs mt-1">Automated attack attempting multiple credentials</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'PHASE 05: RESPONSE',
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary mb-4">Choose an appropriate response action:</p>
          <div className="space-y-3">
            {[
              {
                action: 'isolate',
                title: 'Isolate Endpoint',
                reasoning: 'Immediately disconnect from network to prevent further attempts',
              },
              {
                action: 'reset',
                title: 'Reset Credentials',
                reasoning: 'Force password reset for all affected user accounts',
              },
              {
                action: 'block',
                title: 'Block Source IP',
                reasoning: 'Configure firewall to block 192.168.1.105 at network level',
              },
              {
                action: 'monitor',
                title: 'Continue Monitoring',
                reasoning: 'Increase logging and alerts for this workstation and users',
              },
            ].map((option) => (
              <button
                key={option.action}
                onClick={() => setSelectedResponse(option.action)}
                className={`w-full text-left p-3 rounded border-2 transition-all ${
                  selectedResponse === option.action
                    ? 'border-accent-blue bg-accent-blue/10'
                    : 'border-dark-border hover:border-accent-blue/50 bg-dark-surface'
                }`}
              >
                <p className="font-semibold text-text-primary">{option.title}</p>
                <p className="text-text-muted text-xs mt-1">{option.reasoning}</p>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'ANALYST TAKEAWAY',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-surface border-l-4 border-accent-blue p-4 rounded">
            <p className="font-semibold text-accent-blue mb-2">Key Learning Points:</p>
            <ul className="text-text-secondary text-small space-y-2 list-disc list-inside">
              <li>Multiple failed authentication attempts indicate attack activity</li>
              <li>Rapid timing and attempt pattern suggests automated tools (brute force)</li>
              <li>Attempt to escalate privileges (Admin account) shows attacker intent</li>
              <li>Response should be multi-layered: isolation, credential reset, network blocking</li>
              <li>Always verify the root cause: is the workstation compromised?</li>
            </ul>
          </div>
          <p className="text-text-muted text-small italic">
            This scenario demonstrates the importance of security monitoring, rapid detection, and coordinated response.
            <strong> This is a simulated scenario for educational purposes.</strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {phases.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPhase(index);
              setSelectedResponse(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              phase === index
                ? 'bg-accent-blue text-dark-bg'
                : 'bg-dark-card text-text-secondary hover:text-text-primary'
            }`}
          >
            Phase {index + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      <Card>
        <h3 className="text-h3 font-bold text-text-primary mb-4">{phases[phase].title}</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {phases[phase].content}
          </motion.div>
        </AnimatePresence>
      </Card>

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setPhase(Math.max(0, phase - 1));
            setSelectedResponse(null);
          }}
          disabled={phase === 0}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (phase < phases.length - 1) {
              setPhase(phase + 1);
              setSelectedResponse(null);
            } else {
              setPhase(0);
              setSelectedResponse(null);
            }
          }}
        >
          {phase === phases.length - 1 ? 'Restart Scenario' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
