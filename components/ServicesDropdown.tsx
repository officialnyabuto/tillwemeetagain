"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Caskets", href: "/services/caskets" },
  { name: "Funeral Attire", href: "/services/funeral-attire" },
  { name: "Memorial Keepsakes", href: "/services/memorial-keepsakes" },
  { name: "Flowers", href: "/services/flowers" },
];

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        onHoverStart={() => setIsOpen(true)}
        className="flex items-center space-x-1 py-2 px-4 md:p-0 text-gray-300 hover:text-green-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span>Services</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
          >
            <div className="py-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-400/10 hover:text-green-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}