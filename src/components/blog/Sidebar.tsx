"use client"
import { SearchIcon } from 'lucide-react';
import React from 'react';
import { SidebarProps } from '../../types/blog'; // Import Blog type


const Sidebar: React.FC<SidebarProps> = ({ posts, onSearchChange }) => {


  return (
   

<>


  {/* Right: Search + Popular */}
  <aside className="hidden lg:block lg:col-span-1 bg-white p-2 px-7  rounded-lg shadow space-y-6 max-h-[500px] overflow-auto no-scrollbar">
  <h4 className="font-bold text-md mb-3">Most Popular</h4>

  {/* Search Input */}
  <div className="relative">
    <input
      type="text"
    
      placeholder="Search the blog"
      onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
      className="h-10 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white"
    />
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
      <SearchIcon size={18} />
    </div>
  </div>

  {/* Blog List */}
  <div>
    <ul className="text-sm text-black space-y-4">
      {posts.slice(0, 5).map((item,idx) => (
        <li key={idx} className="pb-1">
          <div className="font-bold text-lg ">{item.title}</div>
          <div className="text-lg">{item.publish_date}</div>
        </li>
      ))}
    </ul>
  </div>
</aside>

</>

   


  );
};

export default Sidebar;

