// types/types.ts
export type ClassType = {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  
  export type FeatureType = {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  
  export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    slug: string;
  };
  
  export type PricingPlan = {
    title: string;
    price: string;
    features: string[];
  };