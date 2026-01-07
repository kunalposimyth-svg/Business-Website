
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  results: string;
  image: string;
  challenge: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
