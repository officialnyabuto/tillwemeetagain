"use client";

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function PrePlanningSection() {
  return (
    <section className="py-16 bg-gray-900/20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Shield className="w-12 h-12 text-green-400 mx-auto mb-6" />
        <h2 className="text-3xl font-serif text-white mb-6">Pre-Planning Services</h2>
        <p className="text-xl text-gray-300 mb-8">
          We're here to guide you through these difficult moments in your life
        </p>
        <p className="text-gray-300 mb-8">
          Planning ahead provides peace of mind for you and your loved ones. Our pre-planning services help you make informed decisions without the pressure of immediate need.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-green-400 text-green-400 hover:bg-green-400/10"
        >
          Start Pre-Planning
        </Button>
      </div>
    </section>
  );
}