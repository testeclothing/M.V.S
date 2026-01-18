import React from 'react';
import Button from './Button';
import { ArrowDown, Zap, TrendingUp, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background: Technical Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-50 -z-10 transform skew-x-12 translate-x-48 hidden lg:block border-l border-gray-100"></div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scan-clip {
          0%, 100% { clip-path: inset(0 60% 0 0); }
          50% { clip-path: inset(0 0% 0 0); }
        }
        @keyframes scan-line {
          0%, 100% { left: 40%; }
          50% { left: 100%; }
        }
        .animate-scanner-clip {
          animation: scan-clip 5s ease-in-out infinite alternate;
        }
        .animate-scanner-line {
          animation: scan-line 5s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pb-8 lg:pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center h-full justify-center">
            
            {/* TEXT SECTION (Left Side - 5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 text-center lg:text-left mt-8 lg:mt-0">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark text-white text-[10px] font-bold uppercase tracking-widest mb-6 rounded-sm w-fit mx-auto lg:mx-0 shadow-xl shadow-neon/20">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                    AI Virtual Staging
                </div>
                
                {/* Headline: Punchy and Benefit Driven */}
                <h1 className="font-display text-5xl lg:text-7xl font-bold text-dark leading-[0.95] mb-6 tracking-tighter">
                    Turn Dry Dock <br className="hidden lg:block"/>
                    Photos Into <br className="hidden lg:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-500">Sold Yachts.</span>
                </h1>

                {/* Subhead: Explains the 'How' and 'Why' */}
                <p className="text-gray-500 text-base lg:text-lg max-w-lg mb-8 font-light leading-relaxed mx-auto lg:mx-0">
                    Don't let bad weather or warehouse lighting kill your listing. We transform static inventory into <span className="text-dark font-medium">high-converting on-water assets</span> in 24 hours.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start w-full">
                     <Button variant="primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto shadow-lg shadow-neon/30 hover:shadow-neon/50 transition-all">
                        Start Your Refit
                    </Button>
                    <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors px-6">
                        View Gallery
                    </button>
                </div>

                {/* Trust Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-4">
                    <div className="flex -space-x-3">
                        <img src="https://i.pravatar.cc/100?img=33" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/100?img=47" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Used by 40+ Top Brokers</p>
                </div>
            </div>

            {/* VISUAL SECTION (Right Side - 7 Columns) */}
            <div className="lg:col-span-7 w-full order-2 flex items-center justify-center relative">
                
                {/* Main Image Container */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-gray-200 group bg-dark">
                    
                    {/* Layer 1: "BEFORE" - The Raw File (Grayscale, Low Contrast) */}
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?q=80&w=2070" 
                            alt="Raw Boat Photo"
                            className="w-full h-full object-cover grayscale opacity-60" 
                        />
                        {/* UI Overlay for 'Raw' state */}
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                             <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-sm border-l-2 border-red-500">
                                <span className="text-white/80 text-[10px] font-mono uppercase tracking-widest">INPUT_RAW.CR2</span>
                             </div>
                        </div>
                    </div>

                    {/* Layer 2: "AFTER" - The MVS Edit (Full Color, Sharp, Clip Path) */}
                    <div className="absolute inset-0 animate-scanner-clip z-10 bg-white">
                         <img 
                            src="https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?q=80&w=2070" 
                            alt="MVS Edited Boat"
                            className="w-full h-full object-cover saturate-[1.1] contrast-[1.1]" 
                        />
                         {/* UI Overlay for 'Processed' state */}
                         <div className="absolute top-6 right-6">
                             <div className="bg-neon px-3 py-1 rounded-sm shadow-xl">
                                <span className="text-dark text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Zap className="w-3 h-3 fill-dark" /> MVS Rendered
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* The Glowing Scanner Line */}
                    <div className="absolute inset-y-0 w-0.5 bg-neon shadow-[0_0_40px_rgba(204,243,129,1)] z-20 animate-scanner-line">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-neon text-dark rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg">
                            <span className="animate-spin opacity-50">⚡</span>
                        </div>
                    </div>

                    {/* Floating Stats Cards (Glassmorphism) */}
                    <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-3">
                        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-3 w-48 shadow-2xl transform translate-x-4 lg:translate-x-0">
                            <div className="p-2 bg-neon/10 rounded-md">
                                <TrendingUp className="w-4 h-4 text-neon" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">3x More Leads</div>
                                <div className="text-gray-400 text-[9px] uppercase tracking-wider">vs Standard Photo</div>
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md border border-white/20 p-3 rounded-lg flex items-center gap-3 w-48 shadow-2xl transform translate-x-8 lg:translate-x-4">
                            <div className="p-2 bg-blue-500/10 rounded-md">
                                <MousePointer2 className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-dark font-bold text-sm">+150% CTR</div>
                                <div className="text-gray-500 text-[9px] uppercase tracking-wider">Listing Traffic</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden lg:block">
            <ArrowDown className="w-5 h-5 text-dark" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
