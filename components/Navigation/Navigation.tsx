// components/Navigation/Navigation.tsx
'use client';

import Link from 'next/link';
import { useNav } from './NavContext';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const { toggleMenu } = useNav();

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Fitness Hub
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/classes" className="hover:text-orange-500 transition-colors">
              Classes
            </Link>
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-orange-500">
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}