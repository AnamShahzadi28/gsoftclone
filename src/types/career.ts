export interface Job {
  id: number;
  slug: string;
  title: string;
  location: string;
  experience: string;
  category: string;
  daysLeft: number;
}


 export interface JobListingsProps {
  jobs: Job[];
  isLoading: boolean;
}



 export interface JobSearchFilterProps {
  searchTerm: string;
  experienceFilter: string;
  categoryFilter: string;
  onSearchChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}



export interface JobDetails {
  introduction: string;
  skills: string[];
  responsibilities: string[];
  niceToHave?: string[];
  whyWorkWithUs?: string[];
  howToApply?: string;
}

export interface JobDetailsPageProps {
  
    slug: string;
  
}


export interface JobDetailsParams {


  params: Promise<JobDetailsPageProps>;
}

import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "This field is required"),
  email: z.string().email("This field is required"),
  phone: z.string().min(10, "This field is required"),
  file: z.any().refine((file) => file?.length > 0, {
    message: "File is required",
  }),
});

export type FormData = z.infer<typeof formSchema>;