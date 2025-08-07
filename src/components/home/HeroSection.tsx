"use client"
import AnimatedOnScroll from "@/utils/AnimatedOnScroll";
import { Button } from "@heroui/react";
import Link from "next/link";

const HeroSection = () => {
  return (
   
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('images/gsoftherobanner.png')" }}
    >
       <AnimatedOnScroll >
     
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-24 sm:py-32">
          <div className="text-white w-full max-w-4xl">
            <h1 className="text-4xl  md:text-4xl lg:text-5xl font-bold leading-tight">
              Software <span className="text-cyan">Development</span><br />
              <span className="text-cyan">Company</span> For Your Market<br />
              Leadership In Business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white max-w-2xl">
              Since 2012, we have been a trusted software development company that has helped businesses in all kinds of industries. We provide services in Web and Mobile development, UI/UX, DevOps, Cloud services, SEO and many more.
            </p>
            <div className="mt-10">
            <Button
    as={Link}
     href="/estimate-project"
    variant="bordered"
    radius="sm"
     className="bg-transparent text-lg sm:text-xl border border-cyan text-white font-semibold py-4 px-8 sm:py-6 sm:px-9 md:px-12 rounded hover:bg-cyan hover:border-white transition cursor-pointer"
  >
    {`Let's discuss your project`}
  </Button>
   
            </div>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
    </section>
    
  );
};

export default HeroSection;
