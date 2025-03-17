// components/Cards/ClassCard.tsx
'use client';

import Image from 'next/image';
import { ClassType } from '@/types/types';

export default function ClassCard({ title, description, image }: ClassType) {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}