"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const caskets = [
  {
    id: 1,
    name: "Eternal Rest Mahogany",
    price: "KES 85,000",
    image: "https://images.unsplash.com/photo-1649615318499-c888057747fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Peaceful Slumber Oak",
    price: "KES 75,000",
    image: "https://plus.unsplash.com/premium_photo-1713985789550-c3988a65f4c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Serenity Cedar",
    price: "KES 65,000",
    image: "https://plus.unsplash.com/premium_photo-1715110519338-b5c33a257939?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Divine Grace Walnut",
    price: "KES 95,000",
    image: "https://plus.unsplash.com/premium_photo-1715110520644-f9e4a8751039?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Heavenly Peace Pine",
    price: "KES 55,000",
    image: "https://plus.unsplash.com/premium_photo-1715110519031-14ac05e50cc2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Sacred Journey Maple",
    price: "KES 70,000",
    image: "https://plus.unsplash.com/premium_photo-1715110518550-8fbd4f1e2eaa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Blessed Rest Cherry",
    price: "KES 80,000",
    image: "https://plus.unsplash.com/premium_photo-1725408021124-21990ff260c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Eternal Peace Rosewood",
    price: "KES 90,000",
    image: "https://plus.unsplash.com/premium_photo-1715110520532-7164d61e829e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CasketsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      <section className="pt-48 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            Our Casket Collection
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {caskets.map((casket) => (
              <ProductCard key={casket.id} {...casket} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}