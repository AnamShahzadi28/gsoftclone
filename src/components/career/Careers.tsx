
"use client";

import React, { useState, useEffect } from 'react';
import IntroductoryHeader from './IntroductoryHeader';
import CareerLevelUp from './CareerLevelUp';
import ApplicationProcess from './ApplicationProcess';
import JobSearchFilter from './JobSearchFilter';
import JobListings from './JobListings';
import Benefits from './Benefits';
import SharedHero from '../portfolio/SharedHero';
import { Job } from '@/types/career';
import jobData from '@/json/careerdata.json';

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setJobs(jobData);
      setFilteredJobs(jobData);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let tempJobs = jobs;

    if (searchTerm) {
      tempJobs = tempJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (experienceFilter && experienceFilter !== 'All Experience') {
      tempJobs = tempJobs.filter(job => job.experience === experienceFilter);
    }

    if (categoryFilter && categoryFilter !== 'All Categories') {
      tempJobs = tempJobs.filter(job => job.category === categoryFilter);
    }

    setFilteredJobs(tempJobs);
  }, [searchTerm, experienceFilter, categoryFilter, jobs]);

  return (
    <>
      <SharedHero title="Building What's Next!" />
      <IntroductoryHeader />
      <CareerLevelUp />
      <ApplicationProcess />
      <JobSearchFilter 
        searchTerm={searchTerm}
        experienceFilter={experienceFilter}
        categoryFilter={categoryFilter}
        onSearchChange={setSearchTerm}
        onExperienceChange={setExperienceFilter}
        onCategoryChange={setCategoryFilter}
      />
      <JobListings jobs={filteredJobs} isLoading={isLoading} />
      <Benefits />
    </>
  );
};

export default Careers;
