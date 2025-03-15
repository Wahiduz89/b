// lib/data.ts
import { ClassType, FeatureType, BlogPost, PricingPlan } from '@/types/types';

export const classes: ClassType[] = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build muscle mass with professional guidance',
    image: '/images/classes/strength.jpg'
  },
  // Add other classes...
];

export const features: FeatureType[] = [
  {
    id: 1,
    title: '24/7 Access',
    description: 'Access our facilities anytime',
    icon: '⏰'
  },
  // Add other features...
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Membership",
    price: "$49/mo",
    features: [
      "24/7 Gym Access",
      "Standard Equipment",
      "1 Free Training Session",
      "Group Classes"
    ]
  },
  // Add other plans...
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tips for Better Workout Recovery",
    excerpt: "Learn how to optimize your recovery process...",
    image: "/images/blog/recovery.jpg",
    date: "March 15, 2024",
    slug: "workout-recovery-tips"
  },
  // Add other posts...
];