import { SharedHeroProps } from '../../types/portfolio';
import React from 'react';



const SharedHero: React.FC<SharedHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-navbg h-[400px] py-20  flex items-center justify-center text-center text-white w-full ">
      <div className="container mx-auto px-4">
       {title && <h1 className="font-bold  text-4xl md:text-5xl mb-4">{title}</h1>}
        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default SharedHero;
