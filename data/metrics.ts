export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  icon: 'graduation' | 'users' | 'star' | 'globe';
}

export const metrics: MetricItem[] = [
  {
    id: 'm1',
    value: '3+ Years',
    label: 'Mentoring Experience',
    sublabel: 'Dedicated NEBOSH coaching',
    icon: 'graduation',
  },
  {
    id: 'm2',
    value: '500+',
    label: 'Students Supported',
    sublabel: 'Across Pakistan & Gulf',
    icon: 'users',
  },
  {
    id: 'm3',
    value: '98%',
    label: 'First-Time Pass Rate',
    sublabel: 'Proven exam track record',
    icon: 'star',
  },
  {
    id: 'm4',
    value: 'Worldwide',
    label: 'Students from Multiple Countries',
    sublabel: 'Pakistan, UAE, KSA, UK & Europe',
    icon: 'globe',
  },
];
