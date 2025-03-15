// components/Cards/PricingCard.tsx
'use client';

type PricingPlan = {
  title: string;
  price: string;
  features: string[];
};

export default function PricingCard({ title, price, features }: PricingPlan) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-4 text-orange-500">{title}</h3>
      <div className="text-4xl font-bold mb-6">{price}</div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors">
        Get Started
      </button>
    </div>
  );
}