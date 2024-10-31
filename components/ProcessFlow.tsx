"use client";

import { Phone, Users, ClipboardList, Calendar, CreditCard, Heart } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Initial Contact",
    description: "Reach out to us 24/7 for immediate assistance"
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Meet with our caring team to discuss your needs"
  },
  {
    icon: ClipboardList,
    title: "Selection",
    description: "Choose from our range of products and services"
  },
  {
    icon: Calendar,
    title: "Planning",
    description: "We'll help arrange all ceremony details"
  },
  {
    icon: CreditCard,
    title: "Documentation",
    description: "We'll handle all necessary paperwork"
  },
  {
    icon: Heart,
    title: "Follow-up Care",
    description: "We're here for you even after the service"
  }
];

export default function ProcessFlow() {
  return (
    <section className="py-16 bg-gray-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-green-400/50 transition-all duration-300"
            >
              <step.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}