
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-white/90 text-sm">Seamless Planning. Flawless Execution.</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Transform Your
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {" "}Events
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          From intimate gatherings to grand conferences, EventCraft empowers you to create, manage, and execute 
          unforgettable experiences with our comprehensive event management platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 h-auto"
          >
            Start Planning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3 h-auto"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">10k+</div>
            <div className="text-white/70">Events Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">50k+</div>
            <div className="text-white/70">Happy Attendees</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/70">Uptime Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
