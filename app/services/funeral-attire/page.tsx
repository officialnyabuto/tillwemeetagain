"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shirt } from "lucide-react";

const attireCategories = [
  {
    title: "Traditional Mourning Wear",
    description: "Classic black attire suitable for funeral services"
  },
  {
    title: "Cultural Dress",
    description: "Respectful attire honoring different cultural traditions"
  },
  {
    title: "Accessories",
    description: "Appropriate accessories to complete your mourning attire"
  },
  {
    title: "Custom Orders",
    description: "Tailored solutions for specific requirements"
  }
];

export default function FuneralAttirePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shirt className="w-16 h-16 text-green-400 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Funeral Attire
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Dignified and respectful clothing for memorial services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attireCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/20 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-white mb-4">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}