# Portfolio Module Documentation

## Overview
This document outlines the structure and functionality of the portfolio section within the application. The portfolio module is responsible for displaying a collection of projects, including a main listing page and individual detail pages for each project. A key aspect of this module's design is the centralized management of data types, ensuring consistency and maintainability across all related components and pages.

## File Structure

The portfolio-related files are organized as follows:

-   `h:\gsoft\gsoftweb\src\app\portfolio\page.tsx`: The main portfolio listing page.
-   `h:\gsoft\gsoftweb\src\app\portfolio\[slug]\page.tsx`: Dynamic page for displaying individual project details.
-   `h:\gsoft\gsoftweb\src\components\portfolio\`: Directory containing reusable UI components for the portfolio.
    -   `PortfolioCard.tsx`: Displays a summary card for a single portfolio project.
    -   `PortfolioDetailContent.tsx`: Renders the detailed content of a specific portfolio project.
    -   `PortfolioGrid.tsx`: Arranges and filters `PortfolioCard` components in a grid layout.
    -   `SharedHero.tsx`: A reusable hero section component used across portfolio pages.
-   `h:\gsoft\gsoftweb\src\types\portfolio.ts`: Centralized type definitions for all portfolio-related data structures and component props.
-   `h:\gsoft\gsoftweb\src\json\portfoliodata.json`: JSON file containing the raw data for all portfolio projects.

## Type Definitions (`h:\gsoft\gsoftweb\src\types\portfolio.ts`)

This file serves as the single source of truth for all TypeScript interfaces used within the portfolio module. This approach ensures type safety and consistency, making the codebase easier to understand and maintain.

-   `PortfolioProject`: Defines the structure of a single portfolio project, including properties like `id`, `slug`, `title`, `category`, `image`, `description`, `technologies`, and optional `features`.
-   `SharedHeroProps`: Defines the props for the `SharedHero` component, including `title` and an optional `subtitle`.
-   `PortfolioGridProps`: Defines the props for the `PortfolioGrid` component, specifically an array of `PortfolioProject` objects.
-   `PortfolioCardProps`: Defines the props for the `PortfolioCard` component, which expects a single `PortfolioProject` object.
-   `PortfolioDetailContentProps`: Defines the props for the `PortfolioDetailContent` component, also expecting a single `PortfolioProject` object.

All components and pages within the portfolio module import these types directly from `portfolio.ts`, ensuring that data structures conform to these definitions.

## Component and Page Breakdown

### `h:\gsoft\gsoftweb\src\app\portfolio\page.tsx`
This is the entry point for the portfolio section. It orchestrates the display of the portfolio by:
-   Rendering the `SharedHero` component for a consistent header.
-   Passing the `portfolioData` (imported from `src/json/portfoliodata.json`) to the `PortfolioGrid` component.
-   Utilizes `Technologies` component to display technologies.

### `h:\gsoft\gsoftweb\src\app\portfolio\[slug]\page.tsx`
This dynamic route handles the display of individual portfolio project details.
-   It retrieves the `slug` from the URL parameters.
-   It finds the corresponding project data from `portfolioData.json` using the `slug`.
-   If no project is found, it triggers a `notFound()` error.
-   It uses `SharedHero` to display the project title and `PortfolioDetailContent` to render the full project details.
-   It imports `PortfolioProject` type from `src/types/portfolio.ts` to type the project data.
-   Includes `generateStaticParams` for static site generation (SSG) of individual project pages.

### `h:\gsoft\gsoftweb\src\components\portfolio\PortfolioCard.tsx`
This component is responsible for rendering a clickable card representation of a portfolio project.
-   It accepts `project` as a prop, typed as `PortfolioCardProps` (which internally uses `PortfolioProject`).
-   It displays the project's image, title, a truncated description, and technologies.
-   It links to the individual project detail page using `next/link`.

### `h:\gsoft\gsoftweb\src\components\portfolio\PortfolioDetailContent.tsx`
This component displays the comprehensive details of a selected portfolio project.
-   It accepts `project` as a prop, typed as `PortfolioDetailContentProps` (which internally uses `PortfolioProject`).
-   It renders the project's main image, technologies, full description, and an optional list of features.
-   Includes placeholder images for app store links.

### `h:\gsoft\gsoftweb\src\components\portfolio\PortfolioGrid.tsx`
This component is responsible for laying out and filtering the portfolio projects.
-   It accepts `projects` as a prop, typed as `PortfolioGridProps` (an array of `PortfolioProject`).
-   It uses tabs to allow users to filter projects by category (e.g., 'Mobile App', 'Web App').
-   It dynamically renders `PortfolioCard` components based on the active filter.
-   It manages its own state for the active tab.

### `h:\gsoft\gsoftweb\src\components\portfolio\SharedHero.tsx`
A generic hero section component used at the top of portfolio pages.
-   It accepts `title` and an optional `subtitle` as props, typed as `SharedHeroProps`.
-   Provides a consistent visual header for both the main portfolio page and individual project detail pages.

## Data Flow

The portfolio data originates from `h:\gsoft\gsoftweb\src\json\portfoliodata.json`. This JSON file contains an array of objects, each conforming to the `PortfolioProject` interface.

1.  `h:\gsoft\gsoftweb\src\app\portfolio\page.tsx` imports `portfoliodata.json`.
2.  The entire `portfolioData` array is passed as the `projects` prop to `PortfolioGrid.tsx`.
3.  `PortfolioGrid.tsx` then filters and maps this data to render individual `PortfolioCard.tsx` components.
4.  For detail pages, `h:\gsoft\gsoftweb\src\app\portfolio\[slug]\page.tsx` also imports `portfoliodata.json` and finds the specific project based on the URL slug. This project data is then passed to `PortfolioDetailContent.tsx`.

This centralized data source and type definition system ensures that all parts of the portfolio module work with a consistent and predictable data structure.
