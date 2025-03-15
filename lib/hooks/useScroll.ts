// lib/hooks/useScroll.ts
'use client';

import { useEffect } from 'react';

export const useScroll = (threshold = 10) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      // Add scroll behavior logic here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
};