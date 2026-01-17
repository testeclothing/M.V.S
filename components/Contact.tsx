import React, { useState } from 'react';
import Button from './Button';
import { ContactStatus } from '../types';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SENDING);
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="audit" className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Narrative */}
            <div className="lg:w-1/2">
                <span className="text-neon text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
                    Studio Access
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-dark mb-8 leading-[0.95]">
                    Start Your <br/> Digital Refit.
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 max-w-md">
                    We limit our active client roster to ensure highest-fidelity output. Upload your files for a complimentary audit and feasibility quote.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-gray-100"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-dark">London Studio</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-gray-100"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-dark">Monaco Rep</span>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2">
                <div className="bg-gray-50 p-10 md:p-14 rounded-sm border border-gray-100 relative overflow-hidden group hover:border-dark/10 transition-colors duration-500">
                    
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 rounded-full blur-[50px] pointer-events-none"></div>

                    {status === ContactStatus.SUCCESS ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-6">
                                <ArrowRight className="w-6 h-6 -rotate-45" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-2">Request Received</h3>
                            <p className="text-gray-500 text-sm">Our director will review your vessel profile shortly.</p>
                            <button onClick={() => setStatus(ContactStatus.IDLE)} className="mt-8 text-[10px] font-bold uppercase tracking-widest border-b border-dark pb-1">Reset Form</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Brokerage / Name</label>
                                    <input required className="w-full bg-white border-b border-gray-200 p-3 focus:outline-none focus:border-neon transition-colors" placeholder="Enter name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Vessel Type</label>
                                    <input required className="w-full bg-white border-b border-gray-200 p-3 focus:outline-none focus:border-neon transition-colors" placeholder="e.g. 40m Superyacht" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white border-b border-gray-200 p-3 focus:outline-none focus:border-neon transition-colors" placeholder="name@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Details</label>
                                <textarea className="w-full bg-white border-b border-gray-200 p-3 focus:outline-none focus:border-neon transition-colors min-h-[100px]" placeholder="Describe your imaging needs..." />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" className="w-full" disabled={status === ContactStatus.SENDING}>
                                    {status === ContactStatus.SENDING ? 'Transmitting...' : 'Request Studio Access'}
                                </Button>
                                <p className="text-center text-[9px] text-gray-400 mt-4 uppercase tracking-widest">
                                    Non-Disclosure Agreement included in proposal
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;