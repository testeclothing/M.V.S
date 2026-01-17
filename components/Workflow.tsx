import React from 'react';
import { Upload, Cpu, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Data Transmission",
    desc: "You upload raw visuals (iPhone or DSLR) and hull specifications via our secure studio portal."
  },
  {
    icon: Cpu,
    title: "Engine Synthesis",
    desc: "Our operators configure the MVS Engine to reconstruct lighting, physics, and environment for your specific hull."
  },
  {
    icon: Download,
    title: "Asset Delivery",
    desc: "We return a complete media kit (8K Print & Web) within 24 hours. No revision fatigue."
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
            <h2 className="font-display text-4xl font-bold text-dark">
                The Protocol
            </h2>
            <p className="text-gray-500 font-medium">We handle the compute. You handle the sale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gray-100 z-0 border-t-2 border-dashed border-gray-200"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative z-10 bg-white pt-4">
                    <div className="w-16 h-16 bg-neon text-dark flex items-center justify-center rounded-full mb-8 text-2xl font-bold shadow-lg shadow-neon/40 mx-auto md:mx-0">
                        <step.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-dark mb-4 text-center md:text-left">
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-sm text-center md:text-left">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;