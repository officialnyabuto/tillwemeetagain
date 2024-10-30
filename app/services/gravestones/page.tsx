"use client";

import { Construction } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";

export default function GravestonesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      <section className="pt-48 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Construction className="w-16 h-16 text-green-400 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Crafting Something Special
          </h1>
          <p className="text-xl text-gray-300">
            Our complete product catalog is currently being prepared with the same care and attention we put into our handcrafted gravestones.
          </p>
        </div>
      </section>
    </main>
  );
}