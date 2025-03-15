// components/Navigation/MobileMenu.tsx
'use client';

import { useNav } from './NavContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MobileMenu() {
  const { isOpen, toggleMenu } = useNav();

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900/95 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-6">
        <button onClick={toggleMenu} className="text-orange-500">
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
      <div className="flex flex-col items-center space-y-8 mt-20">
        <Link href="/about" onClick={toggleMenu} className="text-2xl hover:text-orange-500">
          About
        </Link>
        <Link href="/classes" onClick={toggleMenu} className="text-2xl hover:text-orange-500">
          Classes
        </Link>
        <Link href="/pricing" onClick={toggleMenu} className="text-2xl hover:text-orange-500">
          Pricing
        </Link>
        <Link href="/contact" onClick={toggleMenu} className="text-2xl hover:text-orange-500">
          Contact
        </Link>
      </div>
    </div>
  );
}