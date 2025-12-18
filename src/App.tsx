import React from 'react';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { GetStarted } from './components/GetStarted';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans text-center overflow-x-hidden">
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
  );
}

export default App;
