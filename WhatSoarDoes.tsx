import React from 'react';
import { Compass, Cpu, Layers, TrendingUp } from 'lucide-react';

export const WhatSoarDoes: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Audit your current workflows',
      desc: 'We examine how your business currently captures leads, communicates with customers, schedules appointments, and routes internal operations.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Design',
      tagline: 'Architect the intelligent system',
      desc: 'We map out custom AI conversation trees, qualification parameters, custom voice configurations, and software integrations tailored to your service offerings.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Implement',
      tagline: 'Deploy & integrate live systems',
      desc: 'We build the bespoke websites, configure the SMS/voice agents, connect your CRM, and stress-test the pipeline so it operates cleanly from day one.',
      icon: Layers
    },
    {
      num: '04',
      title: 'Optimize',
      tagline: 'Ongoing refinement & scaling',
      desc: 'We continuously refine conversational logic, monitor response speeds, update prompt parameters, and ensure your system scales smoothly as your volume expands.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative py-28 bg-[#070503] border-t border-white/[0.08] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] font-mono tracking-widest text-[#ff5a1f] uppercase mb-3">
            How We Implement
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
            We Build Systems That Work Around Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f5f3ef]/65 leading-relaxed">
            We do not sell generic off-the-shelf software or isolated AI toys. Every engagement begins with a direct consultation to engineer infrastructure specifically around how your company operates.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="group p-7 rounded-2xl bg-[#0e0a07] border border-white/[0.08] hover:border-[#ff5a1f]/40 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-3xl text-white/20 group-hover:text-[#ff5a1f] transition-colors tabular-nums">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#ff5a1f] mb-3">
                    {step.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#f5f3ef]/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                  Phase {step.num} of 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
