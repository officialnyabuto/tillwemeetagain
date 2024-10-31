"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

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

// Double the items for seamless infinite scroll
const duplicatedCaskets = [...caskets, ...caskets];

export default function ProductScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const scroll = () => {
      if (!scrollContainer) return;
      
      if (scrollContainer.scrollLeft >= maxScroll - 1) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <motion.div
          className="flex gap-4 py-4"
          initial={{ x: 0 }}
        >
          {duplicatedCaskets.map((casket, index) => (
            <div
              key={`${casket.id}-${index}`}
              className="flex-none w-[280px] md:w-[320px]"
            >
              <ProductCard {...casket} />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
}