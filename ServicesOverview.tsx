import React from 'react';
import { ArrowUpRight, Check, Sparkles, Layers, Globe, MessageSquare, PhoneCall, Cpu, Target } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServicesOverviewProps {
  onNavigate: (path: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const apexBundle = servicesData.find(s => s.id === 'apex-bundle')!;
  const coreServices = servicesData.filter(s => s.id !== 'apex-bundle');

  const getIcon = (id: string) => {
    switch (id) {
      case 'websites': return Globe;
      case 'marketing': return Target;
      case 'lead-generation': return Sparkles;
      case 'sms-ai': return MessageSquare;
      case 'voice-agent': return PhoneCall;
      case 'automation': return Cpu;
      default: return Layers;
    }
  };

  return (
    <section className="relative py-28 bg-[#050403] border-t border-white/[0.08] overflow-hidden">
      
      {/* Background radial warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#ff5a1f]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono tracking-widest text-[#ff5a1f] uppercase mb-3">
              Capabilities & Offerings
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
              What We Build.
            </h2>
            <p className="mt-4 text-base text-[#f5f3ef]/65 leading-relaxed">
              We engineer practical digital infrastructure, custom acquisition systems, intelligent SMS responders, and 24/7 natural voice agents for service businesses ready to scale.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#ff5a1f] hover:text-white transition-colors cursor-pointer"
          >
            <span>View Full Service Catalog & Pricing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Apex Bundle Hero Card (Visually Prominent Comprehensive Package) */}
        <div className="mb-10 rounded-3xl bg-gradient-to-b from-[#18110b] via-[#100b07] to-[#0a0705] border-2 border-[#ff5a1f]/50 p-8 sm:p-12 shadow-2xl shadow-[#ff5a1f]/15 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5a1f]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5a1f]/15 border border-[#ff5a1f]/30 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Comprehensive Ecosystem</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                {apexBundle.name}
              </h3>
              
              <p className="text-base font-mono text-[#ff5a1f]">
                {apexBundle.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#f5f3ef]/70 leading-relaxed max-w-xl">
                {apexBundle.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {apexBundle.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#f5f3ef]/80">
                    <Check className="w-4 h-4 text-[#ff5a1f] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center lg:border-l lg:border-white/10 lg:pl-10 space-y-6">
              <div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  Investment
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">
                  $5,000 <span className="text-xs font-mono font-normal text-white/60">setup</span>
                </div>
                <div className="font-display font-bold text-2xl text-[#ff5a1f] mt-1">
                  + $3,500 <span className="text-xs font-mono font-normal text-white/60">/ month</span>
                </div>
                <div className="text-[11px] font-mono text-white/40 mt-1">
                  Custom scoped around your operational systems
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#ff5a1f]/30 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book An Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of Other Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <div
                key={service.id}
                className="group p-7 rounded-3xl bg-[#0b0806] border border-white/[0.08] hover:border-[#ff5a1f]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-right">
                      <div className="font-display font-bold text-sm text-white tabular-nums">
                        {service.setupPrice}
                      </div>
                      <div className="text-[11px] font-mono text-[#ff5a1f]">
                        {service.monthlyPrice}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#ff5a1f] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#f5f3ef]/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-white/[0.05] pt-4">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#f5f3ef]/70">
                        <span className="text-[#ff5a1f] font-mono text-[10px] mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('/services')}
                    className="text-xs font-mono text-white/50 group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-xs font-mono text-[#ff5a1f] hover:underline cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
