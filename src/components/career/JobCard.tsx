import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { IoArrowForward } from 'react-icons/io5';
import { Clock } from 'lucide-react';
import { Job } from '@/types/career';

const JobCard: React.FC<Job> = ({ slug, title, location, experience, daysLeft }) => {
  return (
    <Card className= " w-full max-w-[400px] mx-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
  
  <CardHeader>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-black mb-1">{location}</p>
          <p className="text-black">Experience {experience}</p>
        </div>
      </CardHeader>
  
      
      <CardBody className="flex flex-row justify-between items-center">
        <Link href={`/jobDetails/${slug}`} className="font-normal text-black flex items-center">
          Apply Now <IoArrowForward className="ml-2 text-cyan text-xl font-bold" />
        </Link>
        <p className="flex items-center text-black text-sm">
          <Clock className="w-4 h-4 mr-1" /> {daysLeft} days left
        </p>
      </CardBody>
    </Card>
  );
};

export default JobCard;