
import React, { useState, useEffect } from 'react';
import { 
  Waves, Cpu, Globe, Zap, MapPin, Layers, ChevronRight, ShieldCheck, 
  Info, ExternalLink, Droplets, Microscope, Satellite, Search, 
  MessageSquare, X, Battery, Wind, Activity, Sun, Moon, Database, Signal, BrainCircuit
} from 'lucide-react';

// --- Sub-components ---

const RowbotVisual = ({ className, exploded = false }: { className?: string, exploded?: boolean }) => {
  return (
    <div className={`relative ${className} ${!exploded ? 'animate-float' : ''}`}>
      <div className={`flex flex-col items-center transition-all duration-1000 ${exploded ? 'gap-20' : 'gap-[-20px]'}`}>
        
        {/* Layer 1: Schematic Solar Top */}
        <div className={`relative w-80 h-28 transition-all duration-700 z-40 ${exploded ? 'translate-y-0 opacity-100' : 'translate-y-24'}`}>
          <div className="absolute inset-0 border-2 border-orange-500/60 rounded-[100%/50%] bg-orange-500/10 flex items-center justify-center overflow-hidden">
            <div className="w-[85%] h-[75%] bg-slate-900/90 rounded-[100%/50%] border border-orange-400/30 flex items-center justify-center">
              <div className="grid grid-cols-8 gap-1 opacity-20">
                {[...Array(32)].map((_, i) => <div key={i} className="w-4 h-3 bg-orange-400 border-[0.5px] border-orange-300/40" />)}
              </div>
            </div>
            <div className="absolute top-6 left-1/4 w-4 h-4 rounded-full border border-orange-400/50 bg-slate-800" />
            <div className="absolute top-6 right-1/4 w-5 h-5 rounded-full border border-orange-400/50 bg-slate-800" />
          </div>
          {exploded && (
            <div className="absolute -right-44 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="w-12 h-px bg-orange-500/50" />
              <div className="flex flex-col max-w-[140px]">
                <span className="text-[10px] uppercase tracking-widest font-black text-orange-600 leading-tight">INTEGRATED<br/>SOLAR DECK</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase leading-tight mt-1">WOULD HARVEST HIGH-EFFICIENCY ENERGY</span>
              </div>
            </div>
          )}
        </div>

        {/* Layer 2: Schematic Payload Tray */}
        <div className={`relative w-72 h-36 transition-all duration-700 z-30 ${exploded ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0 scale-95'}`}>
          <div className="absolute inset-0 glass rounded-[3rem] border-2 border-cyan-500/40 flex items-center justify-center shadow-2xl bg-white/5">
            <div className="grid grid-cols-2 gap-6 p-4 text-center">
               <div className="flex flex-col items-center gap-1">
                 <Cpu className="text-cyan-600" size={20} />
                 <span className="text-[8px] font-black uppercase text-slate-500">TINYML CORE</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <Globe className="text-orange-500" size={20} />
                 <span className="text-[8px] font-black uppercase text-slate-500">GNSS RECEIVER</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <Battery className="text-green-600" size={20} />
                 <span className="text-[8px] font-black uppercase text-slate-500">LIFEPO4 STORAGE</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <Zap className="text-yellow-600" size={20} />
                 <span className="text-[8px] font-black uppercase text-slate-500">CHARGE LOGIC</span>
               </div>
            </div>
          </div>
          {exploded && (
            <div className="absolute -left-52 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="flex flex-col text-right max-w-[140px]">
                <span className="text-[10px] uppercase tracking-widest font-black text-cyan-700 leading-tight">ONBOARD<br/>INTELLIGENCE</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase leading-tight mt-1">MULTI-CONSTELLATION SYNC ENGINE</span>
              </div>
              <div className="w-12 h-px bg-cyan-500/50" />
            </div>
          )}
        </div>

        {/* Layer 3: Schematic Hull Base */}
        <div className={`relative w-80 h-32 transition-all duration-700 z-20 ${exploded ? 'translate-y-0 opacity-100' : '-translate-y-24'}`}>
           <div className="absolute inset-0 border-2 border-orange-600/60 rounded-[100%/50%] bg-orange-500/5">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-orange-400/40 bg-slate-900/60 flex flex-col items-center justify-center">
                <div className="w-0.5 h-6 bg-cyan-400/50" />
                <div className="flex gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]" />
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]" />
                </div>
             </div>
             
             <div className="absolute -bottom-4 right-12 flex flex-col items-center">
                <div className="w-10 h-2 bg-slate-800 border border-orange-400/20 rounded-sm" />
                <div className="w-0.5 h-14 bg-slate-700" />
                <div className="w-16 h-10 bg-slate-800 border-2 border-orange-500/30 rounded-md flex items-center justify-center">
                   <div className="w-5 h-5 border border-dashed border-orange-400 rounded-full animate-spin" />
                </div>
             </div>
           </div>
           {exploded && (
            <div className="absolute -right-44 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="w-12 h-px bg-orange-500/50" />
              <div className="flex flex-col max-w-[140px]">
                <span className="text-[10px] uppercase tracking-widest font-black text-orange-600 leading-tight">DYNAMIC<br/>REPOSITIONING</span>
                <span className="text-[8px] text-slate-500 font-bold uppercase leading-tight mt-1">WOULD FEATURE HIGH-TORQUE PROPULSION</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`absolute top-0 right-20 w-0.5 h-80 bg-slate-400 origin-bottom transition-all duration-1000 ${exploded ? '-translate-y-32' : '-translate-y-64 opacity-50'}`} />
    </div>
  );
};

