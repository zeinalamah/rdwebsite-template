import { AnimatedCard } from './AnimatedCard';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../data/blogPosts';

export const RecentPosts = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedCard>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Recent Articles</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              Stay updated with our latest insights and analysis
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <AnimatedCard key={post.id} delay={index * 0.1}>
              <BlogCard post={post} showSocial />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};