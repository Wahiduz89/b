// components/Cards/BlogCard.tsx
'use client';

import Image from 'next/image';
import { BlogPost } from '@/types/types';

export default function BlogCard({ title, excerpt, image, date }: BlogPost) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{excerpt}</p>
      </div>
    </div>
  );
}