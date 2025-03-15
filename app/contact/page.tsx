// app/contact/page.tsx
import { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Fitness Hub',
  description: 'Get in touch with our fitness experts',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact Us</h1>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}