
import AnimatedOnScroll from '@/utils/AnimatedOnScroll';
import React from 'react';

const IntroductoryHeader = () => {
  return (
   


    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">

    <AnimatedOnScroll
    once={false}
    >
  <div className="max-w-6xl mx-auto text-center">
    <h6 className="text-2xl  ">
    Careers
    </h6>

    <h2   className="text-3xl font-black  mb-4 ">{`It's not just a job, it’s an adventure!`}</h2>

    <p className="text-lg   mb-8">
    Are you ready to join a team that values collaboration, innovation, and excellence? Look no further! Our company is committed to creating a positive and inclusive work environment where employees can thrive and grow in their careers. We believe in investing in our people and providing them with the resources and support they need to achieve their professional goals. With competitive salaries and benefits packages, as well as opportunities for growth and development, we invite you to explore the possibilities of working with us. Join our team today and make a positive impact on the world around us!
    </p>

   
  </div>
  </AnimatedOnScroll>
</section>


  );
};

export default IntroductoryHeader;
