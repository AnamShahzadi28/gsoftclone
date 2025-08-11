import React from 'react';
import { CircularProgress } from '@heroui/react';
import JobCard from './JobCard';
import { JobListingsProps } from '@/types/career';



const JobListings: React.FC<JobListingsProps> = ({ jobs, isLoading }) => {
  const filteredJobs = jobs;

  return (
    <>

<div className="max-w-7xl mx-auto p-6">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <CircularProgress aria-label="Loading..." className="text-cyan" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-6 mt-6 ">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <JobCard key={idx} {...job} />
            ))
          ) : (
            <p className="text-center col-span-full text-black mt-4 text-2xl font-bold py-12">
              No jobs found matching your criteria.
            </p>
          )}
        </div>
      )}
</div>
    </>
  );
};

export default JobListings;