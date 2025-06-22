
import React from 'react';
import { TrendingUp, Award, Globe, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "500%",
      label: "Average ROI Increase",
      description: "Events see significant returns"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high ratings"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global event management"
    },
    {
      icon: Heart,
      number: "1M+",
      label: "Memorable Moments",
      description: "Created through our platform"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Event Professionals</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join thousands of event organizers who choose EventCraft for their success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              
              <div className="text-white/60 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
