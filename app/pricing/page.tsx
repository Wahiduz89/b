// app/pricing/page.tsx
import { Metadata } from 'next';
import PricingSection from '@/components/Sections/PricingSection';

export const metadata: Metadata = {
  title: 'Pricing - Fitness Hub',
  description: 'Affordable membership plans for your fitness journey',
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
    </div>
  );
}