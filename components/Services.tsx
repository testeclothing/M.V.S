import React from 'react';
import { Layers, CloudSun, Anchor } from 'lucide-react';

const services = [
  {
    title: "Environmental Transfer",
    subtitle: "Dry Dock to Deep Ocean",
    desc: "We extract the vessel from shipyard cradles and composite it into proprietary, hyper-realistic ocean plates. No land in sight.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070"
  },
  {
    title: "Virtual Refit",
    subtitle: "Modernize The Interior",
    desc: "Don't let dated upholstery kill the sale. We digitally reupholster furniture, declutter surfaces, and stage lifestyle elements.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070"
  },
  {
    title: "Atmosphere Control",
    subtitle: "Perfect Weather, Always",
    desc: "Grey skies reduce click-through rates by 40%. We replace overcast lighting with 'Golden Hour' or 'High Noon' sun profiles.",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070"
  }
];

const Services: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-dark text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 border-l-2 border-neon pl-8">
            <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                The Studio Capabilities
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Visual Engineering
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">
                We don't just "edit" photos. We reconstruct reality to align with the buyer's dream.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                    
                    {/* Metallic Sheen on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"></div>
                    
                    {/* Image Top */}
                    <div className="h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 relative z-20">
                        <div className="w-12 h-12 bg-dark border border-white/10 flex items-center justify-center rounded-sm mb-6 -mt-14 relative z-20 shadow-xl group-hover:bg-neon group-hover:border-neon group-hover:text-dark transition-all duration-300">
                            <service.icon className="w-6 h-6 text-white group-hover:text-dark transition-colors" />
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-neon transition-colors">{service.title}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white mb-4 transition-colors">{service.subtitle}</p>
                        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-white/20 transition-colors">
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;