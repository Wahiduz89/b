// components/Sections/TestimonialSection.tsx
'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Professional Athlete',
      text: "The best facility I've ever trained at. The trainers are incredibly knowledgeable and the equipment is top-notch.",
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Fitness Enthusiast',
      text: 'Transformed my fitness journey completely. The community support here is unmatched!',
    },
  ];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl"
            >
              <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
              <div className="text-orange-500 font-bold">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}