# Career and Job Details Module Knowledge Base

This document provides an overview of the Career and Job Details module within the GSoftWeb application, detailing its structure, routes, data models, and data sources.

## 1. Components (`src/components/career`)

This directory houses all reusable React components specifically designed for the career section of the website. These components are responsible for rendering various UI elements related to job listings, application forms, and career-related content.

Key components include:
- `JobCard.tsx`: Displays a single job listing with title, location, experience, and a link to job details.
- `JobListings.tsx`: Renders a collection of `JobCard` components, often including filtering and search functionalities.
- `ApplyForm.tsx`: Provides a form for users to submit job applications.
- `IntroductoryHeader.tsx`: A common header component for career-related pages.
- `Benefits.tsx`: Displays information about company benefits.
- `CareerLevelUp.tsx`: Content related to career growth opportunities.
- `ApplicationProcess.tsx`: Outlines the steps for applying to a job.
- `JobSearchFilter.tsx`: Component for filtering job listings.

## 2. Career Route (`src/app/careers/page.tsx`)

This file defines the main page for the career section. It orchestrates the display of various career components, such as job listings, introductory content, and application process details. This is the entry point for users navigating to the careers page.

## 3. Job Details Route (`src/app/jobDetails/[slug]/page.tsx`)

This dynamic route handles the display of individual job details. The `[slug]` parameter allows for unique URLs for each job, fetching and rendering specific job information based on the provided slug. This page typically includes a detailed job description, requirements, and an option to apply.

## 4. Type Definitions (`src/types/career.ts`)

This TypeScript file defines the data structures (interfaces or types) used throughout the career module. This ensures type safety and consistency across components and data handling.

Key types defined here include:
- `Job`: Represents the structure of a single job listing, including properties like `slug`, `title`, `location`, `experience`, `daysLeft`, and detailed description.
- Other related types for application forms or career-specific data.

## 5. Data Sources (`src/json/careerdata.json`, `src/json/jobDetails.json`)

These JSON files serve as local data sources for the career and job details information. They provide the content that is displayed on the career listings page and individual job detail pages.

- `careerdata.json`: Contains a list of summarized job listings, typically used for the `JobListings` component.
- `jobDetails.json`: Contains detailed information for each job, mapped by a unique identifier (e.g., slug), used by the `jobDetails/[slug]/page.tsx` to render specific job descriptions.

This structured approach ensures modularity, maintainability, and clear separation of concerns within the application's career functionality.