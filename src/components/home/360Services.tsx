"use client"
import React from 'react';
import services from '@/json/services.json';
import AnimatedOnScroll from '@/utils/AnimatedOnScroll';
import { Card } from '@heroui/react';
import Link from 'next/link';
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,

  HiOutlineCodeBracketSquare,
  HiOutlineCog,
  HiOutlineCodeBracket,
  HiOutlineViewfinderCircle,
  HiOutlineCloud,
  HiOutlinePencil,
  HiOutlineUserGroup,
  HiOutlineCloudArrowUp,
  
  } from 'react-icons/hi2';
import { HiOutlineBeaker } from 'react-icons/hi';

const iconMap: { [key: string]: React.ReactElement } = {
    HiOutlineComputerDesktop: <HiOutlineComputerDesktop />,
  HiOutlineDevicePhoneMobile: <HiOutlineDevicePhoneMobile />,
  HiOutlineBeaker: <HiOutlineBeaker />,
  HiOutlineCodeBracketSquare: <HiOutlineCodeBracketSquare />,
  HiOutlineCog: <HiOutlineCog />,
  HiOutlineCodeBracket: <HiOutlineCodeBracket />,
  HiOutlineViewfinderCircle: <HiOutlineViewfinderCircle />,
  HiOutlineCloud: <HiOutlineCloud />,
  HiOutlinePencil: <HiOutlinePencil />,
  HiOutlineUserGroup: <HiOutlineUserGroup />,
  HiOutlineCloudArrowUp: <HiOutlineCloudArrowUp />,
};

const Services360 = () => {
  return (
    <AnimatedOnScroll  once={false}>
      <section className="bg-[#6cdcf4] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold  mb-12">Our 360° Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.servicesData.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <Card
                  className="group text-center flex flex-col items-center p-6 bg-transparent hover:bg-navbg transition-colors duration-300 h-full rounded-lg shadow-none"
                >
                  <div className="  group-hover:text-white text-navbg text-6xl  transition-colors duration-300">
                    {iconMap[service.icon as keyof typeof iconMap]}
                  </div>
                  <h3 className=" text-navbg text-xl font-bold group-hover:text-white  h-20 flex flex-col items-center justify-center leading-tight transition-colors duration-300">
                    {service.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h3>
                  <p className=" text-navbg group-hover:text-white leading-relaxed text-lg transition-colors duration-300">
                    {service.shortDescription}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedOnScroll>
  );
};

export default Services360;
