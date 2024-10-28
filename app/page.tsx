"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavLink from "@/components/NavLink";
import ProductCard from "@/components/ProductCard";

const caskets = [
  {
    id: 1,
    name: "Eternal Rest Mahogany",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Peaceful Slumber Oak",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Serenity Cedar",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Divine Grace Walnut",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Heavenly Peace Pine",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Sacred Journey Maple",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Blessed Rest Cherry",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Eternal Peace Rosewood",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
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

      {/* Hero Section */}
      <section className="pt-48 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Till We Meet Again
          </h1>
          <p className="text-xl text-gray-300 mb-2">Bringing eternity to life</p>
          <p className="text-lg tracking-widest text-green-400 font-semibold">HANDCRAFTED CASKETS</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {caskets.map((casket) => (
              <ProductCard key={casket.id} {...casket} />
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