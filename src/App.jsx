import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070711] text-white font-inter">
      <Hero />
      <Services />
      <Showcase />
      <Footer />
    </div>
  );
}
