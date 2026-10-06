import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'apex-bundle',
    name: 'Apex Bundle',
    tagline: 'Your business. Connected. Automated.',
    description: 'The comprehensive Soar Solutions ecosystem. Combines every core marketing, automation, digital infrastructure, SMS AI qualification, and 24/7 inbound voice agent into one unified growth engine.',
    setupPrice: '$5,000 setup',
    monthlyPrice: '$3,500 / month',
    isComprehensive: true,
    highlights: [
      'Complete end-to-end business systemization',
      'Unified CRM, SMS AI setter & 24/7 inbound voice agent',
      'AI marketing campaigns across Meta, Instagram & Google',
      'Custom bespoke website with ongoing maintenance'
    ],
    features: [
      'Modern bespoke website creation with no artificial page limits',
      'Full AI-powered marketing across Meta, Instagram & Google',
      'AI lead generation with automated capture & speed-to-lead routing',
      'SMS AI Lead Qualifier, Appointment Setter & Nurturer',
      '24/7 Inbound AI Voice Agent with customized natural voice profile',
      'Automated CRM integration & real-time dispatch alerts',
      'Continuous campaign & prompt engineering optimization',
      'Dedicated technical leadership & rapid support'
    ]
  },
  {
    id: 'websites',
    name: 'Modern Website Creation',
    tagline: 'High-performance digital infrastructure built to convert.',
    description: 'Bespoke custom architecture engineered to make your business look authoritative, communicate value with surgical precision, and turn visitors into qualified inquiries. Scoped to your exact operational requirements.',
    setupPrice: '$3,000 setup',
    monthlyPrice: '$250 / month',
    highlights: [
      '100% bespoke design & architecture — no templates',
      'Client owns full website upon project completion',
      'Includes premium hosting, security & maintenance',
      'No artificial page limits within project scope'
    ],
    features: [
      'Custom UI/UX and mobile-optimized responsiveness',
      'Conversion-focused user journeys & qualification flows',
      'Integrated branding & logo design assets',
      'Native AI lead capture & form routing integrations',
      'High-speed hosting, CDN setup & technical SEO foundations',
      'Ongoing maintenance, security patches & technical updates ($250/mo)',
      'No artificial monthly edit limits'
    ]
  },
  {
    id: 'marketing',
    name: 'AI-Powered Marketing',
    tagline: 'Connected acquisition engines across Meta, Instagram & Google.',
    description: 'We build connected acquisition systems rather than simply running isolated ads. We leverage AI-assisted creative production, targeted audience mapping, and continuous optimization to capture qualified local and global opportunities.',
    setupPrice: 'Custom consultation',
    monthlyPrice: 'Customized to campaign scope',
    highlights: [
      'Multi-channel reach: Meta, Instagram, and Google Search',
      'AI-assisted ad creative production & iterative testing',
      'Connected lead capture with zero lead latency',
      'Continuous ROI tracking & audience optimization'
    ],
    features: [
      'Comprehensive campaign strategy tailored to service businesses',
      'High-converting ad creative & copy variation systems',
      'Local & global geo-targeting configured for your target client profile',
      'Direct integration with SMS and CRM nurturing pipelines',
      'Full conversion tracking & transparent performance reporting'
    ]
  },
  {
    id: 'lead-generation',
    name: 'AI Lead Generation',
    tagline: 'Predictable opportunity generation for service companies.',
    description: 'Targeted systems designed to help service businesses generate, capture, qualify, and respond to opportunities without relying on slow manual outreach.',
    setupPrice: '$500 setup',
    monthlyPrice: '$1,250 / month',
    highlights: [
      'Targeted ad creative & local audience capture',
      'High-converting landing funnels & lead magnets',
      'Immediate lead capture notification pipeline',
      'Continuous testing to lower acquisition cost'
    ],
    features: [
      'Targeted campaign setup & ad creative generation',
      'Frictionless lead capture mechanisms',
      'Automated contact validation & verification',
      'Seamless hand-off to AI qualification or internal sales team',
      'Transparent weekly pipeline analytics'
    ]
  },
  {
    id: 'sms-ai',
    name: 'SMS AI Lead Qualifier, Setter & Nurturer',
    tagline: 'Instant 2-way SMS conversations that book calendar appointments.',
    description: 'An intelligent SMS system that responds to inbound prospects in seconds, asks custom qualifying questions, answers approved business FAQs, books qualified prospects into your existing calendar, and nurtures leads before their meeting.',
    setupPrice: '$2,500 setup',
    monthlyPrice: '$1,000 / month',
    highlights: [
      'Responds to inbound leads within 30 seconds',
      'Asks business-specific qualification criteria',
      'Directly syncs into Google Calendar, Outlook & CRMs',
      'Automated pre-meeting reminder & nurturing sequence'
    ],
    features: [
      'Instant automated response to inbound leads from any channel',
      'Natural, human-feeling conversational logic tailored to your services',
      'Intelligent intent detection & budget/urgency qualification',
      'Automatic appointment booking into your existing calendar',
      'Pre-appointment nurturing to eliminate no-shows',
      'Seamless live-agent takeover whenever required'
    ]
  },
  {
    id: 'voice-agent',
    name: '24/7 AI Voice Agent (Inbound Only)',
    tagline: 'Natural-sounding phone intelligence that never misses a call.',
    description: 'A 24/7 inbound AI phone agent with a natural, customizable voice profile tailored to your company. It answers incoming calls, handles customer inquiries, collects key details, and triggers instant dispatch notifications.',
    setupPrice: '$2,500 setup',
    monthlyPrice: '$1,000 / month',
    highlights: [
      'Strictly inbound call answering — 24 hours a day, 7 days a week',
      'Choice of natural, lifelike voice personalities',
      'Customized around your business FAQs & operating hours',
      'Instant team notification & dispatch alerts for urgent jobs'
    ],
    features: [
      'Zero missed calls during peak hours, evenings, or weekends',
      'Speaks naturally with low latency and human cadence',
      'Gathers customer name, location, service needed, and urgency',
      'Answers approved business questions and policies',
      'Routes caller information immediately to staff via SMS, email, or webhook',
      'Dispatches field technicians or team members for emergency trade requests'
    ]
  },
  {
    id: 'automation',
    name: 'Custom Business Automation',
    tagline: 'If your team does it repeatedly, we systemize it.',
    description: 'Eliminate repetitive manual tasks, disconnected software silos, and lost administrative hours by engineering custom automated pipelines between your website, CRM, scheduling software, and communication tools.',
    setupPrice: 'Custom consultation',
    monthlyPrice: 'Based on system architecture',
    highlights: [
      'Connects your disparate software tools into one workflow',
      'Eliminates duplicate manual data entry and human error',
      'Automated team notifications and task assignments',
      'Scalable infrastructure that grows without hiring overhead'
    ],
    features: [
      'End-to-end workflow audit to locate operational bottlenecks',
      'Zapier, Make, and custom API webhook orchestrations',
      'Automated invoice reminders & client onboarding sequences',
      'Real-time internal alerts via Slack, SMS, or email',
      'Custom database syncing across field management software'
    ]
  }
];

export const industriesList = [
  'Trades',
  'Medical',
  'Commercial B2B',
  'Home Services',
  'Real Estate',
  'Recruitment',
  'Staffing',
  'Adventure & Travel',
  'Plumbing & HVAC',
  'Healthcare & Clinics',
  'Commercial Contracting',
  'Automotive & Dealerships',
  'Electrical & Roofing',
  'Professional Consulting',
  'Legal & Law Practices',
  'Financial Services & Wealth',
  'Hospitality & Venue Spaces',
  'Fitness & Wellness Studios',
  'Property Management',
  'Logistics & Fleet Services',
  'Dental Practices',
  'Solar & Clean Energy',
  'Architecture & Engineering',
  'Industrial Contracting'
];
