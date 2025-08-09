
"use client"
import Link from 'next/link';
import { Service } from '@/types/services';
import { Card,CardBody } from '@heroui/react';
import React from 'react';
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineCodeBracketSquare,
  HiOutlineCog,
  HiOutlineCodeBracket,
  HiOutlineViewfinderCircle,
  HiOutlineCloud,
  HiOutlinePencil,
  HiOutlineUserGroup,
  HiOutlineCloudArrowUp
} from 'react-icons/hi2';

const iconMap: { [key: string]: React.ReactElement } = {
    HiOutlineComputerDesktop: <HiOutlineComputerDesktop />,
  HiOutlineDevicePhoneMobile: <HiOutlineDevicePhoneMobile />,
  HiOutlineChip: <HiOutlineCpuChip />,
  HiOutlineCodeBracketSquare: <HiOutlineCodeBracketSquare />,
  HiOutlineCog: <HiOutlineCog />,
  HiOutlineCodeBracket: <HiOutlineCodeBracket />,
  HiOutlineViewfinderCircle: <HiOutlineViewfinderCircle />,
  HiOutlineCloud: <HiOutlineCloud />,
  HiOutlinePencil: <HiOutlinePencil />,
  HiOutlineUserGroup: <HiOutlineUserGroup />,
  HiOutlineCloudArrowUp: <HiOutlineCloudArrowUp />
};


interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link href={`/services/${service.slug}`} className="w-full">
      <Card
        className="group relative bg-transparent hover:bg-navbg duration-300 shadow-none h-full rounded-lg border-x-2 border-transparent hover:border-cyan overflow-hidden"
      >
        {/* Cyan overlay on hover */}
        <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
        <Link href={`/services/${service.slug}`}>
          <CardBody className="p-6 text-center flex flex-col items-center h-full">
            <div className="mb-4 flex items-center justify-center text-cyan-400 group-hover:text-white text-6xl transition-colors duration-300">
              {iconMap[service.icon as keyof typeof iconMap]}
            </div>
            <h3 className="text-2xl font-bold text-white text-center leading-snug h-20 flex flex-col items-center justify-center">
              {service.title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h3>
            <p className="text-base text-white leading-relaxed text-center">
              {service.shortDescription}
            </p>
          </CardBody>
        </Link>
      </Card>
    </Link>
  );
};

export default ServiceCard;
