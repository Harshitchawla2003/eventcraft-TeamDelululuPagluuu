
import React from 'react';
import { Calendar, Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">EventCraft</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Empowering event organizers worldwide with cutting-edge tools for seamless planning, 
              flawless execution, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Browse Events</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Create Event</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 EventCraft. All rights reserved. Built with ❤️ for event organizers.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-white/60 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                hello@eventcraft.com
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
