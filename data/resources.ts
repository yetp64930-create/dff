export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: string;
  color: string;
  actionText: string;
  badge: string;
  fileHint: string;
}

export const freeResources: ResourceItem[] = [
  {
    id: 'ig1-samples',
    title: 'IG1 Sample Questions',
    description: 'Practice real exam scenarios with structured model answers and breakdown of command words.',
    type: 'PDF Document',
    color: '#ef4444', // Red
    actionText: 'Download PDF',
    badge: 'Popular',
    fileHint: 'PDF • 2.4 MB',
  },
  {
    id: 'command-words',
    title: 'Command Words Guide',
    description: 'Understand exactly what examiners look for when questions ask to identify, explain, or outline.',
    type: 'Study Guide',
    color: '#3b82f6', // Blue
    actionText: 'View Guide',
    badge: 'Essential',
    fileHint: 'Guide • 8 Pages',
  },
  {
    id: 'ig2-checklist',
    title: 'IG2 Checklist',
    description: 'Comprehensive pre-submission checklist to review your risk assessment report before final submission.',
    type: 'Checklist',
    color: '#10b981', // Emerald
    actionText: 'Open Checklist',
    badge: 'Recommended',
    fileHint: 'Checklist • 15 Points',
  },
  {
    id: 'interview-tips',
    title: 'Closing Interview Tips',
    description: 'Key questions, common pitfalls, and expert strategies to confidently clear your closing interview.',
    type: 'Interview Prep',
    color: '#f59e0b', // Amber/Yellow
    actionText: 'View Tips',
    badge: 'Must Read',
    fileHint: 'Tips • 12 Questions',
  },
];

