"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group bg-gray-900/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-green-400/50 transition-all duration-300">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif text-white mb-2">{name}</h3>
        <p className="text-green-400 mb-4">{price}</p>
        <Button 
          variant="outline" 
          className="w-full border-green-400 text-green-400 hover:bg-green-400/10 transition-colors"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}