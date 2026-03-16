import { useState } from 'react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import FeaturesMVP from './components/FeaturesMVP';
import Roadmap from './components/Roadmap';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-primary">
      <main className="flex-grow">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <Metrics />
        <FeaturesMVP />
        <Roadmap />
      </main>
      
      <Footer />
      
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} />
      )}
    </div>
  );
}

export default App;
