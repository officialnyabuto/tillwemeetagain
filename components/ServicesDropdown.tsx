"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Caskets", href: "/services/caskets" },
  { name: "Gravestones", href: "/services/gravestones" },
  { name: "Urns", href: "/services/urns" },
  { name: "Memorial Plaques", href: "/services/memorial-plaques" },
];

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 py-2 px-4 md:p-0 text-gray-300 hover:text-green-400 transition-colors"
      >
        <span>Services</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="py-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-400/10 hover:text-green-400 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}