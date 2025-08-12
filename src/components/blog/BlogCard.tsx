
"use client";

import Link from "next/link";
import { CardBody,CardHeader,Card,CardFooter } from '@heroui/react';
import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";
import { BlogCardProps } from '../../types/blog'; // Import Blog type



const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (



    <Card className="rounded-lg overflow-hidden  bg-white  px-6">
    <CardHeader className="relative p-0 flex flex-col items-start gap-3  pt-4">
 <h2 className="text-2xl font-bold text-black z-10  mb-6">{post.title}</h2>

 <div className="relative w-full">
   <Image
     src={post.image}
     alt={post.title}
     width={800}
     height={600}
     className="w-full h-full object-cover "
   />
   <div className="absolute top-0 right-0 bg-cyan text-black text-sm font-semibold px-3 py-1 rounded-bl-lg">
     {post.publish_date}
   </div>
 </div>
</CardHeader>


     <CardBody className="p-5 space-y-3">
      
       <p className=" text-base line-clamp-4">{post.description}</p>
     </CardBody>

     <CardFooter className="">
 <Link
   href={`/blog/${post.id}`}
   className="bg-cyan hover:bg-cyan-700 text-black py-4 px-5 rounded-full text-sm font-semibold transition flex items-center gap-2"
 >
   Read More <IoArrowForward className="text-black text-lg" />
 </Link>
</CardFooter>
   </Card>
   
  );
};

export default BlogCard;

