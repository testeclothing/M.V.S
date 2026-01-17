import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: 'Single Commission',
    price: '€450',
    context: 'Per Image',
    desc: 'For individual listings requiring immediate visual intervention.',
    features: ['Environmental Transfer', 'Weather Correction', '48h Turnaround', 'Full Commercial Rights'],
    cta: 'Book Studio Slot',
    featured: false
  },
  {
    name: 'Brokerage Retainer',
    price: '€2,800',
    context: 'Monthly',
    desc: 'Dedicated studio lane for high-volume brokerages. Priority processing.',
    features: ['10 Images / Month', '24h Expedited Delivery', 'Dedicated Art Director', 'Fleet Consistency Audit'],
    cta: 'Apply for Retainer',
    featured: true
  },
  {
    name: 'Enterprise Fleet',
    price: 'Custom',
    context: 'Project Based',
    desc: 'Full-fleet digitization for shipyards and global brokerage houses.',
    features: ['API Integration', 'White Label Portal', 'Unlimited Revisions', 'CMO Strategic Support'],
    cta: 'Contact Partnership',
    featured: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
                Investment Structure
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6">
                Transparent Efficiency
            </h2>
            <p className="text-gray-500 font-light text-lg">
                Stop paying for crew days, fuel, and weather delays. Our fixed-rate studio model creates predictable margins for your listings.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`relative p-10 flex flex-col group transition-all duration-500 ${
                        plan.featured 
                        ? 'bg-premium-silver text-dark shadow-2xl shadow-gray-300 scale-105 z-10 rounded-sm border border-white' 
                        : 'bg-white text-dark border border-gray-100 hover:border-gray-300 hover:shadow-xl rounded-sm'
                    }`}
                >
                    {/* Shine Effect for Cards */}
                    <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
                        <div className={`absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent ${plan.featured ? 'via-white/60' : 'via-white/10'} to-transparent`} style={{ width: '200%', left: '-50%' }}></div>
                    </div>

                    {plan.featured && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon text-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-20">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8 relative z-10">
                        <h3 className="text-xl font-bold mb-2 text-dark">{plan.name}</h3>
                        <p className={`text-xs ${plan.featured ? 'text-gray-500' : 'text-gray-500'}`}>{plan.desc}</p>
                    </div>

                    <div className="mb-10 pb-10 border-b border-gray-200 relative z-10">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-display font-bold text-dark">{plan.price}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.featured ? 'text-neon' : 'text-gray-400'}`}>{plan.context}</span>
                        </div>
                    </div>

                    <ul className="space-y-5 mb-10 flex-grow relative z-10">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-medium text-dark">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? 'bg-dark text-neon' : 'bg-gray-100 text-dark'}`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                {feat}
                            </li>
                        ))}
                    </ul>

                    <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
                        {plan.cta}
                    </Button>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;