
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Quote } from './components/Quote';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { GetStarted } from './components/GetStarted';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import BackgroundController from './components/BackgroundController';

function App() {
  return (
    <div className="relative min-h-screen text-light font-sans selection:bg-primary/30 selection:text-primary scroll-smooth">
      <BackgroundController />
      <Navbar />
      <div className="font-sans text-center overflow-x-hidden relative z-10">
        <Hero />
        <Quote />
        <About />
        <Services />
        <Portfolio />
        <GetStarted />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