const LisbonMeshMap = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 1000 600" className={`w-full h-full p-8 transition-opacity duration-700 ${isDark ? 'text-white/80' : 'text-slate-300'}`}>
        {/* Stylized Tagus River Path */}
        <path 
          d="M0,480 C150,450 250,400 350,420 C500,450 600,580 800,520 C950,460 1000,200 1000,0" 
          fill="none" 
          stroke={isDark ? "rgba(249, 115, 22, 0.5)" : "rgba(249, 115, 22, 0.25)"} 
          strokeWidth="60" 
          strokeLinecap="round"
          className="animate-pulse"
        />
        {/* Landmarks */}
        <circle cx="280" cy="380" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="350" cy="360" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="480" cy="500" r="4" fill="currentColor" opacity="0.4" />
        
        {/* ROWBOTS in Tagus */}
        {[
          { x: 180, y: 460, label: 'PT-01' },
          { x: 320, y: 425, label: 'PT-02' },
          { x: 450, y: 465, label: 'PT-03' },
          { x: 620, y: 535, label: 'PT-04' },
          { x: 780, y: 510, label: 'PT-05' },
        ].map((bot, i) => (
          <g key={i}>
            <circle cx={bot.x} cy={bot.y} r="12" fill="#f97316" className="animate-ping" style={{ animationDuration: `${2.5 + i * 0.5}s` }} />
            <circle cx={bot.x} cy={bot.y} r="6" fill="#f97316" className="shadow-lg" />
            <text x={bot.x + 10} y={bot.y - 12} className="text-[10px] font-black uppercase tracking-tighter" fill="#f97316">{bot.label}</text>
          </g>
        ))}
      </svg>
      
      <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[2.5rem] border-orange-500/30 flex items-center justify-between shadow-2xl">
        <div>
           <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-[0.2em]">MESH STATUS: TAGUS ESTUARY</p>
           <p className="text-2xl font-black text-orange-600 uppercase tracking-tighter">GLOBAL SYNC ACTIVE</p>
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-orange-500/20 flex items-center justify-center bg-orange-500/5">
          <Signal className="text-orange-600 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [counts, setCounts] = useState({ pt: 0, br: 0, in: 0 });
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? 'dark bg-[#020617] text-[#f8fafc]' : 'light bg-slate-50 text-slate-900';
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        pt: Math.min(prev.pt + 1, 14),
        br: Math.min(prev.br + 180, 12400),
        in: Math.min(prev.in + 5, 520)
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-500/30 transition-colors duration-500 blueprint-grid relative overflow-x-hidden">
      <div className="fixed inset-0 disk-pattern -z-10 opacity-30 pointer-events-none" />

      {/* Cookie Banner - Updated Text */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-4xl mx-auto glass rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 border-orange-500/40 shadow-2xl">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-orange-600 shrink-0" size={24} />
              <p className={`text-sm leading-relaxed font-bold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                Rowbot is <span className="text-orange-600">EU LGPD compliant</span>. We use zero cookies. Local data only. Your privacy is our baseline.
              </p>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="px-8 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all shadow-lg shadow-orange-950/20 shrink-0"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 glass border-b ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rowbot-hull rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
               <Waves className="text-white" size={18} />
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase ${isDark ? 'text-white' : 'text-slate-950'}`}>Rowbot</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <a href="#problem" className="hover:text-orange-600 transition-colors">Crisis</a>
            <a href="#tech" className="hover:text-orange-600 transition-colors">Engineering</a>
            <a href="#video" className="hover:text-orange-600 transition-colors">Showcase</a>
            <a href="#university" className="hover:text-orange-600 transition-colors">Nodes</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="p-3 rounded-full border border-orange-500/20 text-orange-600 hover:bg-orange-600/10 transition-all">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="hidden sm:block px-8 py-3 bg-orange-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 shadow-xl shadow-orange-950/20">
              Technical Paper
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 relative z-10">
            <div className={`inline-flex items-center gap-4 px-5 py-2 glass rounded-full border-orange-500/30`}>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-600">MISSION: DEMOCRATIZE SENSING</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              <span className="gradient-text">AUTONOMOUS</span> <br />
              <span className={isDark ? 'text-white' : 'text-slate-950'}>RIVER</span> <br />
              <span className={isDark ? 'text-slate-800' : 'text-slate-300'}>INTELLIGENCE.</span>
            </h1>
            <div className={`glass p-12 rounded-[3.5rem] border ${isDark ? 'border-white/5' : 'border-slate-200 shadow-2xl'} space-y-8 relative overflow-hidden group`}>
              <p className={`text-xl md:text-2xl ${isDark ? 'text-slate-200' : 'text-slate-800'} leading-relaxed font-light italic`}>
                "We aren’t merely measuring water; we’re giving rivers a voice. At 17, I saw the missing link: a global, transparent index powered by dense networks of inexpensive, intelligent sensors which are impartial, always connected, resilient, self-reliant, and sustained by the very communities they serve."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 overflow-hidden border-2 border-white/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className={`font-black text-sm tracking-widest uppercase ${isDark ? 'text-white' : 'text-slate-950'}`}>Aditya</p>
                  <p className="text-[10px] text-orange-600 uppercase tracking-widest font-black">Lead Systems Architect</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
             <div className="absolute inset-0 bg-orange-500/10 blur-[180px] rounded-full animate-pulse-slow -z-10" />
             <RowbotVisual className="scale-110 md:scale-125" />
          </div>
        </div>
      </section>

      {/* The Problem Section - Updated Contrast */}
      <section id="problem" className={`py-32 px-6 border-y relative overflow-hidden ${isDark ? 'bg-slate-950/50 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.6em]">The Global Crisis</h2>
            <h3 className={`text-5xl md:text-7xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>DATA BLINDNESS.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                city: 'Portugal Node', 
                issue: 'Regulatory Lag', 
                desc: 'Slow certification and expensive legacy hardware would leave rivers, lakes and estuaries unmonitored.', 
                stat: counts.pt, unit: 'mo', label: 'Potential Cert. Cycle', 
                color: isDark ? 'border-indigo-500/20' : 'border-indigo-200 bg-white shadow-xl',
                textColor: isDark ? 'text-slate-400' : 'text-slate-900',
                statColor: isDark ? 'text-white' : 'text-slate-900'
              },
              { 
                city: 'Brazil Node', 
                issue: 'Geographic Scale', // Updated to Black in Light Mode
                desc: 'The Amazon basin is too vast for manual maintenance. Satellite-first autonomous nodes will be the only scalable answer.', 
                stat: counts.br.toLocaleString(), unit: 'km²', label: 'Unmonitored Basin', 
                color: 'border-orange-500/50 bg-orange-500/[0.1] shadow-2xl scale-105 z-10',
                highlight: true,
                textColor: isDark ? 'text-white' : 'text-black', // FORCE BLACK IN LIGHT MODE
                statColor: isDark ? 'text-white' : 'text-black'  // FORCE BLACK IN LIGHT MODE
              },
              { 
                city: 'India Node', 
                issue: 'Urban Flux', 
                desc: 'Urban runoff in the Yamuna will reach toxic thresholds in minutes. Legacy weekly sampling would be ineffective for real-time risk.', 
                stat: counts.in, unit: 'M+', label: 'Citizens at Risk', 
                color: isDark ? 'border-cyan-500/20' : 'border-cyan-200 bg-white shadow-xl',
                textColor: isDark ? 'text-slate-400' : 'text-slate-900',
                statColor: isDark ? 'text-white' : 'text-slate-900'
              }
            ].map((node, i) => (
              <div key={i} className={`glass rounded-[3.5rem] p-12 border transition-all ${node.color}`}>
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] mono uppercase font-black ${isDark ? 'text-slate-500' : 'text-slate-900'}`}>{node.city}</span>
                    <Activity size={24} className={node.highlight ? 'text-orange-600' : 'text-slate-400'} />
                  </div>
                  <h4 className={`text-2xl font-black uppercase tracking-tight ${node.textColor}`}>{node.issue}</h4>
                  <p className={`text-sm leading-relaxed font-bold ${isDark || node.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{node.desc}</p>
                  <div className={`pt-10 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                    <div className="flex items-baseline gap-2">
                       <p className={`text-5xl font-black ${node.statColor}`}>{node.stat}</p>
                       <p className="text-xl font-bold text-orange-600">{node.unit}</p>
                    </div>
                    <p className={`text-[11px] uppercase font-black tracking-widest mt-3 ${isDark ? 'text-slate-500' : 'text-slate-900'}`}>{node.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Blueprint Section */}
      <section id="tech" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em]">System Architecture</h2>
              <h3 className={`text-5xl md:text-6xl font-black leading-none ${isDark ? 'text-white' : 'text-slate-950'}`}>B-DISK <br />PROPOSED DESIGN.</h3>
            </div>
            
            <div className="flex flex-col gap-5">
              {[
                {id: 'tinyml', label: 'TinyML Edge Intelligence', icon: Cpu, desc: 'Locally normalized features would be evaluated by pre-trained neural networks to minimize satellite energy costs.'},
                {id: 'anchoring', label: 'Virtual Anchoring (GPS/IMU)', icon: Wind, desc: 'Brushless thrusters would pulse to counteract drift, maintaining a 5m geopose without physical riverbed damage.'},
                {id: 'uvc', label: 'Bio-Fouling Mitigation', icon: Zap, desc: 'A UV-C LED ring would sterilize optic windows every 4 hours, ensuring 12-month mission cycles without manual cleaning.'}
              ].map(tab => (
                <button 
                  key={tab.id}
                  className={`flex flex-col gap-3 p-10 rounded-[3rem] text-left transition-all border ${isDark ? 'glass border-white/5' : 'bg-white border-slate-200 shadow-xl'} hover:border-orange-500/40`}
                >
                  <div className="flex items-center gap-4">
                    <tab.icon size={22} className="text-orange-600" />
                    <span className={`text-xs font-black uppercase tracking-[0.2em] ${isDark ? 'text-white' : 'text-slate-950'}`}>{tab.label}</span>
                  </div>
                  <p className={`text-sm leading-relaxed font-bold ${isDark ? 'text-slate-500' : 'text-slate-700'}`}>{tab.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className={`glass rounded-[4rem] p-16 aspect-[4/5] border relative overflow-hidden flex flex-col items-center justify-center ${isDark ? 'border-white/5' : 'border-slate-200 shadow-2xl bg-white'}`}>
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <RowbotVisual exploded={true} className="scale-90" />
            <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Future Revision</span>
              <span className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>B-DISK v2.4</span>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="video" className={`py-32 px-6 ${isDark ? 'bg-slate-950/20' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em]">Visionary Showcase</h2>
            <h3 className={`text-5xl md:text-6xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>MEET THE FOUNDER.</h3>
          </div>
          <div className={`glass rounded-[4rem] border p-1 ${isDark ? 'border-white/5' : 'border-slate-200 shadow-2xl'} aspect-video overflow-hidden`}>
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/KujJc9zQWrU?si=ceqWmEODtQTY3wXe" 
              title="Rowbot Showcase" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* University Map */}
      <section id="university" className={`py-32 px-6 border-y relative ${isDark ? 'bg-slate-900/10 border-white/5' : 'bg-slate-100 border-slate-200 shadow-inner'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em]">Proposed Node Fabric</h2>
            <h3 className={`text-5xl md:text-6xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>SCIENTIFIC<br />PARTNERSHIP.</h3>
            <p className={`text-lg leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
              The Row-Net will be a decentralized collaboration. Each node will be a physical gateway to a local basin, operated by top-tier academic institutions to ensure transparent data governance.
            </p>
            <div className="grid grid-cols-1 gap-5">
               {[
                 { uni: 'Portugal National University Eg. IST', basin: 'Tagus Estuary Node', url: 'https://tecnico.ulisboa.pt/', color: 'bg-indigo-500' },
                 { uni: 'Brazilian State University Eg. USP', basin: 'Amazon Reach Node', url: 'https://www.usp.br/', color: 'bg-orange-500' },
                 { uni: 'Engineering school Eg. IIT Delhi', basin: 'Yamuna Restoration Node', url: 'https://home.iitd.ac.in/', color: 'bg-cyan-500' }
               ].map((node, i) => (
                 <a 
                   key={i} 
                   href={node.url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={`glass p-8 rounded-3xl border flex items-center justify-between group transition-all ${isDark ? 'border-white/5' : 'border-slate-200'} hover:border-orange-500/40`}
                 >
                   <div className="flex items-center gap-6">
                     <div className={`w-3.5 h-3.5 rounded-full ${node.color} shadow-lg shadow-black/20`} />
                     <div>
                       <h6 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>{node.uni}</h6>
                       <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">{node.basin}</p>
                     </div>
                   </div>
                   <ExternalLink size={20} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                 </a>
               ))}
            </div>
          </div>
          <div className={`glass rounded-[4rem] aspect-square border overflow-hidden relative shadow-2xl ${isDark ? 'border-white/5' : 'border-slate-200 bg-white'}`}>
             <LisbonMeshMap isDark={isDark} />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className={`py-32 px-6 transition-colors duration-1000 ${isDark ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
            <div className="relative shrink-0">
               <div className={`w-72 h-72 rounded-[4rem] overflow-hidden border-8 shadow-2xl transition-all duration-700 ${isDark ? 'border-slate-100' : 'border-slate-900'}`}>
                  <img src="https://picsum.photos/seed/aditya-final/400/400" alt="Aditya" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 rowbot-hull rounded-[2rem] flex items-center justify-center text-white border-8 border-white shadow-2xl animate-float">
                  <Waves size={36} />
               </div>
            </div>
            <div className="space-y-12">
               <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">IMPARTIAL<br />SENTINELS.</h3>
               <div className={`space-y-8 text-2xl leading-relaxed font-light ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                 <p>
                   A river is a living organism, yet we treat its data as a static, bureaucratic artifact. I built Rowbot because environmental truth is a human right, not just a governmental archive.
                 </p>
                 <p>
                   By fusing Edge-ML with autonomous nautical hardware, we will create the first high-density mesh network for rivers—resilient, always-on, and unswayed by institutional noise.
                 </p>
                 <p className={`font-black text-3xl ${isDark ? 'text-slate-950' : 'text-white'}`}>
                   Aditya, 17.<br />
                   <span className="text-sm uppercase tracking-[0.5em] text-orange-600 font-black">Founder & Chief Architect</span>
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-24 px-6 border-t ${isDark ? 'border-white/5 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rowbot-hull rounded-full shadow-lg" />
              <span className={`text-3xl font-black tracking-tighter uppercase ${isDark ? 'text-white' : 'text-slate-950'}`}>Rowbot</span>
            </div>
            <p className={`text-sm max-w-sm leading-relaxed font-bold ${isDark ? 'text-slate-500' : 'text-slate-700'}`}>
              The global mesh for autonomous river monitoring. A 100% decentralized intelligence project for euRobotics 2025.
            </p>
            <div className="flex items-center gap-3">
               <ShieldCheck size={20} className="text-orange-600" />
               <p className={`text-[11px] uppercase tracking-widest font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>LGPD SECURE / ZERO-TRACKING POLICY</p>
            </div>
          </div>
          <div className="space-y-8">
             <h6 className={`text-[11px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-white' : 'text-slate-950'}`}>Blueprint Data</h6>
             <ul className={`space-y-4 text-xs font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
               <li><a href="#" className="hover:text-orange-600 transition-colors">Technical PDF (v2.4)</a></li>
               <li><a href="#" className="hover:text-orange-600 transition-colors">Sensor Datasheet</a></li>
               <li><a href="#" className="hover:text-orange-600 transition-colors">TinyML Logic Flow</a></li>
             </ul>
          </div>
          <div className="space-y-8">
             <h6 className={`text-[11px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-white' : 'text-slate-950'}`}>Connect</h6>
             <ul className={`space-y-4 text-xs font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
               <li><a href="mailto:me@aditya.pt" className="hover:text-orange-600 transition-all underline decoration-orange-600/30 underline-offset-8 decoration-2">me@aditya.pt</a></li>
               <li><p>Lisbon / São Paulo / Delhi</p></li>
             </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
