"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="group bg-gray-900/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-green-400/50 transition-all duration-300">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-white mb-1">{name}</h3>
        <p className="text-green-400 text-sm mb-4">{role}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}