import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: 1,
    client: "Fraser Yachts",
    vessel: "Benetti 45M",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    client: "Burgess",
    vessel: "Sunseeker 88",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1621217651084-2975949d21e3?q=80&w=1000",
    size: "col-span-1"
  },
  {
    id: 3,
    client: "Camper & Nicholsons",
    vessel: "Riva 110",
    location: "Croatia",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000",
    size: "col-span-1"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div>
                <span className="text-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Archive</span>
                <h2 className="font-display text-4xl font-bold text-dark">Studio Lookbook</h2>
            </div>
            <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-dark transition-colors group">
                Full Deployment Archive <ArrowUpRight className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {works.map((work) => (
                <div key={work.id} className={`${work.size} group relative aspect-[4/3] md:aspect-auto md:h-[500px] overflow-hidden rounded-sm cursor-pointer bg-gray-100`}>
                    <img 
                        src={work.image} 
                        alt={work.vessel} 
                        className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105 saturate-[1.1]"
                    />
                    
                    {/* Overlay UI */}
                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                            <span className="text-neon text-[10px] font-bold uppercase tracking-widest mb-3 block">
                                {work.client}
                            </span>
                            <h3 className="text-white font-display text-3xl font-bold mb-2">
                                {work.vessel}
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                                    Deployed: {work.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Corner Tag */}
                    <div className="absolute top-6 right-6 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;