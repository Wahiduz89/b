'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useNav } from './NavContext';

export default function Navigation() {
  const { toggleNav } = useNav();
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Classes', href: '#classes' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Fitness Hub"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-orange-500">FITNESS HUB</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleNav}
            className="md:hidden text-gray-300 hover:text-orange-500 p-2"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}