import React from 'react';
import Button from './Button';
import { Check, Clock, Zap, Shield, Image, TrendingUp, MousePointer2 } from 'lucide-react';

const Pricing: React.FC = () => {
  
  const plans = [
    {
      name: "The 'Click Magnet'",
      price: "129",
      unit: "/ 3 photos",
      roi: "Boosts Click-Through Rate by ~150%",
      description: "Designed solely to stop the scroll on YachtWorld. We fix the cover photo and the main salon to get buyers inside the listing.",
      suggestedShots: [
        "1x Exterior Profile (Water & Sky)",
        "1x Main Salon (Modernized)",
        "1x Aft Deck (Lifestyle Setup)"
      ],
      features: [
        "48-Hour Delivery",
        "High-Res Web & Print Ready",
        "1 Free Revision Round"
      ],
      cta: "Get The Click Magnet",
      popular: false,
    },
    {
      name: "The Full Tour",
      price: "349",
      unit: "/ 12 photos",
      roi: "Reduces 'Days on Market' by 40%",
      description: "A complete visual overhaul. Prevents buyers from clicking 'back' by creating a consistent, luxury emotional journey from bow to stern.",
      suggestedShots: [
        "Ext. Profile + Running Shot",
        "Salon, Galley & Helm Station",
        "Master, VIP & Guest Cabins",
        "Flybridge & Bow Seating",
        "Engine Room (Cleaned)"
      ],
      features: [
        "Priority 24-Hour Delivery",
        "Unlimited Revisions",
        "Includes 'Twilight' Conversion"
      ],
      cta: "Get Full Listing Kit",
      popular: true,
    },
    {
      name: "Brokerage Retainer",
      price: "899",
      unit: "/ month",
      roi: "Saves 30% vs. Single Orders",
      description: "For agencies with 3+ listings per month. We act as your in-house art department to ensure every listing launches perfectly.",
      suggestedShots: [
        "30 Credits (Use on any boat)",
        "Roll-over unused credits",
        "Custom Branding / Watermark"
      ],
      features: [
        "Same Day Turnaround (Rush)",
        "Dedicated WhatsApp Support",
        "Monthly Invoice (No Credit Card spam)"
      ],
      cta: "Contact Sales",
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Invest in Speed.
          </h2>
          <p className="text-gray-400 text-lg">
            Stop letting inventory sit. Our packages are designed to maximize 
            <span className="text-white font-bold"> traffic</span> and <span className="text-white font-bold">inquiries</span>.
            <span className="text-neon block mt-2 font-medium flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Standard Turnaround: 48 Hours.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'bg-white/5 border-neon ring-1 ring-neon/50' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              } backdrop-blur-sm transition-all duration-300 group flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-dark text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg shadow-neon/20">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                {/* ROI Badge */}
                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-4 px-2 py-1 rounded-sm ${plan.popular ? 'bg-neon/20 text-neon' : 'bg-white/10 text-gray-400'}`}>
                    <TrendingUp className="w-3 h-3" />
                    {plan.roi}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-display font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{plan.unit}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-6">
                    {plan.description}
                </p>

                {/* Specific Shot List */}
                <div className="mb-6">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Includes:</span>
                    <ul className="space-y-2">
                        {plan.suggestedShots.map((shot, s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-gray-200">
                                <div className="mt-1 w-1 h-1 bg-neon rounded-full shrink-0"></div>
                                {shot}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>

              {/* Standard Features */}
              <div className="space-y-3 mb-8 bg-black/20 p-4 rounded-lg mt-auto">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 ${plan.popular ? 'text-neon' : 'text-gray-500'}`} />
                    <span className="text-gray-400 text-xs font-medium">{feature}</span>
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

        {/* Guarantee Section */}
        <div className="mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-neon">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">Accuracy Guarantee</h4>
                <p className="text-gray-400 text-sm">If it looks "fake", we re-edit it for free.</p>
              </div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10"></div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-neon">
                <Image className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">Web & Print Ready</h4>
                <p className="text-gray-400 text-sm">High-Res files included for magazine ads.</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
