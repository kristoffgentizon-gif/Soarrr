import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCcw, CheckCheck, Sparkles, MessageSquare, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export const SmsChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'user',
      text: "Hi, I need an estimate for replacing our commercial HVAC system.",
      timestamp: '10:04 AM'
    },
    {
      id: 'm2',
      sender: 'ai',
      text: "Hello! Thanks for reaching out to Apex Mechanical. I can certainly help you with that. Is this for a planned replacement or is the existing system currently down?",
      timestamp: '10:04 AM'
    },
    {
      id: 'm3',
      sender: 'user',
      text: "It's an older rooftop unit that stopped cooling yesterday. We have a 4,000 sq ft office.",
      timestamp: '10:05 AM'
    },
    {
      id: 'm4',
      sender: 'ai',
      text: "Got it — that sounds urgent. I have our commercial lead technician available for an on-site diagnostic today between 1:00 PM and 3:00 PM. Would that window work, or would tomorrow morning be better?",
      timestamp: '10:05 AM'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Today between 1:00 PM and 3:00 PM works perfectly.",
    "Can you give me a rough price range first?",
    "Tomorrow morning at 9:00 AM would be better.",
    "Do you service residential homes as well?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic AI response simulation
    setTimeout(() => {
      let aiReply = "Thank you! I have confirmed your appointment and synced it to our dispatch calendar. You'll receive a confirmation SMS with the technician's details shortly. Is there anything else you need?";

      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        aiReply = "Commercial rooftop diagnostics start at $189, and that fee is fully credited toward the repair or replacement if you proceed with us. Would you like me to reserve the 1:00 PM slot today?";
      } else if (lower.includes('tomorrow') || lower.includes('morning')) {
        aiReply = "Perfect. I've locked in tomorrow morning at 9:00 AM for you. Our technician will bring the diagnostic specs for 4,000 sq ft commercial units. What is the street address for the facility?";
      } else if (lower.includes('today') || lower.includes('perfect') || lower.includes('1:00') || lower.includes('works')) {
        aiReply = "Awesome! You are booked for today between 1:00 PM and 3:00 PM. I just notified our dispatch supervisor. What is the exact office address and best callback number?";
      } else if (lower.includes('residential') || lower.includes('home')) {
        aiReply = "Yes! We handle both residential and commercial heating and cooling. For residential calls, we have same-day slots open. Would you like to schedule a home visit?";
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'm1',
        sender: 'user',
        text: "Hi, I saw your ad and wanted to ask about booking a consultation.",
        timestamp: '10:04 AM'
      },
      {
        id: 'm2',
        sender: 'ai',
        text: "Hi there! Thanks for reaching out to Soar Solutions. We build custom AI and automation systems for service businesses. What is your company name and what part of your business are you looking to automate?",
        timestamp: '10:04 AM'
      }
    ]);
  };

  return (
    <section className="relative py-28 bg-[#060403] border-t border-white/[0.08] overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#ff5a1f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Live Demo</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Talk to Our 24/7 AI SMS Assistant.
            </h2>

            <p className="text-base text-[#f5f3ef]/70 leading-relaxed">
              When an ad lead, website form, or missed call happens, our SMS AI engages within seconds. It asks your business's qualifying questions, identifies customer urgency, and books appointments directly onto your calendar.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#ff5a1f]/20 flex items-center justify-center text-[#ff5a1f] shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-sm text-[#f5f3ef]/80">
                  <strong className="text-white">Responds in &lt;30 seconds:</strong> Never lose an interested prospect to a competitor while you're busy on a job.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#ff5a1f]/20 flex items-center justify-center text-[#ff5a1f] shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-sm text-[#f5f3ef]/80">
                  <strong className="text-white">Customized qualification:</strong> Filters out tire-kickers and collects job scope, location, and budget.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#ff5a1f]/20 flex items-center justify-center text-[#ff5a1f] shrink-0 mt-0.5">
                  ✓
                </div>
                <div className="text-sm text-[#f5f3ef]/80">
                  <strong className="text-white">Calendar synchronization:</strong> Directly confirms timeslots without back-and-forth emails.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Demo Conversation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Smartphone SMS Interface */}
          <div className="lg:col-span-7 flex justify-center">
            
            <div className="w-full max-w-[420px] rounded-[36px] bg-[#0c0907] border-[2px] border-white/15 p-4 shadow-2xl shadow-black/95 relative overflow-hidden">
              
              {/* Dynamic Island / Phone Speaker */}
              <div className="w-28 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-8 h-1 rounded-full bg-white/10" />
              </div>

              {/* Chat Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] px-2">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#1c1510] border border-[#ff5a1f]/40 flex items-center justify-center text-[#ff5a1f] font-bold text-xs">
                      S
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black absolute -bottom-0.5 -right-0.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Soar SMS Qualifier</div>
                    <div className="text-[10px] font-mono text-emerald-400">Online • 24/7 Autonomous</div>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors text-xs"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Message Feed Container */}
              <div className="h-[340px] overflow-y-auto px-1 space-y-3 scrollbar-thin">
                <div className="text-center my-2">
                  <span className="text-[10px] font-mono text-white/30 uppercase bg-white/[0.03] px-2.5 py-0.5 rounded-full">
                    Today • SMS Inbound Channel
                  </span>
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#ff5a1f] text-white rounded-br-sm shadow-md shadow-[#ff5a1f]/20'
                          : 'bg-[#18130e] text-[#f5f3ef] border border-white/[0.08] rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-[9px] font-mono text-white/40 px-1">
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-white/60" />}
                    </div>
                  </div>
                ))}

                {/* Simulated typing indicator */}
                {isTyping && (
                  <div className="flex items-start">
                    <div className="bg-[#18130e] border border-white/[0.08] rounded-2xl rounded-bl-sm px-4 py-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Quick Replies */}
              <div className="pt-2 pb-2">
                <div className="text-[10px] font-mono text-white/40 mb-1.5 uppercase px-1">
                  Try a quick response:
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="text-[11px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ff5a1f]/40 text-white/80 hover:text-white px-2.5 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer shrink-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 pt-2 border-t border-white/[0.08]"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type an SMS reply..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff5a1f]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-8 h-8 rounded-xl bg-[#ff5a1f] hover:bg-[#ff6a32] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Bottom Home Indicator Bar */}
              <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-3" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
