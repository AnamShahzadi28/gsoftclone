"use client";
import { Button } from '@heroui/react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-[380px]"
      style={{backgroundImage: "url('/images/about/aboutbanner.png')"}}
    >
     {/* Overlay */}
     <div className="absolute inset-0 bg-navbg/80 " />

{/* Content */}
<div className="relative  flex items-center lg:pl-36 h-full">
  <div className="px-4 md:px-8 text-center md:text-left  text-white max-w-5xl">
    <h1 className="text-4xl sm:text-5xl font-bold mt-4">About</h1>

    <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 leading-inherit">
      Software Development Company | Global Software Consulting
    </h2>

    <Button
      as={Link}
      href="/estimate-project"
      variant="bordered"
      radius="none"
      className="mt-6 sm:mt-8 text-lg font-semibold text-white border-white px-6 py-4 sm:px-8 sm:py-5 lg:px-30 lg:py-6 hover:bg-white/10 transition"
    >
      {`Let's discuss your project`}
    </Button>
  </div>
</div>
    </section>
  );
};
export default HeroSection;
