import { useState } from 'react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import FeaturesMVP from './components/FeaturesMVP';
import Roadmap from './components/Roadmap';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';
import FloatingChat from './components/FloatingChat';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <Metrics />
        <FeaturesMVP />
        <Roadmap />
      </main>
      
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      {isDemoOpen && (
        <DemoModal 
          onClose={() => setIsDemoOpen(false)} 
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      )}

      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <FloatingChat />
    </div>
  );
}

export default App;
