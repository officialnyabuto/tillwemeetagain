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
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-green-400/50">
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
          className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}