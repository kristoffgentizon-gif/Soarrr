import React, { useState } from 'react';
import { Phone, ArrowUpRight, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { downloadProjectZip } from '../lib/downloadZip';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadZip = async () => {
    try {
      setDownloading(true);
      await downloadProjectZip();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error('Failed to generate project zip:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <footer className="relative bg-[#060403] border-t border-white/[0.08] text-[#f5f3ef]/70 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient orange glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-t from-[#ff5a1f]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <span className="font-display font-bold text-lg text-white uppercase tracking-tight">
                Soar Solutions
              </span>
            </div>

            <p className="text-xs tracking-wider uppercase text-[#ff5a1f] font-mono font-medium">
              AI • Marketing • Automation
            </p>

            <p className="text-sm text-[#f5f3ef]/60 max-w-sm leading-relaxed">
              Engineering practical AI pipelines, modern web infrastructure, and automated customer communication systems for service businesses worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#f5f3ef]/50">
              <ShieldCheck className="w-4 h-4 text-[#ff5a1f]" />
              <span>Backed by a 100% satisfaction commitment</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-mono font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/services')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book An Inquiry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('/#founders');
                    setTimeout(() => {
                      document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Founders Story
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Lines */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-mono font-semibold">
              Direct Phone Lines
            </h4>
            <p className="text-xs text-[#f5f3ef]/50">
              Speak directly with our team regarding automation, AI voice, or custom systems:
            </p>

            <div className="space-y-2.5 font-mono text-sm">
              <a 
                href="tel:4317773343" 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ff5a1f]/40 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ff5a1f]/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#f5f3ef]/40 uppercase tracking-wider font-sans">Primary Line</div>
                  <div className="text-sm font-semibold text-white">431-777-3343</div>
                </div>
              </a>

              <a 
                href="tel:4318775807" 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ff5a1f]/40 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ff5a1f]/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#f5f3ef]/40 uppercase tracking-wider font-sans">Secondary Line</div>
                  <div className="text-sm font-semibold text-white">431-877-5807</div>
                </div>
              </a>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="w-full mt-2 py-3 rounded-xl bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#ff5a1f]/20 cursor-pointer"
            >
              <span>Book An Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5f3ef]/40 gap-6">
          <div>
            © 2026 Soar Solutions. All rights reserved.
          </div>
          
          <div className="flex flex-col items-center sm:items-end gap-3 text-center sm:text-right">
            <div className="flex items-center gap-4 sm:gap-6">
              <span>Global Service Business Solutions</span>
              <span>·</span>
              <span className="text-white/60">B2B & B2C Automation</span>
            </div>

            {/* Download Zip button placed below B2B & B2C Automation */}
            <button
              onClick={handleDownloadZip}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#ff5a1f] text-white/70 hover:text-white border border-white/10 hover:border-[#ff5a1f] text-[11px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm disabled:opacity-50 group"
              title="Download project source code as a ZIP archive"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>ZIP Downloaded!</span>
                </>
              ) : downloading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                  <span>Packaging ZIP...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#ff5a1f] group-hover:text-white transition-colors" />
                  <span>Download ZIP</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

