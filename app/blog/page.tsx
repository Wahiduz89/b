// app/blog/page.tsx
import { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import BlogCard from '@/components/Cards/BlogCard';
import AnimatedSection from '@/components/Animation/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog - Fitness Hub',
  description: 'Latest fitness tips, news, and workout guides',
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Latest Articles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}