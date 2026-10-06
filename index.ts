export type ServiceId = 
  | 'websites'
  | 'marketing'
  | 'lead-generation'
  | 'sms-ai'
  | 'voice-agent'
  | 'automation'
  | 'apex-bundle';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  setupPrice: string;
  monthlyPrice: string;
  highlights: string[];
  features: string[];
  isComprehensive?: boolean;
}

export interface LeadRecord {
  id: string;
  name: string;
  company: string;
  source: 'Meta Ads' | 'Google Local' | 'Website Form' | 'Direct Inbound';
  service: string;
  status: 'New' | 'AI Responded' | 'Qualified' | 'Appointment Booked' | 'Nurturing';
  responseTime: string;
  value: string;
  timestamp: string;
  aiNotes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface VoiceProfile {
  id: string;
  name: string;
  style: string;
  tone: string;
  bestFor: string;
  sampleText: string;
}
