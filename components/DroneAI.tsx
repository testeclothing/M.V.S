import React from 'react';
import { Play, Aperture, Activity, Wifi } from 'lucide-react';
import Button from './Button';

const DroneAI: React.FC = () => {
  return (
    <section id="drone" className="bg-void border-t border-white/5 overflow-hidden relative">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-10" 
         style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        
        {/* Visual Side */}
        <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 group overflow-hidden cursor-pointer border-l border-white/10">
            {/* Tech Overlays */}
            <div className="absolute top-10 left-10 z-20 flex space-x-1">
                <div className="w-2 h-2 bg-red-500 animate-pulse"></div>
                <div className="w-2 h-2 bg-red-500 animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-red-500 animate-pulse delay-150"></div>
            </div>
            
            <div className="absolute bottom-10 right-10 z-20 font-tech text-cyan-400 text-xs tracking-widest bg-black/60 px-2 py-1 border border-cyan-400/30">
                REC [ 00:12:45:09 ]
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full animate-pulse"></div>
                    <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 relative z-10">
                        <Play className="w-10 h-10 text-cyan-400 ml-1 fill-cyan-400/20" />
                    </div>
                </div>
            </div>
            
            <img 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" 
                alt="Drone view of yacht" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] filter sepia-[.2] contrast-125"
            />
        </div>

        {/* Content Side */}
        <div className="p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1 relative bg-gradient-to-br from-slate-950 to-midnight z-10">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            
            <div className="flex items-center space-x-4 mb-8">
                <Aperture className="w-6 h-6 text-gold-400 animate-spin-slow" />
                <span className="text-gray-500 text-xs font-tech font-bold tracking-[0.2em] uppercase">
                    Motion Intelligence
                </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">
                Cinematic <br/> <span className="text-cyan-400">Synthesis</span>
            </h2>
            
            <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-md font-tech tracking-wide border-l-2 border-cyan-900 pl-6">
                Stabilize. Grade. Upscale. <br/>
                We turn standard flight logs into <span className="text-white">cinematic gold</span> using advanced motion-vector analysis.
            </p>

            {/* Data Grid Spec Sheet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                    { label: 'Stabilization', val: '6-Axis Gyro', icon: Activity },
                    { label: 'Uplink', val: '5G Low Latency', icon: Wifi },
                    { label: 'Resolution', val: '8K Upscaling', icon: Aperture },
                    { label: 'Frame Rate', val: '120 FPS RAW', icon: Play },
                ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-4 border border-white/5 hover:border-cyan-400/30 transition-colors group">
                        <div className="flex items-center">
                            <spec.icon className="w-4 h-4 text-gray-500 mr-3 group-hover:text-cyan-400" />
                            <span className="text-xs font-tech text-gray-400 uppercase">{spec.label}</span>
                        </div>
                        <span className="text-sm font-tech font-bold text-white group-hover:text-gold-400 shadow-cyan-500/50">{spec.val}</span>
                    </div>
                ))}
            </div>

            <div>
                <Button variant="primary">
                    Access Flight Data
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DroneAI;