
import React from 'react';
import Image from 'next/image';
import AnimatedOnScroll from '@/utils/AnimatedOnScroll';

const ApplicationProcess = () => {
  return (
    <div className=" w-full lg:max-w-7xl mx-auto px-4 sm:px-6    lg:px-8 py-12">

    <AnimatedOnScroll
           >
 <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-20 items-start">
   
   {/* Left Image */}
   <div className="w-[80%]  lg:w-[600px]  lg:mx-auto">
     <Image
       src="/images/career/carrer.png"
       alt="Career Steps"
       width={500}
       height={300}
       className="w-full h-auto object-cover"
     />
   </div>

   {/* Right Text Steps */}
   <div className="space-y-4 text-black">
     {/* Step 1 */}
     <div>
       <h3 className="text-lg font-semibold">Step 1</h3>
       <h2 className="text-2xl md:text-3xl font-bold mt-3">Explore our Careers page</h2>
       <p className="mt-2  text-lg">
         You can discover exciting opportunities to join our team and make a difference. Browse our current openings and learn more about our company culture, values, and benefits.
       </p>
     </div>

     {/* Step 2 */}
      <div>
       <h3 className="text-lg font-semibold">Step 2</h3>
       <h2 className="text-2xl md:text-3xl font-bold mt-3">Submit Your Application</h2>
       <p className="mt-2  text-lg">
        Follow the instructions on our Careers page to submit your resume and cover letter, and we will be in touch soon!
       </p>
     </div>

     {/* Step 3 */}
     <div>
       <h3 className="text-lg font-semibold">Step 3</h3>
       <h2 className="text-2xl md:text-3xl font-bold mt-3">Showcase your skills in Interview</h2>
       <p className="mt-2  text-lg">
         Be prepared to discuss your relevant experience and accomplishments, ask thoughtful questions, and demonstrate your enthusiasm for the position and the company. Remember to also highlight your soft skills, such as communication, teamwork, and problem-solving, as they are just as important as technical skills in many roles. Good luck!
       </p>
     </div>
   </div>
 </div>

 </AnimatedOnScroll>
</div>
  )
};

export default ApplicationProcess;
