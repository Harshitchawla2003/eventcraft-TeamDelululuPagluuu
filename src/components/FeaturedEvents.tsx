
import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "Dec 15, 2024",
      time: "9:00 AM",
      location: "Convention Center, NYC",
      attendees: 1200,
      price: "$299",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      category: "Technology"
    },
    {
      id: 2,
      title: "Creative Arts Workshop",
      date: "Dec 20, 2024",
      time: "2:00 PM",
      location: "Art Studio, LA",
      attendees: 50,
      price: "$89",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      category: "Arts"
    },
    {
      id: 3,
      title: "Business Networking Gala",
      date: "Jan 5, 2025",
      time: "7:00 PM",
      location: "Grand Hotel, Chicago",
      attendees: 300,
      price: "$150",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
      category: "Business"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Events</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover amazing events happening near you. From conferences to workshops, 
            find your next great experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    {event.price}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-white/70">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-white/70">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
