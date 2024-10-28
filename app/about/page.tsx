"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavLink from "@/components/NavLink";
import TeamMember from "@/components/TeamMember";

const team = [
  {
    id: 1,
    name: "John Smith",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Visionary leader with 20+ years of experience in craftsmanship.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Master artisan specializing in traditional woodworking techniques.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Expert in sustainable materials and ethical manufacturing.",
  },
];

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm text-gray-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-green-400 mr-2" />
                <span>info@tillwemeetagain.com</span>
              </div>
              <div className="hidden md:flex items-center">
                <Phone className="h-4 w-4 text-green-400 mr-2" />
                <span>+25472 8369998 / +25477 7227455</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-green-400 mr-2" />
                <span>Mon-Fri 9:00-18:00 | Sat 9:00-15:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-green-400 mr-2" />
                <span>Kibos Rd, opp Nightingale hospital, Kisumu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-gray-900/60 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-serif text-white">Till We Meet Again</h1>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className={cn(
              "absolute md:relative top-full left-0 right-0 bg-gray-900/90 md:bg-transparent",
              "md:flex items-center space-x-8",
              isMenuOpen ? "block" : "hidden"
            )}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About Us</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mission Section */}
      <section className="pt-48 pb-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-serif text-white mb-8">Our Mission</h2>
          <p className="text-2xl text-green-400 mb-16">TO BE THERE FOR YOU.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif text-white mb-8 text-center">OUR STORY</h2>
          <div className="prose prose-invert mx-auto">
            <p className="text-gray-300 leading-relaxed mb-6">
              Till We Meet Again was founded in 2017, inspired by a journey of love, loss, and the search for something truly special. Our co-founder, facing the passing of his father, struggled to find a casket that honoured his memory. After days of searching with no success, he finally sourced a casket from out of town, but he knew families deserved a better experience closer to home.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              From this moment, Till We Meet Again was born—a family-owned business that offers handcrafted, high-quality caskets that bring comfort and dignity to your loved one’s farewell. Our space is designed to be warm and welcoming, where every family can find a perfect, beautiful resting place for their loved one. We’re here to help you honour them with respect, quality, and a touch of elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Till We Meet Again. All rights reserved. Designed by SpaceBar Creatives
          </p>
        </div>
      </footer>
    </main>
  );
}