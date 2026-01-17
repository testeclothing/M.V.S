import React, { useState } from 'react';
import { PieChart, Sparkles } from 'lucide-react';
import Button from './Button';

const ROICalculator: React.FC = () => {
  // Defaults set for a clear visual difference
  const [photographerCost, setPhotographerCost] = useState(1500);
  const [logisticsCost, setLogisticsCost] = useState(800);

  const mvsRate = 850;
  const traditionalCost = photographerCost + logisticsCost;
  const savings = traditionalCost - mvsRate;
  
  // Dynamic scaling: Set maxRef to 6000 to accommodate max inputs (5000) + label space
  // This prevents bars from overflowing or clipping at high values
  const maxRef = 6000; 
  const tradHeight = Math.min((traditionalCost / maxRef) * 100, 100);
  const mvsHeight = Math.min((mvsRate / maxRef) * 100, 100);

  return (
    <section id="roi" className="py-8 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 hidden lg:block pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 items-stretch lg:items-center">
            
            {/* Left Column (Desktop) / Bottom (Mobile): Controls & Narrative */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                <div className="hidden lg:block">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <PieChart className="w-4 h-4 text-dark" />
                        <span className="text-dark text-[10px] font-bold uppercase tracking-[0.3em]">
                            Financial Logic
                        </span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                        Stop Burning <br/>
                        <span className="text-gray-400">Your Commission.</span>
                    </h2>
                    
                    <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 border-l-2 border-neon pl-6">
                        Traditional photography is a logistics tax. Weather days, crew fees, and fuel costs eat your margin. MVS turns overhead into profit.
                    </p>
                </div>

                {/* Input Controls - Compact for Mobile */}
                <div className="bg-gray-50 p-5 lg:p-8 rounded-sm lg:rounded-sm rounded-t-none border-x border-b lg:border border-gray-100 space-y-6 lg:space-y-10 shadow-sm transition-shadow duration-500">
                    <div className="group">
                        <div className="flex justify-between items-end mb-2 lg:mb-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-dark transition-colors">Photographer Day Rate</label>
                            <span className="font-display font-bold text-dark text-lg lg:text-2xl">${photographerCost}</span>
                        </div>
                        <input 
                            type="range" min="500" max="3000" step="50"
                            value={photographerCost}
                            onChange={(e) => setPhotographerCost(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon hover:accent-neonHover transition-all outline-none"
                        />
                        <div className="flex justify-between text-[8px] lg:text-[9px] text-gray-300 mt-2 font-bold uppercase tracking-widest">
                            <span>Junior</span>
                            <span>World Class</span>
                        </div>
                    </div>

                    <div className="group">
                        <div className="flex justify-between items-end mb-2 lg:mb-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-dark transition-colors">Fuel, Crew & Logistics</label>
                            <span className="font-display font-bold text-dark text-lg lg:text-2xl">${logisticsCost}</span>
                        </div>
                        <input 
                            type="range" min="0" max="2000" step="50"
                            value={logisticsCost}
                            onChange={(e) => setLogisticsCost(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon hover:accent-neonHover transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="hidden lg:block mt-10">
                    <Button variant="primary" onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}>
                        Start Efficiency Audit
                    </Button>
                </div>
            </div>

            {/* Right Column (Desktop) / Top (Mobile): Visualization Card */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                
                {/* Mobile Title */}
                <div className="lg:hidden mb-4 text-center">
                     <h2 className="font-display text-2xl font-bold text-dark">
                        Cost Logic
                    </h2>
                </div>

                {/* PREMIUM SILVER CARD */}
                <div className="bg-premium-silver p-6 lg:p-14 rounded-sm lg:rounded-sm rounded-b-none shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px] lg:min-h-[550px] border border-white group transition-all duration-300">
                    
                    {/* Metallic Sheen Overlay */}
                    <div className="absolute inset-0 bg-metallic-shine opacity-50 pointer-events-none"></div>

                    {/* Card Header */}
                    <div className="flex justify-between items-start relative z-10 mb-6 lg:mb-12">
                        <div>
                             <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1 lg:mb-2">Cost Per Listing</span>
                             <h3 className="text-xl lg:text-3xl font-display font-bold text-slate-800">Comparison</h3>
                        </div>
                        <div className="text-right">
                             <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1 lg:mb-2">Margin Recovered</span>
                             <div className="relative inline-block">
                                <span className="text-3xl lg:text-5xl font-display font-bold text-slate-900 transition-all duration-300 block relative z-10">
                                    {savings > 0 ? '+' : ''}${savings.toLocaleString()}
                                </span>
                                {/* Subtle neon underline/glow */}
                                <div className="absolute -bottom-1 left-0 w-full h-3 bg-neon/30 blur-sm -z-0"></div>
                             </div>
                        </div>
                    </div>

                    {/* Graph Area - Fixed height container to ensure percentages work properly */}
                    <div className="flex-1 flex items-end justify-center gap-8 lg:gap-24 relative z-10 pb-2 border-l border-slate-200 pl-4 lg:pl-8 h-[300px]">
                        
                        {/* Traditional Bar (Cost) - Receding Grey */}
                        <div className="flex flex-col items-center justify-end gap-2 lg:gap-3 group/bar w-16 lg:w-24 h-full">
                             <span className="font-display font-bold text-lg lg:text-2xl text-slate-400 group-hover/bar:text-slate-600 transition-colors duration-500">${traditionalCost}</span>
                             <div 
                                className="w-full bg-gray-400 rounded-t-sm relative transition-all duration-500 ease-in-out border border-white/40 group-hover/bar:bg-gray-500 backdrop-blur-sm shadow-inner will-change-[height]"
                                style={{ height: `${tradHeight}%`, minHeight: '10px' }}
                             ></div>
                             <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center leading-tight">Traditional<br/>Shoot</span>
                        </div>

                        {/* MVS Bar (Cost) - Premium Dark Onyx/Gunmetal */}
                        <div className="flex flex-col items-center justify-end gap-3 w-16 lg:w-24 relative h-full">
                             <span className="font-display font-bold text-lg lg:text-2xl text-slate-900">${mvsRate}</span>
                             <div 
                                className="w-full bg-gradient-to-b from-slate-800 to-black rounded-t-sm relative transition-all duration-500 ease-in-out shadow-[0_10px_20px_rgba(0,0,0,0.2)] overflow-hidden will-change-[height]"
                                style={{ height: `${mvsHeight}%`, minHeight: '10px' }}
                             >
                                {/* Silver Sheen Animation on the dark bar */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></div>
                             </div>
                             
                             <div className="flex flex-col items-center gap-2 mt-1">
                                 <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-800 text-center leading-tight">MVS<br/>Studio</span>
                                 
                                 {/* Savings Badge - Neon on Silver (Pop!) */}
                                 {savings > 0 && (
                                     <div className="bg-neon border border-neon/50 px-2 lg:px-3 py-1 lg:py-1.5 rounded-sm flex items-center justify-center shadow-lg shadow-neon/20 transform hover:scale-105 transition-transform cursor-default absolute -bottom-10 lg:static whitespace-nowrap z-20">
                                        <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                            Save ${savings.toLocaleString()}
                                        </span>
                                     </div>
                                 )}
                             </div>
                        </div>

                    </div>

                    {/* Bottom Tip (Desktop Only) */}
                    <div className="hidden lg:block relative z-10 pt-8 border-t border-slate-200 mt-8">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm text-neonHover">
                                <Sparkles className="w-3.5 h-3.5 fill-neonHover" />
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                <span className="text-slate-900 font-bold">Reinvest the difference.</span> By switching to MVS, you unlock capital to deploy on targeted ad-spend, increasing listing visibility.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;