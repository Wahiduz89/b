// app/about/page.tsx
import { Metadata } from 'next';
import AnimatedSection from '@/components/Animation/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us - Fitness Hub',
  description: 'Learn about our fitness philosophy and world-class facilities',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Fitness Hub</h1>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-400">
                <p className="text-xl">
                  Founded in 2010, Fitness Hub has revolutionized the fitness industry with our
                  cutting-edge facilities and science-backed training programs.
                </p>
                <p>
                  Our 50,000 sqft flagship facility features Olympic-grade equipment,
                  dedicated functional training zones, and recovery amenities including
                  cryotherapy chambers and infrared saunas.
                </p>
              </div>
              <div className="bg-gray-800 aspect-video rounded-2xl shadow-xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}