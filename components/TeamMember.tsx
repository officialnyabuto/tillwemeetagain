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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
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