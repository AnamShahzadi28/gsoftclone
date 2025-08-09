import React from 'react';

import {ServiceHeroProps  } from '@/types/services';




const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
}) => {
  return (
    <section
      className="relative h-[550px] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-navbg/50"></div>
      <div className="relative z-10 p-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-2xl md:text-4xl leading-snug max-w-4xl ">{subtitle}</p>
      </div>
    </section>
  );
};

export default ServiceHero;
