
import React, { useState } from 'react';
import { Calendar, Menu, X, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">EventCraft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Browse Events</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Create Event</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Bell className="h-5 w-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Browse Events</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Create Event</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
              <div className="pt-4 border-t border-white/20">
                <Button variant="outline" className="w-full mb-3 border-white/30 text-white hover:bg-white/10">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
