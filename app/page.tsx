"use client";

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import ProcessFlow from "@/components/ProcessFlow";
import ResourcesSection from "@/components/ResourcesSection";
import PrePlanningSection from "@/components/PrePlanningSection";
import ProductScroll from "@/components/ProductScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-12 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900/20 backdrop-blur-sm p-12 rounded-2xl border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Till We Meet Again
            </h1>
            <p className="text-xl text-gray-300 mb-3">Here to help you through</p>
            <p className="text-lg tracking-widest text-green-400 font-semibold">CELEBRATING LIVES WELL LIVED</p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* Products Scroll */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Our Collection</h2>
          <ProductScroll />
        </div>
      </section>

      {/* Pre-Planning Section */}
      <PrePlanningSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Customer Reviews */}
      <CustomerReviews />

      <Footer />
    </main>
  );
}