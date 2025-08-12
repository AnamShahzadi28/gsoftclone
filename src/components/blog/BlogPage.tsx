"use client"
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';
import blogData from '../../json/blogdata.json';
import { Pagination } from '@heroui/react';
import { Blog } from '../../types/blog'; // Import Blog type


const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6; // You can adjust this number

  useEffect(() => {
    const fetchPosts =  () => {
      try {
       
        const data: Blog[] =  blogData;
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Static Articles Section */}


         
      <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7 rounded-lg shadow  max-h-[490px] overflow-auto  no-scrollbar">
        <h3 className="text-xl font-bold mb-6">Articles</h3>
        <p className="text-lg   ">
          Mute on the boring weblogs. Here is something fresh in the articles billet! We uncover what you want to read. Whether you are a marketer exploring the marketing guides or a non-specialist with an online business looking for some insights and tips, we have something for everyone.
        </p>
      </aside>
       

        {/* Middle Column - Blog Feed */}



        <main className=" col-span-4 lg:col-span-2 space-y-6">
       
          <div className="grid grid-cols-1  gap-6">
          {currentPosts.length > 0 ? (
          currentPosts.map((post) => <BlogCard key={post.id} post = {post} />)
        ) : (
          <p className="text-gray-600 text-center">No results found.</p>
        )}



           
          </div>



          <div className="pt-8 flex justify-center items-center">
          <Pagination
            total={totalPages}
            initialPage={currentPage}
            onChange={paginate}
            loop
            showControls
            color="default"

          />
        </div>

       

        
       

        </main>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar posts={posts} onSearchChange={setSearchQuery} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
