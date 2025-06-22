
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedEvents from '@/components/FeaturedEvents';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
