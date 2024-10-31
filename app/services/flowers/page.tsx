"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Flower2 } from "lucide-react";

const arrangements = [
  {
    title: "Sympathy Bouquets",
    description: "Elegant arrangements expressing condolences",
    partner: "By Tawi's Bloom"
  },
  {
    title: "Funeral Sprays",
    description: "Beautiful standing sprays for services",
    partner: "By Tawi's Bloom"
  },
  {
    title: "Casket Flowers",
    description: "Graceful arrangements for final tributes",
    partner: "By Tawi's Bloom"
  },
  {
    title: "Memorial Wreaths",
    description: "Traditional circular arrangements symbolizing eternal life",
    partner: "By Tawi's Bloom"
  }
];

export default function FlowersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Flower2 className="w-16 h-16 text-green-400 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Floral Tributes
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            In partnership with Tawi's Bloom
          </p>
          <p className="text-gray-300 mb-12">
            Express your sympathy with beautiful floral arrangements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {arrangements.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <p className="text-green-400 text-sm">{item.partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}