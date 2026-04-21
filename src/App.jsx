import { useState } from 'react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import FeaturesMVP from './components/FeaturesMVP';
import Roadmap from './components/Roadmap';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-primary">
      <main className="flex-grow">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <Metrics />
        <FeaturesMVP />
        <Roadmap />
      </main>
      
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} />
      )}

      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
