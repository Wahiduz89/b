// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import Navigation from '@/components/Navigation/Navigation';
import MobileMenu from '@/components/Navigation/MobileMenu';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Fitness Hub',
    };
  }
  
  return {
    title: `${post.title} - Fitness Hub Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Navigation />
      <MobileMenu />
      
      <main className="pt-20">
        <article className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href="/blog" className="text-orange-500 hover:underline">
                ← Back to all articles
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-gray-400 mb-8">{post.date}</p>
            
            <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl mb-6">{post.excerpt}</p>
              
              {/* Sample content for the blog post */}
              <p>
                When it comes to fitness, recovery is just as important as the workout itself. 
                Many fitness enthusiasts focus solely on the training aspect but neglect the crucial 
                recovery period where the body actually adapts and improves.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Why Recovery Matters</h2>
              <p>
                During intense exercise, your muscle fibers develop microscopic tears. The recovery 
                process is when these fibers repair themselves, becoming stronger and more resilient 
                than before. Without proper recovery, you risk overtraining, injury, and diminished results.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Key Recovery Strategies</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Prioritize sleep:</strong> Aim for 7-9 hours of quality sleep each night to 
                  allow your body to produce growth hormone and repair muscle tissue.
                </li>
                <li>
                  <strong>Stay hydrated:</strong> Proper hydration is essential for nutrient transport 
                  and waste removal from muscles.
                </li>
                <li>
                  <strong>Optimize nutrition:</strong> Consume adequate protein and carbohydrates post-workout 
                  to replenish glycogen stores and provide building blocks for muscle repair.
                </li>
                <li>
                  <strong>Active recovery:</strong> Light activity like walking or swimming can increase 
                  blood flow and accelerate recovery without adding stress to the body.
                </li>
                <li>
                  <strong>Implement stress management:</strong> Chronic stress can impair recovery through 
                  elevated cortisol levels. Practice meditation, deep breathing, or other relaxation techniques.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
}