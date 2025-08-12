
import { notFound } from 'next/navigation';
import  blogData  from '../../../json/blogdata.json';
import BlogPostContent from '@/components/blog/BlogPostContent';
import Sidebar from '@/components/blog/Sidebar'; // Removed duplicate import
import SharedHero from '@/components/portfolio/SharedHero';
import { Blog,BlogDetailPageProps } from '../../../types/blog'; // Import Blog type
import React from 'react';

export default async function Page({ params }: BlogDetailPageProps) {

  const { slug } = await  params;
  const blog: Blog | undefined = blogData.find((item: Blog) => item.id === slug) as Blog; // Cast to Blog type

  if (!blog) return notFound();

  // Filter out the current blog from the list for the sidebar
  const otherBlogs: Blog[] = blogData.filter((item: Blog) => item.id !== slug) as Blog[]; // Cast to Blog[] type

  return (



<>

<SharedHero title = {blog.title} subtitle ={ blog.publish_date} />

<div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">


{/* Main Blog Content */}
<BlogPostContent blog={blog} />

<div className="lg:col-span-1">
    <Sidebar posts={otherBlogs} /> {/* Changed prop to otherBlogs and removed onSearchChange */}
  </div>
</div>
</>

   
  );
}
