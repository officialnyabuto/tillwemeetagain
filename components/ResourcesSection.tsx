"use client";

import { Book, Scale, Coins, Church, Clock, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: Book,
    title: "Grieving Process",
    description: "Understanding grief and finding support"
  },
  {
    icon: Scale,
    title: "Legal Requirements",
    description: "Essential documentation and procedures"
  },
  {
    icon: Coins,
    title: "Financial Planning",
    description: "Managing funeral costs and expenses"
  },
  {
    icon: Church,
    title: "Cultural Considerations",
    description: "Honoring traditions and beliefs"
  },
  {
    icon: Clock,
    title: "When Death Occurs",
    description: "Immediate steps and guidance"
  },
  {
    icon: FileDown,
    title: "Checklists & Guides",
    description: "Downloadable planning resources"
  }
];

export default function ResourcesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-green-400/50 transition-all duration-300"
            >
              <resource.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-serif text-white mb-2">{resource.title}</h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <Button
                variant="outline"
                className="w-full border-green-400 text-green-400 hover:bg-green-400/10"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}