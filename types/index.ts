export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  slug: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  client: string;
  industry: string;
  results: {
    metric: string;
    value: string;
  }[];
  slug: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export type ButtonState = 'default' | 'loading' | 'success' | 'error' | 'disabled';

export type AnimationVariant = 'fadeIn' | 'fadeInRight' | 'fadeInUp' | 'scaleIn' | 'slideIn';

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string | number[];
}
