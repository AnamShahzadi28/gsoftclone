import Image from 'next/image';
import React from 'react';
import { BlogPostContentProps } from '../../types/blog'; // Import Blog type
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from "next/link"
export const sociallinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/gsoftconsulting" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/gsoftconsulting" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/gsoftconsulting" },
    { icon: <FaTwitter />, href: "https://twitter.com/gsoftconsulting" },
  ];

const BlogPostContent: React.FC<BlogPostContentProps> = ({ blog }) => {
  return (
    <article className="lg:w-2/3 w-full">
      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={400}
        className="rounded-lg mb-6 w-full object-cover"
      />
      <p >{blog.description}</p>
      <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
      <div className="prose prose-lg max-w-none text-gray-800">
        {blog.sections.map((section, index) => {
          switch (section.type) {
            case 'paragraph':
              return <p key={index}>{section.content}</p>;
            case 'heading':
              return <h2 key={index} className=" text-2xl font-bold mt-6 mb-3">{section.content}</h2>;
            case 'subheading':
              return <h3 key={index} className=" text-2xl font-bold mt-6 mb-3">{section.content}</h3>;
            default:
              return null;
          }
        })}
      </div>


      <div className="mt-12">
          {/* Top Row: Tags label, first 2 tags, and social links */}
          <div className="flex flex-wrap items-center  gap-2 text-center">
            <h3 className=" ">Tags:</h3>

            {/* First 1-2 tags inline */}
            {blog.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-transparent text-sm px-4 py-2 rounded-full text-gray-400 border border-gray-400"
              >
                {tag}
              </span>
            ))}

            {/* Social Links */}
            <div className=" hidden md:flex space-x-3   pl-15">
              {sociallinks.map(({ icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white"
                >
                  {React.cloneElement(icon, { size: 20 })}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining tags below */}
          {blog.tags?.length > 2 && (
            <div className="mt-4 flex flex-wrap  gap-3">
              {blog.tags.slice(2).map((tag) => (
                <span
                  key={tag}
                  className="bg-transparent text-sm px-4 py-2 rounded-full  text-gray-400 border border-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      

      
    </article>
  );
};

export default BlogPostContent;