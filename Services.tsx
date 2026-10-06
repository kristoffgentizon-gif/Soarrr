import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  MessageSquare, 
  PhoneCall, 
  Cpu, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Phone
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How does the implementation process start?",
      a: "Every engagement begins with an initial inquiry and direct consultation with our founders. We analyze your current manual bottlenecks, existing software stack, and customer touchpoints to design the exact system required for your business."
    },
    {
      q: "Do you work with businesses outside Canada?",
      a: "Yes. Soar Solutions works with service companies worldwide across North America, Europe, Australia, and internationally. We configure phone numbers and systems tailored to your local or national jurisdiction."
    },
    {
      q: "Do you work with both B2B and B2C businesses?",
      a: "Yes. Whether you provide commercial B2B contracting or consumer-facing residential services, our automated qualification and booking pipelines are customized around your client profile."
    },
    {
      q: "Do you only specialize in one specific industry?",
      a: "No. Our primary focus is service businesses broadly—such as healthcare, trades, construction, automotive, professional consulting, legal, and home services. If your business has repetitive inquiries, calendar appointments, or customer communication, our systems apply."
    },
    {
      q: "Can the AI voice agent make outbound cold calls?",
      a: "No. Our AI Voice Agent offering is strictly inbound only. It is built to answer incoming calls 24/7, qualify inbound callers, collect job details, and dispatch notifications so you never miss an opportunity."
    },
    {
      q: "Can the website be customized to our exact business requirements?",
      a: "Yes. Every website we build is completely custom-designed and architected from scratch. There are no templates and no artificial page limits within the agreed project scope."
    },
    {
      q: "Do I own my website upon completion?",
      a: "Yes. The client maintains 100% full ownership of all code, assets, and website infrastructure after paying for the project."
    },
    {
      q: "Is hosting and ongoing support included?",
      a: "Yes. Premium cloud hosting, security monitoring, infrastructure updates, and ongoing technical maintenance are included with our $250/month website plan with no artificial edit limits."
    },
    {
      q: "Do all services require a consultation first?",
      a: "Yes. Because every company operates with distinct tools, calendars, and customer qualification rules, we consult first to ensure the system delivers immediate, measurable value."
    }
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#050403]">
      
      {/* Services Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Soar Solutions Services</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] text-balance">
          Systems Built to Move <br />
          <span className="bg-gradient-to-r from-white via-[#f5f3ef] to-[#ff5a1f] bg-clip-text text-transparent">
            Your Business Forward.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#f5f3ef]/70 max-w-2xl mx-auto leading-relaxed">
          Soar Solutions combines modern websites, AI marketing, targeted lead generation, autonomous SMS messaging, and 24/7 natural voice systems into practical business infrastructure.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xl shadow-[#ff5a1f]/25 cursor-pointer flex items-center gap-2"
          >
            <span>Book An Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Apex Bundle Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="rounded-3xl bg-gradient-to-b from-[#18110b] via-[#100b07] to-[#080604] border-2 border-[#ff5a1f]/50 p-8 sm:p-12 shadow-2xl shadow-[#ff5a1f]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5a1f]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
              <span>Comprehensive System Ecosystem</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Apex Bundle
            </h2>
            <p className="text-lg font-mono text-[#ff5a1f] mt-1">
              Everything working together.
            </p>
            <p className="mt-4 text-base text-[#f5f3ef]/70 leading-relaxed">
              Combine every core Soar Solutions capability into one integrated, autonomous business-growth system: bespoke website architecture, full AI marketing campaigns, SMS AI lead qualifier and setter, 24/7 inbound AI voice agent, and custom CRM dispatch routing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative z-10">
            {[
              'Modern Bespoke Website',
              'AI Lead Generation & Ads',
              'SMS AI Lead Qualifier',
              'AI Appointment Setter',
              'Automated Lead Nurturing',
              '24/7 Inbound AI Voice Agent',
              'Custom CRM Integration',
              'Field Dispatch Notifications'
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 text-xs text-[#f5f3ef]/80">
                <Check className="w-4 h-4 text-[#ff5a1f] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t border-white/10 gap-6 relative z-10">
            <div>
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                All-Inclusive Reference Investment
              </div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                $5,000 <span className="text-xs font-mono font-normal text-white/60">setup</span> + $3,500 <span className="text-xs font-mono font-normal text-white/60">/ month</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xl shadow-[#ff5a1f]/30 cursor-pointer flex items-center gap-2"
            >
              <span>Book An Inquiry For Apex Bundle</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* In-Depth Breakdown of Individual Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Service 1: Modern Website Creation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0806] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Modern Website Creation
                </h3>
              </div>
              <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
                A high-converting, modern website engineered to establish immediate credibility, communicate your value proposition clearly, and convert qualified visitors into inquiries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Clear positioning & editorial brand presence',
                  'Mobile responsiveness & ultra-fast loading',
                  'Conversion-focused architecture with zero dead ends',
                  'Branding & logo design assets included',
                  '100% full client ownership of all code & assets',
                  'No artificial page limits within agreed project scope',
                  'Continuous hosting & maintenance ($250/mo)',
                  'No artificial monthly edit limits'
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <span className="text-[#ff5a1f] font-mono">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase">Investment</div>
                <div className="font-display font-bold text-3xl text-white mt-1">$3,000 <span className="text-xs font-mono font-normal text-white/60">setup</span></div>
                <div className="font-display font-bold text-xl text-[#ff5a1f] mt-1">+ $250 <span className="text-xs font-mono font-normal text-white/60">/ month maintenance</span></div>
                <div className="text-[11px] font-mono text-white/40 mt-2">
                  Full custom build, mobile-optimized, includes logo branding.
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire About Website
              </button>
            </div>
          </div>
        </div>

        {/* Service 2: AI-Powered Marketing */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0806] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  AI-Powered Marketing
                </h3>
              </div>
              <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
                We build connected acquisition systems across Meta, Instagram, and Google Search. Rather than running generic ads, we engineer cohesive creative and lead capture pipelines that convert.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Targeted campaigns across Meta, Instagram & Google',
                  'AI-assisted ad creative production & rapid variant testing',
                  'Audience mapping tailored to local & international markets',
                  'Connected lead capture with instant CRM delivery',
                  'Zero lead leakage through continuous optimization',
                  'Transparent weekly performance reporting'
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <span className="text-[#ff5a1f] font-mono">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase">Investment</div>
                <div className="font-display font-bold text-2xl text-white mt-1">Custom Consultation</div>
                <div className="text-[11px] font-mono text-white/50 mt-2">
                  Tailored to your ad spend and target markets.
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire About Marketing
              </button>
            </div>
          </div>
        </div>

        {/* Service 3: AI Lead Generation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0806] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  AI Lead Generation
                </h3>
              </div>
              <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
                AI-assisted advertising and creative funnels designed to help businesses consistently generate qualified inbound opportunities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'AI-assisted ad copy & creative systems',
                  'Local & regional geo-targeting',
                  'High-intent lead capture mechanisms',
                  'Continuous audience and angle optimization',
                  'Immediate hand-off to AI qualification or sales reps'
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <span className="text-[#ff5a1f] font-mono">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase">Investment</div>
                <div className="font-display font-bold text-3xl text-white mt-1">$500 <span className="text-xs font-mono font-normal text-white/60">setup</span></div>
                <div className="font-display font-bold text-xl text-[#ff5a1f] mt-1">+ $1,250 <span className="text-xs font-mono font-normal text-white/60">/ month</span></div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire About Lead Gen
              </button>
            </div>
          </div>
        </div>

        {/* Service 4: SMS AI Lead Qualifier, Setter & Nurturer */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0806] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  SMS AI Lead Qualifier, Setter & Nurturer
                </h3>
              </div>
              <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
                An intelligent 2-way SMS chatbot that communicates with inbound prospects, understands their needs, qualifies them according to your standards, and books them straight into your calendar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Sub-30 second response to all inbound inquiries',
                  'Asks business-specific qualifying questions',
                  'Understands prospect urgency, budget & requirements',
                  'Books meetings into Google Calendar, Outlook & CRMs',
                  'Nurtures prospects before meetings to eliminate no-shows',
                  'Supports Facebook & Instagram lead ad webhooks'
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <span className="text-[#ff5a1f] font-mono">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase">Investment</div>
                <div className="font-display font-bold text-3xl text-white mt-1">$2,500 <span className="text-xs font-mono font-normal text-white/60">setup</span></div>
                <div className="font-display font-bold text-xl text-[#ff5a1f] mt-1">+ $1,000 <span className="text-xs font-mono font-normal text-white/60">/ month</span></div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire About SMS AI
              </button>
            </div>
          </div>
        </div>

        {/* Service 5: 24/7 AI Voice Agent (Inbound Only) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0806] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  24/7 AI Voice Agent (Inbound Only)
                </h3>
              </div>
              <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
                An intelligent inbound phone agent using a voice of your choice that answers calls 24/7, speaks naturally, handles inquiries, collects information, and alerts your team when urgent action is required.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Strictly inbound call answering — 24 hours a day, 7 days a week',
                  'Choice of natural, lifelike voice personalities',
                  'Speaks with low latency and human conversational cadence',
                  'Gathers caller name, address, job requirements & urgency',
                  'Answers approved company FAQs, pricing ranges & policies',
                  'Sends immediate dispatch notifications to on-call technicians'
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <span className="text-[#ff5a1f] font-mono">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase">Investment</div>
                <div className="font-display font-bold text-3xl text-white mt-1">$2,500 <span className="text-xs font-mono font-normal text-white/60">setup</span></div>
                <div className="font-display font-bold text-xl text-[#ff5a1f] mt-1">+ $1,000 <span className="text-xs font-mono font-normal text-white/60">/ month</span></div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="mt-6 w-full py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire About Voice Agent
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Dedicated Pricing Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-mono tracking-widest text-[#ff5a1f] uppercase mb-3">
            Transparent Reference Pricing
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Choose What Your Business Needs.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#f5f3ef]/65">
            Every engagement starts with a discovery consultation. Transparent investment benchmarks:
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#0c0907]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03] border-b border-white/[0.08] text-white font-mono text-xs uppercase">
              <tr>
                <th className="py-4 px-6">Service Offering</th>
                <th className="py-4 px-6">Implementation Setup</th>
                <th className="py-4 px-6">Ongoing Monthly</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-[#f5f3ef]/80 font-mono">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 font-sans font-semibold text-white">Modern Website Creation</td>
                <td className="py-4 px-6 text-white font-bold">$3,000</td>
                <td className="py-4 px-6 text-[#ff5a1f]">$250 / mo</td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => onNavigate('/contact')} className="text-xs text-[#ff5a1f] hover:underline cursor-pointer">Inquire</button>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 font-sans font-semibold text-white">AI Lead Generation</td>
                <td className="py-4 px-6 text-white font-bold">$500</td>
                <td className="py-4 px-6 text-[#ff5a1f]">$1,250 / mo</td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => onNavigate('/contact')} className="text-xs text-[#ff5a1f] hover:underline cursor-pointer">Inquire</button>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 font-sans font-semibold text-white">SMS AI Lead Qualifier, Setter & Nurturer</td>
                <td className="py-4 px-6 text-white font-bold">$2,500</td>
                <td className="py-4 px-6 text-[#ff5a1f]">$1,000 / mo</td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => onNavigate('/contact')} className="text-xs text-[#ff5a1f] hover:underline cursor-pointer">Inquire</button>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-4 px-6 font-sans font-semibold text-white">24/7 AI Voice Agent (Inbound Only)</td>
                <td className="py-4 px-6 text-white font-bold">$2,500</td>
                <td className="py-4 px-6 text-[#ff5a1f]">$1,000 / mo</td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => onNavigate('/contact')} className="text-xs text-[#ff5a1f] hover:underline cursor-pointer">Inquire</button>
                </td>
              </tr>
              <tr className="bg-[#ff5a1f]/[0.08] border-l-4 border-l-[#ff5a1f]">
                <td className="py-5 px-6 font-sans font-bold text-white flex items-center gap-2">
                  <span>Apex Bundle (Comprehensive System)</span>
                  <span className="text-[10px] bg-[#ff5a1f] text-white px-2 py-0.5 rounded-full font-mono">Unified</span>
                </td>
                <td className="py-5 px-6 text-white font-bold text-base">$5,000</td>
                <td className="py-5 px-6 text-[#ff5a1f] font-bold text-base">$3,500 / mo</td>
                <td className="py-5 px-6 text-right">
                  <button onClick={() => onNavigate('/contact')} className="px-4 py-1.5 rounded-full bg-[#ff5a1f] text-white text-xs font-semibold uppercase cursor-pointer">Book Inquiry</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/[0.08]">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & Clarity</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-[#0c0907] border border-white/[0.08] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-medium text-white hover:text-[#ff5a1f] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-200 shrink-0 ml-4 ${
                  openFaq === idx ? 'rotate-180 text-[#ff5a1f]' : ''
                }`} />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#f5f3ef]/70 leading-relaxed border-t border-white/[0.04] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Inquiry Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#140e0a] to-[#090604] border border-[#ff5a1f]/30 space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Ready to Implement an Intelligent System?
          </h2>
          <p className="text-sm sm:text-base text-[#f5f3ef]/70 max-w-xl mx-auto">
            Book an inquiry today and let's discuss how practical AI and automation can work for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xl shadow-[#ff5a1f]/30 cursor-pointer"
            >
              Book An Inquiry
            </button>
            <a
              href="tel:4317773343"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
              <span>431-777-3343</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};
