import React from 'react';
import Button from './Button';
import { ArrowDown, Zap, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 -z-0 transform skew-x-12 translate-x-32 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      {/* Animation Settings */}
      <style>{`
        @keyframes scan-clip {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 50% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        @keyframes scan-line {
          0% { left: 0%; }
          50% { left: 50%; }
          100% { left: 100%; }
        }
        .animate-scanner-clip {
          animation: scan-clip 4s ease-in-out infinite alternate;
        }
        .animate-scanner-line {
          animation: scan-line 4s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pb-8 lg:pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full justify-center">
            
            {/* TEXT SECTION */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 text-center lg:text-left mt-4 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 rounded-sm w-fit mx-auto lg:mx-0">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                    AI Virtual Staging
                </div>
                
                <h1 className="font-display text-5xl lg:text-7xl font-bold text-dark leading-[0.95] mb-6 tracking-tighter">
                    Turn Dry Dock <br className="hidden lg:block"/>
                    Photos Into <br className="hidden lg:block"/>
                    <span className="text-gray-400">Sold Yachts.</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-lg max-w-lg mb-8 font-light leading-relaxed border-l-2 border-neon pl-4 mx-auto lg:mx-0 text-left">
                    Don't let bad weather or warehouse lighting kill your listing. We transform static inventory into <span className="text-dark font-medium">high-converting water assets</span> in 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start w-full">
                     <Button variant="primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto shadow-xl shadow-neon/20 hover:shadow-neon/40 transition-all">
                        Start Your Refit
                    </Button>
                    <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors px-6">
                        View Gallery
                    </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 opacity-80">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                 <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Partner" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Used by 40+ Top Brokers</p>
                </div>
            </div>

            {/* VISUAL SECTION */}
            <div className="lg:col-span-7 w-full order-2 flex items-center justify-center relative pb-10 lg:pb-0">
                <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 group bg-gray-100">
                    
                    {/* LEFT IMAGE (Background) - Uses "left.png" */}
                    <div className="absolute inset-0">
                        <img 
                            src="/left.png" 
                            alt="Raw Input"
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10">
                            <span className="text-white/70 text-[9px] font-mono uppercase tracking-widest">RAW INPUT</span>
                        </div>
                    </div>

                    {/* RIGHT IMAGE (Foreground) - Uses "right.png" */}
                    <div className="absolute inset-0 animate-scanner-clip z-10 bg-white">
                         <img 
                            src="/right.jpeg" 
                            alt="MVS Render"
                            className="w-full h-full object-cover saturate-[1.1]" 
                        />
                         <div className="absolute top-4 right-4 bg-neon px-2 py-1 rounded-sm shadow-md">
                             <span className="text-dark text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                <Zap className="w-3 h-3 fill-dark" /> MVS Rendered
                             </span>
                        </div>
                    </div>

                    {/* Scanner Line */}
                    <div className="absolute inset-y-0 w-1 bg-neon shadow-[0_0_20px_rgba(204,243,129,0.8)] z-20 animate-scanner-line opacity-90"></div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2">
                        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-2.5 rounded flex items-center gap-3 w-40 shadow-xl">
                            <div className="w-8 h-8 bg-neon/20 rounded flex items-center justify-center shrink-0">
                                <TrendingUp className="w-4 h-4 text-neon" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm leading-none mb-0.5">3x Leads</div>
                                <div className="text-gray-400 text-[8px] uppercase tracking-wider">vs Standard</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-30 animate-pulse hidden lg:block">
            <ArrowDown className="w-4 h-4 text-dark" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
