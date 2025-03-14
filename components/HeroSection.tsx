'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Body at{' '}
              <span className="text-orange-500">Fitness Hub</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join our world-class fitness community with cutting-edge facilities
              and personalized training programs.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Start Your Journey
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-2xl">
                Fitness Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}