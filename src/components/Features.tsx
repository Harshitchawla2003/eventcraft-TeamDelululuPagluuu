
import React from 'react';
import { Calendar, Users, BarChart3, Bell, CreditCard, MapPin, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Event Creation",
      description: "Create stunning events with our intuitive drag-and-drop builder and customizable templates."
    },
    {
      icon: Users,
      title: "Attendee Management",
      description: "Track RSVPs, manage registrations, and communicate with attendees seamlessly."
    },
    {
      icon: CreditCard,
      title: "Integrated Ticketing",
      description: "Sell tickets, process payments, and generate digital passes all in one platform."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get insights into attendance, engagement, and revenue with comprehensive dashboards."
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Keep attendees engaged with automated email and SMS notifications."
    },
    {
      icon: MapPin,
      title: "Venue Management",
      description: "Manage locations, floor plans, and vendor coordination from a single dashboard."
    },
    {
      icon: Zap,
      title: "Live Updates",
      description: "Push real-time updates to attendees during events with our live notification system."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and data encryption."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to plan, manage, and execute successful events from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
