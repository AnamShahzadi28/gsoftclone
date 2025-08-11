
# Life at Gsoft Page Knowledge Base

This document provides a structured overview of the "Life at Gsoft" page for AI models and developers.

## 1. Overview

The "Life at Gsoft" page is accessible at the `/life-at-gsoft` route. Its purpose is to showcase the company culture and work environment.

The main entry point for this page is `src/app/life-at-gsoft/page.tsx`.

## 2. File Structure

-   **`src/app/life-at-gsoft/page.tsx`**: The main page component.
-   **`src/components/life-at-gsoft/LifeAtGSoft.tsx`**: The component that renders the main content of the page.
-   **`src/components/portfolio/SharedHero.tsx`**: A shared component used for the page's hero section.

## 3. Component Breakdown

### 3.1. `page.tsx` (Life at Gsoft Page)

-   **Path**: `src/app/life-at-gsoft/page.tsx`
-   **Description**: This is the main component for the `/life-at-gsoft` route. It renders two components:
    1.  `SharedHero`: Displays the title "Life At Gsoft".
    2.  `LifeAtGSoft`: Displays the main content of the page.

### 3.2. `LifeAtGSoft.tsx`

-   **Path**: `src/components/life-at-gsoft/LifeAtGSoft.tsx`
-   **Description**: This component displays the text and image gallery that make up the main content of the page.
-   **Content**:
    -   **Text**: Contains a hardcoded heading and a paragraph describing the company culture.
    -   **Image Gallery**: Displays a grid of hardcoded images from the `/public/images/team/` directory.

### 3.3. `SharedHero.tsx`

-   **Path**: `src/components/portfolio/SharedHero.tsx`
-   **Description**: A reusable hero component used on multiple pages.
-   **Props**:
    -   `title` (string): The main title to display in the hero section.
    -   `subtitle` (string): The subtitle to display.

## 4. Styling

-   The page is styled using **Tailwind CSS**.
-   The layout is a responsive grid that adapts to different screen sizes.

## 5. Content Management

-   All content on this page, including text and images, is **hardcoded** directly into the `LifeAtGSoft.tsx` component.
-   There are no external data files or APIs used to populate the content.
