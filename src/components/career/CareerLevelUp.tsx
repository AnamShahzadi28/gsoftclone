
import React from 'react';
import Image from 'next/image';

const CareerLevelUp = () => {
  return (
    



    <div className="relative bg-navbg w-full py-20 lg:py-16  px-4 lg:px-44 flex justify-center md:justify-start items-center text-center lg:text-left lg:min-h-[300px] ">
      
    {/* Text Section */}
    <div className="lg:max-w-2xl">
      <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Ready to take your career to 
        the next level?
      </h2>
    </div>

    {/* Overlapping Image - Desktop Only */}
    <div className="hidden lg:block absolute xl:right-56  lg:right-2 bottom-1 ">
      <Image
        src="/images/career/careerperson.png"
        alt="Career Person"
        width={350}
        height={350}
        className="object-cover"
      />
    </div>
  </div>
  );
};

export default CareerLevelUp;
