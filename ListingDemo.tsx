import React, { useState } from 'react';
import { MapPin, Anchor, MessageCircle, Share2, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

const ListingDemo: React.FC = () => {
  const [mode, setMode] = useState<'standard' | 'enhanced'>('enhanced');

  // A curated set of images to look like a real yacht listing
  const listingImages = [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070", // Main Profile
      "https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=500",  // Interior
      "https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=500",      // Deck/Sunset
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=500",    // Aerial
      "https://images.unsplash.com/photo-1621217651084-2975949d21e3?q=80&w=500"     // Detail
  ];

  const [activeImage, setActiveImage] = useState(listingImages[0]);

  return (
    <section id="demo" className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-block px-3 py-1 bg-neon text-dark text-[10px] font-bold uppercase tracking-widest mb-6 rounded-sm">
              Live Preview
           </div>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6">
              The Platform Effect
           </h2>
           <p className="text-gray-500 text-lg font-light leading-relaxed">
              Witness the commercial transformation of a stagnant listing into an ultra-premium digital asset.
           </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16">
            <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm flex relative cursor-pointer">
                <button 
                    onClick={() => setMode('standard')}
                    className={`relative z-10 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${mode === 'standard' ? 'text-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    Standard Listing
                </button>
                <button 
                    onClick={() => setMode('enhanced')}
                    className={`relative z-10 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${mode === 'enhanced' ? 'text-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    MVS Enhanced
                </button>
                <div className={`absolute top-1 bottom-1 w-[165px] bg-neon rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mode === 'standard' ? 'left-1' : 'left-[171px]'}`}></div>
            </div>
        </div>

        {/* Marketplace UI Mockup */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-200 overflow-hidden relative transition-all duration-500">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-md h-8 mx-6 flex items-center px-4">
                    <span className="text-[10px] text-gray-400 font-sans truncate">yachtworld.com/boats-for-sale/2026-marex-310-sun-cruiser</span>
                </div>
            </div>

            {/* Layout */}
            <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
                
                {/* Visuals */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden rounded-sm shadow-inner group">
                         {/* Main Image with Transition */}
                         <img 
                            src={activeImage}
                            alt="Yacht Main"
                            className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                                mode === 'standard' 
                                ? 'grayscale-[0.8] brightness-[0.85] contrast-[0.9] sepia-[0.2]' // Standard: Dull, Old, Flat
                                : 'saturate-[1.15] brightness-[1.05] contrast-[1.05] scale-[1.02]' // Enhanced: Vivid, Sharp, Expensive
                            }`}
                        />
                        
                        {/* Overlay Badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                            {mode === 'enhanced' ? (
                                <>
                                    <div className="bg-neon text-dark text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-sm shadow-xl animate-bounce">
                                        Hot Listing
                                    </div>
                                    <div className="bg-dark/80 backdrop-blur-md text-white text-[9px] px-3 py-1 uppercase tracking-widest rounded-sm flex items-center gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-neon" /> MVS Synthesis Verified
                                    </div>
                                </>
                            ) : (
                                <div className="bg-white/90 backdrop-blur-md text-gray-500 text-[9px] px-3 py-1 uppercase tracking-widest rounded-sm flex items-center gap-2 shadow-sm border border-gray-200">
                                    <AlertCircle className="w-3 h-3" /> Raw Input
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-5 gap-3">
                        {listingImages.map((img, i) => (
                             <div 
                                key={i} 
                                onClick={() => setActiveImage(img)}
                                className={`aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                                    activeImage === img ? 'border-dark' : 'border-transparent hover:border-gray-200'
                                }`}
                             >
                                <img 
                                    src={img} 
                                    className={`w-full h-full object-cover transition-all duration-700 ${
                                        mode === 'standard' 
                                        ? 'grayscale-[0.8] brightness-[0.85] opacity-70' 
                                        : 'saturate-[1.1] opacity-100'
                                    }`}
                                />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-dark leading-tight mb-3">
                            2026 Marex 310 Sun Cruiser
                        </h1>
                        <div className="flex items-center text-sm text-gray-400 mb-6">
                            <MapPin className="w-4 h-4 mr-2" />
                            Côte d'Azur, France
                        </div>
                        <div className="flex flex-col mb-6">
                            <span className="text-4xl font-display font-bold text-dark">€385,000</span>
                            <span className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-2 hover:underline cursor-pointer">Finance options from €3,377/mo</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-dark text-white flex items-center justify-center rounded-sm">
                                <Anchor className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Listed By</span>
                                <span className="font-bold text-dark uppercase text-xs tracking-widest">Horizon Yacht Group</span>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <button className="w-full bg-neon text-dark py-4 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-dark hover:text-white transition-all shadow-lg shadow-neon/20">
                                Request Information
                            </button>
                            <button className="w-full border border-dark text-dark py-4 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" /> Send Message
                            </button>
                        </div>
                    </div>

                    {/* MVS Uplift Component */}
                    <div className={`p-6 border border-neon/30 bg-neon/5 rounded-sm transition-all duration-700 ${mode === 'enhanced' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-dark">MVS Performance Metrics</span>
                            <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-2xl font-bold text-dark">+420%</span>
                                <span className="text-[9px] uppercase tracking-widest text-gray-400">Impression Velocity</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-dark">3.5x</span>
                                <span className="text-[9px] uppercase tracking-widest text-gray-400">Lead Conversion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDemo;