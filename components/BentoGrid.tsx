"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Clock } from "lucide-react";

const gridItems = [
  {
    title: "Compassionate Care",
    description: "Supporting families through difficult times with empathy and understanding",
    icon: Heart,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "24/7 Support",
    description: "Always available when you need us most",
    icon: Clock,
    className: "md:col-span-1",
  },
  {
    title: "Family First",
    description: "Putting your family's needs at the forefront",
    icon: Users,
    className: "md:col-span-1",
  },
  {
    title: "Peace of Mind",
    description: "Ensuring every detail is handled with care",
    icon: Shield,
    className: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 p-8 hover:border-green-400/50 transition-all duration-300 ${item.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <item.icon className="w-10 h-10 text-green-400 mb-4" />
                </motion.div>
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}