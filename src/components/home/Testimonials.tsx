"use client";

import Image from 'next/image';
import testimonialsData from '@/json/testimonials.json';
import { Testimonial } from '@/types/home';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';

const TestimonialCard = ({
  testimonial,
  isCenter,
}: {
  testimonial: Testimonial;
  isCenter: boolean;
}) => (
  <div className="flex-shrink-0 snap-center w-[80vw] md:w-[60vw]   lg:w-[40vw] max-w-2xl ">
    <div
      className={`flex flex-col items-center transition-all duration-500 ease-in-out ${
        isCenter
          ? 'opacity-100 scale-100 blur-0'
          : 'opacity-50 scale-80 blur-[1.5px]'
      }`}
    >
      <div className="bg-[#0f5368] min-h-[260px] px-8 py-10 rounded-xl flex items-center justify-center  text-left relative w-full">
        <p className="text-lg leading-relaxed">{testimonial.text}</p>
      </div>
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ease-in-out mt-6 ${
          isCenter ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <div className="space-y-2">
          <div className="w-1 h-1 bg-white rounded-full mx-auto"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
        </div>
        <div className="relative w-24 h-24 mt-4">
          <Image
            src={testimonial.logo}
            alt={`${testimonial.company} logo`}
            fill
            className="rounded-full border-4 border-cyan object-cover"
          />
        </div>
        <h4 className="text-2xl font-bold mt-4">{testimonial.company}</h4>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const { scrollContainerRef, centerIndex } = useCenteredCarousel(
    testimonialsData.length,
    { initialIndex: 1 }
  );

  return (
    <section className="w-full py-20 bg-navbg text-white">
      <div className="container mx-auto text-center">
        <h3 className="font-semibold text-xl tracking-wider  ">Testimonials</h3>
        <h2 className="text-4xl md:text-5xl  font-bold mt-5 mb-14">What Our Clients Say</h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex cursor-grab items-center gap-8 lg:gap-16 overflow-x-auto scroll-smooth snap-x snap-mandatory mt-16 lg:pl-[50%] lg:pr-[50%] no-scrollbar"
      >
        {testimonialsData.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} isCenter={i === centerIndex} />
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
