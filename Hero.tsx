import React from 'react';
import Button from './Button';
import { ArrowDown, Check, Zap, TrendingUp, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 -z-0 transform skew-x-12 translate-x-32 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      {/* Animation Styles: Switched to clip-path for perfect image alignment */}
      <style>{`
        @keyframes scan-clip {
          0%, 100% { clip-path: inset(0 85% 0 0); }
          50% { clip-path: inset(0 15% 0 0); }
        }
        @keyframes scan-line {
          0%, 100% { left: 15%; }
          50% { left: 85%; }
        }
        .animate-scanner-clip {
          animation: scan-clip 6s ease-in-out infinite;
        }
        .animate-scanner-line {
          animation: scan-line 6s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pb-8 lg:pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center h-full justify-center">
            
            {/* 
               TEXT SECTION (Mobile: Order 1, Desktop: Order 1) 
               Placed FIRST on mobile as requested.
            */}
            <div className="max-w-2xl flex flex-col justify-center order-1 lg:order-1 text-center lg:text-left mt-4 lg:mt-0">
                <div className="inline-flex items-center gap-2 lg:gap-3 px-3 py-1 lg:px-4 lg:py-1.5 bg-gray-100 border border-gray-200 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4 lg:mb-8 rounded-sm w-fit mx-auto lg:mx-0">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                    Visual Innovation Studio
                </div>
                
                <h1 className="font-display text-5xl lg:text-8xl font-bold text-dark leading-[0.9] mb-4 lg:mb-8 tracking-tighter">
                    We Put <br className="hidden lg:block"/>
                    The Fleet <br className="hidden lg:block"/>
                    <span className="text-gray-300">In Motion.</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-xl max-w-lg mb-6 lg:mb-10 font-light leading-relaxed border-l-2 border-neon pl-4 lg:pl-6 mx-auto lg:mx-0 text-left">
                    Stop using dry-dock photography. We use proprietary AI synthesis to digitally transport your inventory into hyper-realistic nautical environments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center lg:items-center justify-center lg:justify-start w-full">
                     <Button variant="primary" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
                        See The Transformation
                    </Button>
                    
                    <div className="flex items-center gap-3 pl-2 scale-90 lg:scale-100">
                        <div className="flex -space-x-2 lg:-space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                     <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Partner" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex gap-1 mb-1">
                                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-neon rounded-full"></div>)}
                            </div>
                            <span className="text-[8px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trusted by 30+ Brokerages</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
               VISUAL SECTION (Mobile: Order 2, Desktop: Order 2) 
               Placed SECOND on mobile.
            */}
            <div className="w-full order-2 lg:order-2 flex items-center justify-center lg:h-full pb-10 lg:pb-0">
                <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 group select-none bg-dark max-h-[40vh] lg:max-h-none">
                    
                    {/* Base Image: Dry Dock (Grayscale/Raw) */}
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070" 
                            alt="Dock State"
                            className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
                        />
                        <div className="absolute top-3 left-3 lg:top-6 lg:left-6 bg-black/50 backdrop-blur-md px-2 py-1 lg:px-3 lg:py-1.5 rounded-sm border border-white/10 z-20">
                             <span className="text-white/60 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest">Raw Input // Dock</span>
                        </div>
                    </div>

                    {/* Overlay Image: MVS Ocean (Full Color) - Masked by Clip Path */}
                    <div className="absolute inset-0 animate-scanner-clip bg-gray-200/5 backdrop-grayscale-0 z-10">
                         <img 
                            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070" 
                            alt="MVS Output"
                            className="w-full h-full object-cover saturate-[1.2]" 
                        />
                         <div className="absolute top-3 right-3 lg:top-6 lg:right-6 pr-4 bg-neon px-2 py-1 lg:px-3 lg:py-1.5 rounded-sm shadow-lg">
                             <span className="text-dark text-[8px] lg:text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <Zap className="w-3 h-3 fill-dark" /> MVS Synthesized
                             </span>
                        </div>
                    </div>

                    {/* Scanner Line Glow - Follows the clip edge */}
                    <div className="absolute inset-y-0 w-1 lg:w-1.5 bg-neon shadow-[0_0_20px_rgba(204,243,129,0.8)] z-20 animate-scanner-line opacity-80"></div>

                    {/* Stats / Benefits Overlay - Compact on Mobile */}
                    <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 grid grid-cols-2 gap-2 lg:gap-4 z-20">
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 lg:p-4 rounded-sm flex items-center gap-2 lg:gap-4">
                            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center text-neon shrink-0">
                                <TrendingUp className="w-3 h-3 lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <span className="block text-neon text-sm lg:text-xl font-display font-bold">+420%</span>
                                <span className="text-white/60 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest leading-none">Visits</span>
                            </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 lg:p-4 rounded-sm flex items-center gap-2 lg:gap-4">
                            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">
                                <Clock className="w-3 h-3 lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <span className="block text-white text-sm lg:text-xl font-display font-bold">3.5x</span>
                                <span className="text-white/60 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest leading-none">Speed</span>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Floating Decorative Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-neon/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
            </div>

        </div>

        {/* Scroll Prompt - Compact Position */}
        <div className="absolute bottom-2 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 lg:gap-3 opacity-30 animate-pulse cursor-pointer z-20" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-[8px] lg:text-[9px] uppercase tracking-[0.4em] font-bold text-dark">Scroll</span>
            <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;