"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "On behalf of the entire Asoma family, I want to express our heartfelt gratitude to you, Mr. Sylvester. You stood by us when we needed you most, and your timely action saved the day. Thank you as well for your exceptional work. May God bless you always.",
    author: "Christine"
  },
  {
    text: "Your customer service is outstanding.",
    author: "Sheila"
  },
  {
    text: "Thank you so much for being with us as we laid my father to rest.",
    author: "Dorcas"
  },
  {
    text: "I love your services. You delivered beyond my expectations. Thank you for making my mum's occasion beautiful. Keep up the great work!",
    author: "Ruth"
  },
  {
    text: "I lost my youngest sister, and Mr. Sylvester and his entire family stood with us, providing exceptional services on short notice. Your workmanship and deliveries are top-notch.",
    author: "Fanisha"
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-900/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">What Our Families Say</h2>
        
        <div className="relative h-[200px] md:h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <Quote className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-gray-300 mb-4 italic">{reviews[currentIndex].text}</p>
              <p className="text-green-400 font-semibold">- {reviews[currentIndex].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}