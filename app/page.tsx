"use client";

import { Suspense } from "react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import ProcessFlow from "@/components/ProcessFlow";
import ResourcesSection from "@/components/ResourcesSection";
import PrePlanningSection from "@/components/PrePlanningSection";
import ProductScroll from "@/components/ProductScroll";
import BentoGrid from "@/components/BentoGrid";
import { Skeleton } from "@/components/ui/skeleton";

// Preload hero image
const preloadHeroImage = () => {
  const img = new Image();
  img.src = '/hero-bg.jpg';
};

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  useEffect(() => {
    preloadHeroImage();

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <TopBar />
      <Navigation />

      {/* Hero Section with Parallax */}
      <motion.section 
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: springY }}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
          style={{ opacity: springOpacity }}
        />
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gray-900/20 backdrop-blur-sm p-12 rounded-2xl border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <motion.h1 
                className="text-5xl md:text-6xl font-serif text-white mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                Till We Meet Again
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Here to help you through
              </motion.p>
              <motion.p 
                className="text-lg tracking-widest text-green-400 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                CELEBRATING LIVES WELL LIVED
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Bento Grid Section */}
      <Suspense fallback={<BentoGridSkeleton />}>
        <BentoGrid />
      </Suspense>

      {/* Process Flow with Animations */}
      <Suspense fallback={<ProcessFlowSkeleton />}>
        <ProcessFlow />
      </Suspense>

      {/* Products Scroll */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Collection
          </motion.h2>
          <Suspense fallback={<ProductScrollSkeleton />}>
            <ProductScroll />
          </Suspense>
        </div>
      </section>

      {/* Pre-Planning Section */}
      <Suspense fallback={<PrePlanningSkeleton />}>
        <PrePlanningSection />
      </Suspense>

      {/* Resources Section */}
      <Suspense fallback={<ResourcesSkeleton />}>
        <ResourcesSection />
      </Suspense>

      {/* Customer Reviews */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <CustomerReviews />
      </Suspense>

      <Footer />
    </main>
  );
}

function BentoGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-[200px] rounded-xl" />
      ))}
    </div>
  );
}

function ProcessFlowSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[150px] rounded-xl" />
      ))}
    </div>
  );
}

function ProductScrollSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="w-[280px] h-[350px] flex-none rounded-xl" />
      ))}
    </div>
  );
}

function PrePlanningSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-8 w-[200px] mx-auto" />
      <Skeleton className="h-24 max-w-2xl mx-auto" />
    </div>
  );
}

function ResourcesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[200px] rounded-xl" />
      ))}
    </div>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-8 w-[200px] mx-auto" />
      <Skeleton className="h-32 max-w-2xl mx-auto" />
    </div>
  );
}