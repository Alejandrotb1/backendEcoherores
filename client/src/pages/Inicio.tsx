import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhiteSection from '../components/WhiteSection';
import BlackSection, { CuidaPlaneta } from '../components/BlackSection';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WhiteSection />
      <BlackSection />
      <CuidaPlaneta />
    </div>
  );
};

export default Inicio;
