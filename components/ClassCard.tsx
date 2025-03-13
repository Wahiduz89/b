import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClassType } from '@/types/types';

export default function ClassCard({ title, description, image }: ClassType) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-orange-500">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}