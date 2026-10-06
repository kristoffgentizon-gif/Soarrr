import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  CalendarCheck, 
  TrendingUp, 
  Filter, 
  Search, 
  ArrowUpRight,
  ShieldAlert,
  Zap,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { LeadRecord } from '../types';

export const LeadGenAnalytics: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Qualified' | 'Booked' | 'Dispatch'>('All');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [searchTerm, setSearchTerm] = useState('');

  // Illustrative Lead Records
  const sampleLeads: LeadRecord[] = [
    {
      id: 'LD-9481',
      name: 'David Reynolds',
      company: 'Highland Dental Group',
      source: 'Google Local',
      service: 'AI Voice & Scheduling',
      status: 'Appointment Booked',
      responseTime: '24s',
      value: '$8,400',
      timestamp: '12 mins ago',
      aiNotes: 'Qualified: 3 clinic locations, high inbound call volume, scheduled demo for Thursday 2pm.'
    },
    {
      id: 'LD-9480',
      name: 'Marcus Chen',
      company: 'Apex Precision Contracting',
      source: 'Meta Ads',
      service: 'SMS AI Setter & Apex Bundle',
      status: 'Qualified',
      responseTime: '18s',
      value: '$14,200',
      timestamp: '34 mins ago',
      aiNotes: 'Qualified: 12 field technicians, requires urgent dispatch alerts and CRM integration.'
    },
    {
      id: 'LD-9479',
      name: 'Sarah Jenkins',
      company: 'Lakeside Physiotherapy',
      source: 'Website Form',
      service: 'Modern Website Creation',
      status: 'Appointment Booked',
      responseTime: '42s',
      value: '$3,250',
      timestamp: '1 hour ago',
      aiNotes: 'Inquiry confirmed: Outdated WordPress site with zero conversion tracking. Budget verified.'
    },
    {
      id: 'LD-9478',
      name: 'Brian O’Connor',
      company: 'Rapid Roof Restoration',
      source: 'Direct Inbound',
      service: '24/7 AI Voice Agent',
      status: 'AI Responded',
      responseTime: '9s',
      value: '$6,800',
      timestamp: '2 hours ago',
      aiNotes: 'Caller requested after-hours storm emergency routing. Caller info captured & team alerted.'
    },
    {
      id: 'LD-9477',
      name: 'Jessica Vance',
      company: 'Elevate Private Wealth',
      source: 'Meta Ads',
      service: 'AI Lead Generation',
      status: 'Nurturing',
      responseTime: '31s',
      value: '$12,000',
      timestamp: '3 hours ago',
      aiNotes: 'Requested case studies for high-net-worth client acquisition. Automated email sent.'
    }
  ];

  const filteredLeads = sampleLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.service.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (activeFilter === 'Qualified') return lead.status === 'Qualified' || lead.status === 'Appointment Booked';
    if (activeFilter === 'Booked') return lead.status === 'Appointment Booked';
    if (activeFilter === 'Dispatch') return lead.service.includes('Voice') || lead.aiNotes.toLowerCase().includes('dispatch');
    return true;
  });

  return (
    <section className="relative py-28 bg-[#050403] border-t border-white/[0.08] overflow-hidden">
      
      {/* Background illumination matching the reference images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff5a1f]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Real-Time Business System Visualization</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
              Soar Solutions Lead Generation Analytics.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#f5f3ef]/65 leading-relaxed">
              This is what an intelligent operating system looks like inside your business: every inquiry instantly engaged, vetted with custom qualification criteria, and converted into booked appointments.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-white/40 uppercase bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.08]">
              Illustrative System Preview
            </span>
          </div>
        </div>

        {/* The Dashboard Application Container (Modeled on Serviceflow Style Reference) */}
        <div className="rounded-3xl bg-[#0b0806] border border-white/10 p-4 sm:p-7 shadow-2xl shadow-black/90 backdrop-blur-xl relative">
          
          {/* Top Bar of the Dashboard */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>Live Acquisition Engine</span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    System Active
                  </span>
                </div>
                <div className="text-xs text-[#f5f3ef]/40 font-mono">
                  Autonomous speed-to-lead pipeline
                </div>
              </div>
            </div>

            {/* Time range selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              {(['7d', '30d', '90d'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                    timeRange === range
                      ? 'bg-[#ff5a1f] text-white font-semibold shadow-md shadow-[#ff5a1f]/30'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : 'Q1 2026'}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Tiles Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff5a1f]/30 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-2">
                <span className="font-mono uppercase text-[11px]">Total Qualified Leads</span>
                <Users className="w-4 h-4 text-[#ff5a1f]" />
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                {timeRange === '7d' ? '38' : timeRange === '30d' ? '142' : '410'}
              </div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+28.4% vs previous month</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff5a1f]/30 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-2">
                <span className="font-mono uppercase text-[11px]">Average Response Latency</span>
                <Clock className="w-4 h-4 text-[#ff5a1f]" />
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                24<span className="text-sm font-normal text-[#f5f3ef]/60 ml-0.5">sec</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero lead abandonment</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff5a1f]/30 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-2">
                <span className="font-mono uppercase text-[11px]">Appointments Set</span>
                <CalendarCheck className="w-4 h-4 text-[#ff5a1f]" />
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                {timeRange === '7d' ? '14' : timeRange === '30d' ? '49' : '156'}
              </div>
              <div className="text-[11px] font-mono text-[#ff5a1f] flex items-center gap-1 mt-1">
                <span>34.5% Lead-to-Meeting Rate</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff5a1f]/30 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-2">
                <span className="font-mono uppercase text-[11px]">Inbound Pipeline Value</span>
                <Zap className="w-4 h-4 text-[#ff5a1f]" />
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                {timeRange === '7d' ? '$48.5k' : timeRange === '30d' ? '$184.2k' : '$540k'}
              </div>
              <div className="text-[11px] font-mono text-white/40 mt-1">
                Automated qualification
              </div>
            </div>

          </div>

          {/* Interactive Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 pb-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(['All', 'Qualified', 'Booked', 'Dispatch'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-white/10 text-white font-semibold border border-white/20'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {filter === 'All' && 'All Inbound Leads'}
                  {filter === 'Qualified' && 'Qualified Only'}
                  {filter === 'Booked' && 'Booked Meetings'}
                  {filter === 'Dispatch' && 'Phone & Dispatch'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff5a1f]"
              />
            </div>
          </div>

          {/* Inbound Pipeline Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-black/40">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.02] border-b border-white/[0.06] text-[#f5f3ef]/50 font-mono text-[11px] uppercase">
                <tr>
                  <th className="py-3 px-4">Lead & Business</th>
                  <th className="py-3 px-4">Channel</th>
                  <th className="py-3 px-4">System Service</th>
                  <th className="py-3 px-4">Response Speed</th>
                  <th className="py-3 px-4">Pipeline Status</th>
                  <th className="py-3 px-4">AI Qualification Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-[#f5f3ef]/80">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{lead.name}</div>
                      <div className="text-[11px] text-[#f5f3ef]/45 font-mono">{lead.company}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-white/70">
                        {lead.source === 'Google Local' && <PhoneCall className="w-3 h-3 text-[#ff5a1f]" />}
                        {lead.source === 'Meta Ads' && <MessageSquare className="w-3 h-3 text-sky-400" />}
                        {lead.source === 'Website Form' && <Zap className="w-3 h-3 text-amber-400" />}
                        {lead.source === 'Direct Inbound' && <PhoneCall className="w-3 h-3 text-emerald-400" />}
                        {lead.source}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-white/70">
                      {lead.service}
                    </td>
                    <td className="py-3.5 px-4 font-mono">
                      <span className="text-emerald-400 font-semibold">{lead.responseTime}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono ${
                        lead.status === 'Appointment Booked'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : lead.status === 'Qualified'
                          ? 'bg-[#ff5a1f]/15 text-[#ff5a1f] border border-[#ff5a1f]/30'
                          : 'bg-white/5 text-white/70 border border-white/10'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs text-[11px] text-[#f5f3ef]/60 leading-snug">
                      {lead.aiNotes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note inside dashboard */}
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#f5f3ef]/40 gap-2">
            <div>
              * Illustrative interface demonstrating lead capture, AI qualification & speed-to-lead mechanics.
            </div>
            <div className="flex items-center gap-3 text-[#ff5a1f]">
              <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-ping" />
              <span>Automated CRM Sync Enabled</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
