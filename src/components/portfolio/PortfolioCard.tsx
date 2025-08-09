import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody } from "@heroui/react";

import { PortfolioCardProps } from '../../types/portfolio';

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <Card className="bg-transparent shadow-none border-none text-center">
        <CardBody className="flex flex-col px-4 pb-6 items-center text-center">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-auto object-cover mb-4"
          />

          <h4 className="text-3xl font-bold mb-2">{project.title}</h4>

          <p className="text-gray-700 text-sm mb-4 line-clamp-4">{project.description}</p>

          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 mt-2">
            {project.technologies.map((stack) => (
              <span
                key={stack}
                className="bg-black text-white text-sm px-3 py-1"
              >
                {stack}
              </span>
            ))}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PortfolioCard;
