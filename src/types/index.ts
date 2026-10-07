export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'Brand Identity' | 'Visual Systems' | '3D & Motion' | 'Editorial & Digital';
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  featured?: boolean;
  aspect?: string;
  deliverables: string[];
  palette: { name: string; hex: string }[];
  typography: string;
  outcomeMetric: string;
}

export interface Capability {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  impactMetric: string;
}

export interface DiagnosticResult {
  score: number;
  grade: string;
  verdict: string;
  recommendation: string;
  suggestedPackage: string;
}
