import BlogPage from '@/components/blog/BlogPage';
import SharedHero from '@/components/portfolio/SharedHero';

export default function Blog() {
  return    (
  
  <>
  <SharedHero title = "Blog" isBlogPage={true} />
  <BlogPage />

  </>
  );
}

