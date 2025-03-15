// app/classes/page.tsx
import { Metadata } from 'next';
import { classes } from '@/lib/data';
import ClassCard from '@/components/Cards/ClassCard';
import AnimatedSection from '@/components/Animation/AnimatedSection';

export const metadata: Metadata = {
  title: 'Classes - Fitness Hub',
  description: 'Explore our diverse range of fitness classes',
};

export default function ClassesPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">All Classes</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((cls) => (
                <ClassCard key={cls.id} {...cls} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}