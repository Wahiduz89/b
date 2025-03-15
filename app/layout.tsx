// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavProvider } from '@/components/Cards/NavContext';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fitness Hub - Transform Your Body',
  description: 'Premium gym facility with professional trainers and state-of-the-art equipment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <NavProvider>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </NavProvider>
      </body>
    </html>
  );
}