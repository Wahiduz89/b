// components/Sections/PricingSection.tsx
import { pricingPlans } from '@/lib/data';
import PricingCard from '@/components/Cards/PricingCard';
import AnimatedSection from '@/components/Animation/AnimatedSection';

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}