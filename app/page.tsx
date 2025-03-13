import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation/Navigation';
import MobileMenu from '@/components/Navigation/MobileMenu';
import { classes, features } from '@/lib/data';
import ClassCard from '@/components/ClassCard';
import WhyUsCard from '@/components/WhyUsCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <MobileMenu />
      
      <main className="pt-20">
        <HeroSection />
        
        <section id="classes" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((cls) => (
                <ClassCard key={cls.id} {...cls} />
              ))}
            </div>
          </div>
        </section>

        <section id="whyus" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <WhyUsCard key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}