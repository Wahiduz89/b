'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNav } from './NavContext';
import Link from 'next/link';

export default function MobileMenu() {
  const { isOpen, toggleNav } = useNav();
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Classes', href: '#classes' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/50"
          onClick={toggleNav}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <button
                onClick={toggleNav}
                className="ml-auto text-gray-300 hover:text-orange-500"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              
              <div className="mt-8 space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-xl text-gray-300 hover:text-orange-500"
                    onClick={toggleNav}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}