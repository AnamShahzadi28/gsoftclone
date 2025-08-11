import React from 'react';
import careerdata from '@/json/careerdata.json';
import jobDetailsData from '@/json/jobDetails.json';
import ApplyForm from '@/components/career/ApplyForm';
import { JobDetails, JobDetailsParams   } from '@/types/career';

const JobDetailsPage: React.FC<JobDetailsParams> = async ({ params }) => {
  const { slug } = await  params;
  const job = careerdata.find((job) => job.slug === slug);
  const jobDetails = jobDetailsData[slug as keyof typeof jobDetailsData] as JobDetails;

  if (!job || !jobDetails) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-30">
        <h1 className="text-4xl font-bold text-gray-800">Job Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl  md:text-4xl font-bold text-black mb-5">{job.title}</h1>
          <p className="text-lg mb-4">{jobDetails.introduction}</p>
          
          <h2 className="text-xl font-bold text-black mb-8">Skills you should have</h2>
          <ul className="list-disc list-inside mb-6 space-y-4  text-lg">
            {jobDetails.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          {jobDetails.niceToHave && (
            <>
              <h2 className="text-xl font-bold text-black mb-8">Nice to have:</h2>
              <ul className="list-disc list-inside mb-6 space-y-4  text-lg">
                {jobDetails.niceToHave.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="text-xl font-bold text-black mb-8">What will you do?</h2>
          <ul className="list-disc list-inside mb-6 space-y-4  text-lg">
            {jobDetails.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>

          {jobDetails.whyWorkWithUs && (
            <>
              <h2 className="text-xl font-bold text-black mt-8">Why work with us?</h2>
              <ul className="list-disc list-inside mt-6 space-y-4 text-lg">
                {jobDetails.whyWorkWithUs.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {jobDetails.howToApply && (
            <>
              <h2 className="text-2xl font-bold text-cyan mt-8">How to apply?</h2>
              <p className="mt-4 text-gray-600">{jobDetails.howToApply}</p>
            </>
          )}
        </div>
        <div className="lg:col-span-1">
          <ApplyForm  />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;