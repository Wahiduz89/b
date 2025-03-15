'use client';

import { FeatureType } from '@/types/types';

export default function WhyUsCard({ title, description, icon }: FeatureType) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl text-center hover:scale-105 transition-transform">
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}