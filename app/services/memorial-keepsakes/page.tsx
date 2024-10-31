"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const keepsakes = [
  {
    title: "Photo Memory Books",
    description: "Custom-designed photo albums to celebrate cherished memories"
  },
  {
    title: "Memorial Jewelry",
    description: "Elegant pieces that keep loved ones close to your heart"
  },
  {
    title: "Memory Boxes",
    description: "Beautiful containers for preserving precious mementos"
  },
  {
    title: "Custom Portraits",
    description: "Hand-crafted artistic tributes of your loved ones"
  }
];

export default function MemorialKeepsakesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Heart className="w-16 h-16 text-green-400 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Memorial Keepsakes
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Keep the memory of loved ones alive with meaningful dedications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keepsakes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}