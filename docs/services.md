# Services Module Documentation

## Overview
This document outlines the structure and functionality of the services section of the application. The services module is responsible for showcasing the various services offered, complete with a main landing page and detailed pages for each individual service. The module is designed with a focus on clear data contracts, reusable components, and a logical data flow, ensuring maintainability and scalability.

## File Structure
The services-related files are organized as follows:

-   `h:\gsoft\gsoftweb\src\app\services\page.tsx`: The main services landing page.
-   `h:\gsoft\gsoftweb\src\app\services\[slug]\page.tsx`: Dynamic page for displaying individual service details.
-   `h:\gsoft\gsoftweb\src\components\services\`: Directory containing reusable UI components for the services section.
    -   `ServiceCard.tsx`: Displays a summary card for a single service.
    -   `ServiceDetails.tsx`: Renders the detailed content of a specific service.
    -   `ServiceGrid.tsx`: Arranges `ServiceCard` components in a grid layout.
    -   `WhatWeOffer.tsx`: A descriptive component explaining the company's offerings.
    -   `WhyChooseUs.tsx`: A component highlighting the company's core values.
    -   `shared/ServiceHero.tsx`: A reusable hero section component for service pages.
-   `h:\gsoft\gsoftweb\src\types\services.ts`: Centralized TypeScript type definitions for all service-related data structures and component props.
-   `h:\gsoft\gsoftweb\src\json\services.json`: JSON file containing the data for all services.
-   `h:\gsoft\gsoftweb\src\json\whyChooseUs.json`: JSON file containing data for the "Why Choose Us" section.

## Type Definitions (`h:\gsoft\gsoftweb\src\types\services.ts`)
This file acts as the single source of truth for all TypeScript interfaces used within the services module, ensuring type safety and code consistency.

-   `ServiceHeroProps`: Defines the props for the `ServiceHero` component, including `title`, `subtitle`, and `backgroundImageUrl`.
-   `ServiceSection`: Defines the structure for a content section within a service detail page, including `title`, `description`, `image`, and an array of `bullets`.
-   `ServiceDetailPage`: Defines the structure for the detailed content of a service, containing a `hero` object and an array of `sections`.
-   `Service`: The main interface for a single service, including `id`, `slug`, `icon`, `title`, `shortDescription`, and a nested `detailPage` object.
-   `CoreValue`: Defines the structure for a single core value item, including `title`, `description`, and `icon`.
-   `CoreValuesData`: Defines the props for the `WhyChooseUs` component, containing `left` and `right` arrays of `CoreValue` items.
-   `ServiceDetailPageProps`: Defines the props for the dynamic service detail page, containing the `params` object with the service `slug`.

## Component and Page Breakdown

### `h:\gsoft\gsoftweb\src\app\services\page.tsx`
This is the main entry point for the services section. It assembles the page by rendering several components in sequence:
-   `ServiceHero`: Displays a prominent hero section for the main services page.
-   `WhatWeOffer`: Shows a general description of the company's services.
-   `ServiceGrid`: Renders a grid of all available services.
-   `WhyChooseUs`: Displays the company's core values.

### `h:\gsoft\gsoftweb\src\app\services\[slug]\page.tsx`
This dynamic route displays the details for a single service.
-   It extracts the `slug` from the URL parameters.
-   It passes the `slug` to the `ServiceDetails` component, which then fetches and renders the appropriate data.

### `h:\gsoft\gsoftweb\src\components\services\ServiceCard.tsx`
This component renders a clickable card for a single service.
-   It receives a `service` object (of type `Service`) as a prop.
-   It displays the service's icon, title, and a short description.
-   It uses a client-side `iconMap` to render the correct React icon based on the `icon` string from the JSON data.
-   The entire card is a `Link` that navigates to the corresponding service detail page.

### `h:\gsoft\gsoftweb\src\components\services\ServiceDetails.tsx`
This component is responsible for rendering the entire detail page for a selected service.
-   It takes a `slug` as a prop.
-   It finds the correct service data from the imported `servicesData.json`.
-   It renders a `ServiceHero` component with the specific title, subtitle, and background image for the service.
-   It maps over the `sections` array of the service's `detailPage` data to render alternating image/text content blocks.
-   Each section includes a title, description, bullet points, and a "Get Quote" button.

### `h:\gsoft\gsoftweb\src\components\services\ServiceGrid.tsx`
This component displays a grid of all services.
-   It imports data directly from `servicesData.json`.
-   It maps over the `servicesData.servicesData` array and renders a `ServiceCard` for each service.

### `h:\gsoft\gsoftweb\src\components\services\WhatWeOffer.tsx`
A simple static component that displays a title and a paragraph describing what the company offers.

### `h:\gsoft\gsoftweb\src\components\services\WhyChooseUs.tsx`
This component displays the company's core values in a two-column layout with a central image.
-   It imports its data from `whyChooseUs.json`.
-   It uses an `iconMap` to render React icons based on string names from the JSON data.

### `h:\gsoft\gsoftweb\src\components\services\shared\ServiceHero.tsx`
A reusable hero component used on both the main services page and individual service detail pages.
-   It accepts `title`, `subtitle`, and `backgroundImageUrl` as props, conforming to the `ServiceHeroProps` interface.
-   It displays the title and subtitle over a background image.

## Data Flow

The data for the services module originates from two JSON files:
-   `h:\gsoft\gsoftweb\src\json\services.json`: Contains an array of `Service` objects.
-   `h:\gsoft\gsoftweb\src\json\whyChooseUs.json`: Contains the data for the core values section.

1.  **Main Services Page (`/services`)**:
    -   `ServiceGrid.tsx` imports `services.json` and passes each service object to a `ServiceCard.tsx` component.
    -   `WhyChooseUs.tsx` imports `whyChooseUs.json` to render the core values.

2.  **Service Detail Page (`/services/[slug]`)**:
    -   The `slug` is passed from the page to the `ServiceDetails.tsx` component.
    -   `ServiceDetails.tsx` imports `services.json`, finds the service with the matching `slug`, and uses this data to render the hero and content sections.

This architecture ensures a clean separation of data, presentation, and page structure, making the module easy to manage and extend.
