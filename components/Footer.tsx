"use client";

import { Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900/40 backdrop-blur-xl border-t border-gray-800/50 shadow-[0_-8px_32px_0_rgba(31,38,135,0.37)]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a 
              href="mailto:info@tillwemeetagain.com"
              className="flex items-center hover:text-green-400 transition-colors text-gray-300"
            >
              <Mail className="h-4 w-4 text-green-400 mr-2" />
              <span>info@tillwemeetagain.com</span>
            </a>
            <div className="flex items-center text-gray-300">
              <Clock className="h-4 w-4 text-green-400 mr-2" />
              <span>Mon-Fri 9:00-18:00 | Sat 9:00-15:00</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a 
              href="https://maps.google.com/?q=Kibos+Rd+Nightingale+hospital+Kisumu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-400 transition-colors text-gray-300"
            >
              <MapPin className="h-4 w-4 text-green-400 mr-2" />
              <span>Kibos Rd, opp Nightingale hospital, Kisumu</span>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-800/50 pt-6">
          © 2024 Till We Meet Again. All rights reserved.
        </div>
      </div>
    </footer>
  );
}