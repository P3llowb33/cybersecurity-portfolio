// Navigation configuration
export const navigationConfig = {
  primary: [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/about', id: 'about' },
    { label: 'Experience', href: '/experience', id: 'experience' },
    { label: 'Education', href: '/education', id: 'education' },
    { label: 'Training', href: '/training', id: 'training' },
    { label: 'Skills', href: '/skills', id: 'skills' },
    { label: 'Projects', href: '/projects', id: 'projects' },
    { label: 'Security Lab', href: '/security-lab', id: 'lab' },
    { label: 'Learning', href: '/learning', id: 'learning' },
  ],
  secondary: [
    { label: 'Security by Design', href: '/security-by-design', id: 'security' },
    { label: 'Recruiter View', href: '/recruiter', id: 'recruiter' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ],
  cvUrl: '/Thapelo_Moalosi_CV.pdf',
};

export const statusColors = {
  PLANNED: 'bg-slate-700 text-slate-100',
  'IN PROGRESS': 'bg-blue-900 text-accent-blue',
  COMPLETED: 'bg-green-900 text-green-300',
  CURRENT: 'bg-accent-blue text-dark-bg',
  DEVELOPING: 'bg-blue-900 text-accent-blue',
  LEARNING: 'bg-purple-900 text-purple-300',
  EXPOSURE: 'bg-slate-700 text-slate-200',
  PRACTICAL: 'bg-green-900 text-green-300',
  'NOT COMPLETED': 'bg-slate-700 text-slate-200',
  'NOT VERIFIED': 'bg-slate-700 text-slate-200',
  TRAINING: 'bg-orange-900 text-orange-300',
  IMPLEMENTED: 'bg-green-900 text-green-300',
};
