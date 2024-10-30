"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import TeamMember from "@/components/TeamMember";
import Footer from "@/components/Footer";

const team = [
  {
    id: 1,
    name: "John Smith",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Visionary leader with 20+ years of experience in craftsmanship.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Master artisan specializing in traditional woodworking techniques.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=400&q=80",
    description: "Expert in sustainable materials and ethical manufacturing.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      {/* Mission Section */}
      <section className="pt-48 pb-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900/20 backdrop-blur-sm p-12 rounded-2xl border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <h2 className="text-4xl font-serif text-white mb-8">Our Mission</h2>
            <p className="text-2xl text-green-400 mb-16">TO BE THERE FOR YOU.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900/20 backdrop-blur-sm p-12 rounded-2xl border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <h2 className="text-3xl font-serif text-white mb-8 text-center">OUR STORY</h2>
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-300 leading-relaxed mb-6">
                Till We Meet Again was founded in 2017, inspired by a journey of love, loss, and the search for something truly special. Our co-founder, facing the passing of his father, struggled to find a casket that honoured his memory. After days of searching with no success, he finally sourced a casket from out of town, but he knew families deserved a better experience closer to home.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                From this moment, Till We Meet Again was born—a family-owned business that offers handcrafted, high-quality caskets that bring comfort and dignity to your loved one's farewell. Our space is designed to be warm and welcoming, where every family can find a perfect, beautiful resting place for their loved one. We're here to help you honour them with respect, quality, and a touch of elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}