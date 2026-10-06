import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { industriesList } from '../data/servicesData';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#070503] border-y border-white/[0.08] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#ff5a1f]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Mandatory Proof Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-14 border-b border-white/[0.08]">
          
          {/* 70+ Companies */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-baseline justify-center md:justify-start">
              <span className="font-display font-bold text-5xl sm:text-6xl text-[#ff5a1f] tracking-tight tabular-nums">
                70+
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider font-mono text-white/80 font-semibold">
              Companies Worked With
            </div>
            <p className="text-xs text-[#f5f3ef]/50 max-w-xs">
              Systems, marketing funnels, and automation architectures engineered for service businesses.
            </p>
          </div>

          {/* 100% Satisfaction Rate */}
          <div className="text-center md:text-left space-y-2 border-y md:border-y-0 md:border-x border-white/[0.08] py-6 md:py-0 md:px-8">
            <div className="flex items-baseline justify-center md:justify-start gap-1">
              <span className="font-display font-bold text-5xl sm:text-6xl text-[#ff5a1f] tracking-tight tabular-nums">
                100%
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider font-mono text-white/80 font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ff5a1f]" />
              Satisfaction Rate
            </div>
            <p className="text-xs text-[#f5f3ef]/50 max-w-xs">
              Backed by our 100% satisfaction commitment subject to agreed project milestones.
            </p>
          </div>

          {/* High Standards / 5 Star Rating */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start py-2">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#ff5a1f] text-[#ff5a1f]" />
                ))}
              </div>
            </div>
            <div className="text-xs uppercase tracking-wider font-mono text-white/80 font-semibold">
              Service Rating Benchmark
            </div>
            <p className="text-xs text-[#f5f3ef]/50 max-w-xs">
              Consistent, high-touch communication directly with agency leadership.
            </p>
          </div>

        </div>

        {/* Industry Marquee - 24+ Real Service Business Sectors */}
        <div className="pt-10">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono tracking-widest text-[#f5f3ef]/40 uppercase">
              Engineered For Modern Service Companies Worldwide
            </span>
          </div>

          {/* Scrolling Marquee */}
          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-4 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
              {[...industriesList, ...industriesList].map((industry, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-[#f5f3ef]/70 flex items-center gap-2 hover:border-[#ff5a1f]/40 hover:text-white transition-all whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
