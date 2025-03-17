// lib/data.ts
import { ClassType, FeatureType, BlogPost, PricingPlan } from '@/types/types';

export const classes: ClassType[] = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build muscle mass with professional guidance and advanced equipment.',
    image: '/api/placeholder/400/320'
  },
  {
    id: 2,
    title: 'HIIT Classes',
    description: 'High-intensity interval training to maximize calorie burn and improve stamina.',
    image: '/api/placeholder/400/320'
  },
  {
    id: 3,
    title: 'Yoga & Pilates',
    description: 'Improve flexibility, core strength, and mental wellness with expert instructors.',
    image: '/api/placeholder/400/320'
  },
  {
    id: 4,
    title: 'CrossFit',
    description: 'Functional training that combines strength and conditioning in a competitive environment.',
    image: '/api/placeholder/400/320'
  },
  {
    id: 5,
    title: 'Spin Classes',
    description: 'Indoor cycling workouts set to energizing music with motivational instructors.',
    image: '/api/placeholder/400/320'
  },
  {
    id: 6,
    title: 'Boxing',
    description: 'Learn proper technique while getting a full-body workout with our boxing coaches.',
    image: '/api/placeholder/400/320'
  }
];

export const features: FeatureType[] = [
  {
    id: 1,
    title: '24/7 Access',
    description: 'Our facilities are open all day, every day for your convenience.',
    icon: '⏰'
  },
  {
    id: 2,
    title: 'Expert Trainers',
    description: 'Certified professionals to guide you through your fitness journey.',
    icon: '👨‍🏫'
  },
  {
    id: 3,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and tools for optimal training.',
    icon: '💪'
  },
  {
    id: 4,
    title: 'Recovery Zone',
    description: 'Dedicated areas for stretching, massage, and relaxation.',
    icon: '🧘'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Membership",
    price: "$49/mo",
    features: [
      "24/7 Gym Access",
      "Standard Equipment Usage",
      "1 Free Training Session",
      "Access to Group Classes"
    ]
  },
  {
    title: "Premium Membership",
    price: "$89/mo",
    features: [
      "24/7 Gym Access",
      "All Equipment Access",
      "Weekly Training Session",
      "Nutrition Consultation",
      "Recovery Zone Access",
      "Guest Passes (2/month)"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tips for Better Workout Recovery",
    excerpt: "Learn how to optimize your recovery process to maximize gains and prevent injuries.",
    image: "/api/placeholder/400/320",
    date: "March 15, 2024",
    slug: "workout-recovery-tips"
  },
  {
    id: 2,
    title: "Nutrition Fundamentals for Muscle Growth",
    excerpt: "Everything you need to know about proper nutrition to support your muscle-building goals.",
    image: "/api/placeholder/400/320",
    date: "March 8, 2024",
    slug: "nutrition-muscle-growth"
  },
  {
    id: 3,
    title: "How to Break Through Fitness Plateaus",
    excerpt: "Strategies to overcome stagnation in your fitness journey and continue making progress.",
    image: "/api/placeholder/400/320",
    date: "March 1, 2024",
    slug: "breaking-fitness-plateaus"
  }
];