"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ServicesDropdown from "./ServicesDropdown";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-10 left-0 right-0 z-40 bg-gray-900/40 backdrop-blur-xl border-b border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-serif text-white hover:text-green-400 transition-colors">
            Till We Meet Again
          </Link>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className={cn(
            "absolute md:relative top-full left-0 right-0 bg-gray-900/90 md:bg-transparent",
            "md:flex items-center space-x-8",
            "backdrop-blur-xl md:backdrop-blur-none",
            "border-b border-gray-800/50 md:border-none",
            isMenuOpen ? "block" : "hidden"
          )}>
            <Link href="/" className="block py-2 px-4 md:p-0 text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <ServicesDropdown />
            <Link href="/about" className="block py-2 px-4 md:p-0 text-gray-300 hover:text-green-400 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}