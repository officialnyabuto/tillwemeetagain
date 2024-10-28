"use client";

import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
}

export default function ProductCard({ id, name, image }: ProductCardProps) {
  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden 
                border border-gray-700 transition-all duration-300 
                hover:scale-105 hover:bg-gray-800/70"
    >
      <div className="aspect-[16/9] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-opacity group-hover:opacity-80"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif text-white mb-2">{name}</h3>
        <p className="text-green-400">KES 50,000</p>
      </div>
    </div>
  );
}