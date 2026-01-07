
import React from 'react';
import { 
  Monitor, 
  BarChart3, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Users, 
  Cpu 
} from 'lucide-react';
import { Service, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize your legacy systems with cutting-edge cloud and mobile solutions.',
    icon: 'Monitor',
    details: ['Cloud Migration', 'Enterprise Software', 'App Development', 'API Ecosystems']
  },
  {
    id: 'data-analytics',
    title: 'Data & AI Strategy',
    description: 'Unlock actionable insights and automate workflows using advanced machine learning.',
    icon: 'BarChart3',
    details: ['Predictive Modeling', 'Business Intelligence', 'Generative AI Integration', 'Data Lakes']
  },
  {
    id: 'it-consulting',
    title: 'IT Strategy Consulting',
    description: 'Align your technology investments with high-level business goals for maximum ROI.',
    icon: 'Settings',
    details: ['Technology Roadmap', 'Fractional CTO', 'Compliance Audit', 'Infrastructure Design']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'FinTech Pro',
    industry: 'Financial Services',
    title: 'Modernizing Core Banking for the Digital Age',
    results: '40% increase in transaction speed and 25% reduction in operational overhead.',
    challenge: 'A decade-old monolithic system was slowing down performance and increasing security risks.',
    image: 'https://picsum.photos/seed/bank/800/600'
  },
  {
    id: '2',
    client: 'EcoLogistics',
    industry: 'Supply Chain',
    title: 'AI-Driven Route Optimization',
    results: '15% reduction in fuel costs and 99.8% on-time delivery rate.',
    challenge: 'Inefficient routing led to high carbon emissions and delayed shipments.',
    image: 'https://picsum.photos/seed/cargo/800/600'
  }
];

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, React.ReactNode> = {
    Monitor: <Monitor size={size} className={className} />,
    BarChart3: <BarChart3 size={size} className={className} />,
    Settings: <Settings size={size} className={className} />,
    Zap: <Zap size={size} className={className} />,
    ShieldCheck: <ShieldCheck size={size} className={className} />,
    Globe: <Globe size={size} className={className} />,
    Users: <Users size={size} className={className} />,
    Cpu: <Cpu size={size} className={className} />
  };
  return icons[name] || <Monitor size={size} className={className} />;
};
