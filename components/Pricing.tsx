import React from 'react';
import Button from './Button';
import { Check, Clock, Zap, Shield, Crown, Building2 } from 'lucide-react';

const Pricing: React.FC = () => {
  
  const plans = [
    {
      name: "Pay-As-You-Go",
      price: "450",
      unit: "€ / listing",
      roi: "Standard Market Rate",
      description: "For boutique brokers with occasional inventory. No commitment required.",
      suggestedShots: [
        "Up to 10 Photos Included",
        "48-Hour Turnaround",
        "Standard Retouching"
      ],
      features: [
        "Exterior & Interior Staging",
        "Sky & Water Correction",
        "1 Revision Round"
      ],
      cta: "Upload Listing",
      popular: false,
    },
    {
      name: "Brokerage Partner",
      price: "2,500",
      unit: "€ / month",
      roi: "Visual Consistency",
      description: "We become the internal art department for your mid-sized firm. Ideal for 5-10 listings/mo.",
      suggestedShots: [
        "~60 Photos Capacity",
        "Ideal for 5+ Boats/Month",
        "Priority 24h Delivery"
      ],
      features: [
        "Dedicated Account Manager",
        "Custom Watermarking",
        "Unlimited Revisions",
        "Priority Queue Status"
      ],
      cta: "Become a Partner",
      popular: true,
    },
    {
      name: "Enterprise Shipyard",
      price: "4,800",
      unit: "€ / month",
      roi: "Total Market Dominance",
      description: "For large firms & shipyards requiring high-volume daily output and video assets.",
      suggestedShots: [
        "Uncapped Volume (Fair Use)",
        "Includes Video/Reels Motion",
        "Same-Day Rush Available"
      ],
      features: [
        "Dedicated Creative Director",
        "Slack/WhatsApp Channel",
        "Raw File Processing",
        "Marketing Strategy Calls"
      ],
      cta: "Contact Enterprise",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
            <Crown className="w-3 h-3 text-neon" />
            Agency Partnerships
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Your Virtual Art Dept.
          </h2>
          <p className="text-gray-400 text-lg">
            Scalable visual infrastructure for top-tier brokerages. 
            <br />Replace expensive in-house editors with our dedicated studio team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'bg-gradient-to-b from-white/10 to-white/5 border-neon ring-1 ring-neon/50' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              } backdrop-blur-sm transition-all duration-300 group flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-dark text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-neon/20">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                {/* ROI Badge */}
                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-4 px-2 py-1 rounded-sm ${plan.popular ? 'bg-neon/20 text-neon' : 'bg-white/10 text-gray-400'}`}>
                    <Building2 className="w-3 h-3" />
                    {plan.roi}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1 font-medium">{plan.unit}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-6 min-h-[60px]">
                    {plan.description}
                </p>

                {/* Specific Shot List */}
                <div className="mb-6">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Capacity:</span>
                    <ul className="space-y-3">
                        {plan.suggestedShots.map((shot, s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-gray-200 font-medium">
                                <div className="mt-1.5 w-1 h-1 bg-neon rounded-full shrink-0"></div>
                                {shot}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              {/* Standard Features */}
              <div className="space-y-3 mb-8 bg-black/20 p-5 rounded-lg mt-auto border border-white/5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-neon' : 'text-gray-500'}`} />
                    <span className="text-gray-300 text-xs font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* B2B Trust Section */}
        <div className="mt-20 border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="flex flex-col items-center gap-2">
              <h4 className="text-neon font-display text-2xl font-bold">NDA Protected</h4>
              <p className="text-gray-500 text-sm">Your raw files and client data are legally secured.</p>
           </div>
           <div className="flex flex-col items-center gap-2">
              <h4 className="text-neon font-display text-2xl font-bold">White Label</h4>
              <p className="text-gray-500 text-sm">We work silently in the background. Your brand only.</p>
           </div>
           <div className="flex flex-col items-center gap-2">
              <h4 className="text-neon font-display text-2xl font-bold">Monthly Invoice</h4>
              <p className="text-gray-500 text-sm">Corporate invoicing with Net-30 payment terms available.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
