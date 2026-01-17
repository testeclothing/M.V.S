import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import DigitalStaging from './components/DigitalStaging';
import Services from './components/Services';
import ROICalculator from './components/ROICalculator';
import ListingDemo from './components/ListingDemo';
import MarketingAssets from './components/MarketingAssets';
import AccuracyGuarantee from './components/AccuracyGuarantee';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-neon selection:text-dark overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Logos />
        <DigitalStaging />
        <ROICalculator />
        <ListingDemo />
        <Services />
        <AccuracyGuarantee />
        <MarketingAssets />
        <Gallery />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;