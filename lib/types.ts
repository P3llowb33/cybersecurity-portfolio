// Type definitions for the portfolio

export interface Candidate {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  coreAreas: string[];
  tagline: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  transferableStrengths?: string[];
  disclaimer?: string;
}

export interface Education {
  id: string;
  type: 'completed' | 'previous';
  institution: string;
  qualification: string;
  startDate: string;
  endDate?: string;
}

export interface PreviousStudy {
  id: string;
  institution: string;
  qualification: string;
  status: string;
  note: string;
}

export interface TrainingItem {
  id: string;
  category: string;
  provider: string;
  course: string;
  startDate?: string;
  endDate?: string;
  status: 'COMPLETED' | 'CURRENT' | 'TRAINING';
  type: string;
  note?: string;
}

export interface Skill {
  id: string;
  name: string;
  status: 'EXPOSURE' | 'LEARNING' | 'DEVELOPING' | 'PRACTICAL' | 'DOCUMENTED';
  description: string;
  relatedTraining?: string[];
  relatedProject?: string;
}

export interface SkillsCategory {
  [key: string]: Skill[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: 'PLANNED' | 'IN PROGRESS' | 'COMPLETED';
  objective: string;
  technologies: string[];
  concepts: string[];
  description: string;
}

export interface Lab {
  id: string;
  title: string;
  category: string;
  status: 'PLANNED' | 'IN PROGRESS' | 'COMPLETED';
  objective: string;
  tools: string[];
  skills: string[];
}

export interface LearningMilestone {
  phase: string;
  year: string;
  milestone: string;
  status: 'COMPLETED' | 'CURRENT' | 'PLANNED';
}

export interface SecurityControl {
  id: string;
  control: string;
  purpose: string;
  status: 'IMPLEMENTED' | 'PLANNED' | 'NOT VERIFIED' | 'NOT APPLICABLE';
  explanation: string;
}
