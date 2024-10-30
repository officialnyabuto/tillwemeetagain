"use client";

import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/40 backdrop-blur-md border-b border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start py-2 text-sm text-gray-300">
          <div className="flex items-center flex-wrap justify-center gap-4">
            <a 
              href="tel:+254728369998" 
              className="flex items-center hover:text-green-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-green-400 mr-2" />
              <span>+25472 8369998</span>
            </a>
            <span className="hidden sm:inline">/</span>
            <a 
              href="tel:+254777227455" 
              className="flex items-center hover:text-green-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-green-400 mr-2 sm:hidden" />
              <span>+25477 7227455</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}