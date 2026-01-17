import React, { useState } from 'react';
import ComparisonSlider from './ComparisonSlider';
import { Layers, Droplets, Sun, ArrowRight, Sparkles } from 'lucide-react';

const modules = [
  {
    id: 'exterior',
    label: 'Weather Synthesis',
    icon: Sun,
    beforeLabel: 'Grey Sky',
    afterLabel: 'Golden Hour',
    image: 'https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070',
    description: 'Replace flat shipyard lighting with dynamic "Golden Hour" or "High Noon" sun.',
  },
  {
    id: 'water',
    label: 'Digital Water',
    icon: Droplets,
    beforeLabel: 'Dry Dock',
    afterLabel: 'Deep Ocean',
    image: 'https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=2070',
    description: 'Place the hull in realistic motion-blurred water, removing all land elements.',
  },
  {
    id: 'refit',
    label: 'Virtual Refit',
    icon: Layers,
    beforeLabel: 'Dated',
    afterLabel: 'Modern',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070',
    description: 'Digitally reupholster furniture, declutter surfaces, and stage lifestyle elements.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[1]);

  return (
    <section id="engine" className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Mobile Order: Image (2) -> Controls (1). Desktop: Controls (1) -> Image (2) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content & Controls (Order 2 on Mobile) */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 w-full">
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-neon" />
                        <span className="text-dark text-[10px] font-bold uppercase tracking-[0.3em]">
                            The Transformation Engine
                        </span>
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                        From Warehouse <br/>
                        <span className="text-gray-400">To Water.</span>
                    </h2>
                    <p className="text-gray-500 text-base font-light leading-relaxed max-w-md">
                        Our proprietary compositing pipeline handles the three most critical factors in nautical sales: Light, Liquid, and Lifestyle.
                    </p>
                </div>

                <div className="space-y-4">
                    {modules.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => setActiveModule(mod)}
                            className={`relative w-full text-left p-6 rounded-sm border transition-all duration-300 group flex items-start gap-5 overflow-hidden ${
                                activeModule.id === mod.id 
                                ? 'bg-premium-silver border-white/50 shadow-2xl scale-[1.02] ring-1 ring-white/60' // Premium Silver Active State
                                : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-lg'
                            }`}
                        >
                            {/* Metallic Sheen Effect (Stronger on active) */}
                            <div className={`absolute top-0 left-0 w-full h-full transform -translate-x-full transition-transform duration-700 group-hover:animate-shine ${activeModule.id === mod.id ? 'bg-gradient-to-r from-transparent via-white/60 to-transparent' : 'bg-gradient-to-r from-transparent via-silver/40 to-transparent'}`} style={{ width: '200%', left: '-50%' }}></div>

                            {/* Icon Container */}
                            <div className={`relative z-10 mt-1 w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${activeModule.id === mod.id ? 'bg-dark text-neon shadow-lg' : 'bg-gray-100 text-gray-400 group-hover:bg-silver group-hover:text-dark'}`}>
                                <mod.icon className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            
                            <div className="relative z-10 flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className={`font-bold text-sm uppercase tracking-widest transition-colors ${activeModule.id === mod.id ? 'text-dark' : 'text-gray-500 group-hover:text-dark'}`}>
                                        {mod.label}
                                    </h3>
                                    {activeModule.id === mod.id && <ArrowRight className="w-4 h-4 text-dark" />}
                                </div>
                                <p className={`text-xs leading-relaxed max-w-[90%] transition-colors ${activeModule.id === mod.id ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {mod.description}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Visualizer (Order 1 on Mobile) */}
            <div className="lg:col-span-7 order-1 lg:order-2 w-full">
                <div className="relative rounded-sm shadow-2xl shadow-gray-200 border border-gray-100 bg-white p-2">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 -mt-12 flex justify-end mb-4 lg:mb-0">
                         <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-t-sm border-t border-x border-gray-100 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                            Active Layer: <span className="text-neonHover">{activeModule.label}</span>
                         </div>
                    </div>

                    <ComparisonSlider 
                        key={activeModule.id} 
                        image={activeModule.image}
                        labelBefore={activeModule.beforeLabel}
                        labelAfter={activeModule.afterLabel}
                        aspectRatio="aspect-[4/3] lg:aspect-[16/10]"
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalStaging;