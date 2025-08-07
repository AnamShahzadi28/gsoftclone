# About Page Knowledge Base

## 1. Overview

The "About Us" page serves as a comprehensive introduction to GSoft Consulting. It is designed to be visually engaging and informative, providing visitors with a clear understanding of the company's mission, values, and team. The page is built with a modular, component-based architecture, making it easy to maintain and scale.

## 2. File Structure

The main entry point for the page is `src/app/about/page.tsx`. The page is composed of several reusable components located in the `src/components/about/` directory:

-   `HeroSection.tsx`: A banner with a background image and a call-to-action.
-   `CompanyIntro.tsx`: A two-column section with a brief introduction and an image.
-   `MissionVisionSection.tsx`: A two-column section detailing the company's mission and vision.
-   `StatsCounter.tsx`: A section with animated statistics about the company.
-   `OurClients.tsx`: A grid displaying the company's clients.

## 3. Component Breakdown

### `HeroSection.tsx`

-   **Purpose**: Displays a full-width hero banner with a background image, a title, a subtitle, and a call-to-action button.
-   **Styling**: Uses a background image with a semi-transparent overlay to ensure text readability. The content is aligned to the left.
-   **Dependencies**: `next/link` for navigation.

### `CompanyIntro.tsx`

-   **Purpose**: Presents a brief introduction to the company in a two-column layout.
-   **Layout**: The left column contains a title, a subtitle, and a descriptive paragraph. The right column displays an image.
-   **Responsiveness**: The columns stack vertically on smaller screens.
-   **Dependencies**: `next/image` for the image.

### `MissionVisionSection.tsx`

-   **Purpose**: Details the company's mission and vision in a two-column layout.
-   **Layout**: Each column contains an icon, a title, a subtitle, and a descriptive paragraph.
-   **Styling**: Uses a dark background with white text and cyan accents.
-   **Dependencies**: `next/image` for the icons.

### `StatsCounter.tsx`

-   **Purpose**: Displays animated statistics about the company in a two-column layout.
-   **Layout**: The left column contains an image, and the right column displays a 2x2 grid of statistics.
-   **Functionality**: The numbers animate, counting up from 0 to their final value when the component is visible in the viewport.
-   **Dependencies**: `react-countup` for the counting animation and `react-intersection-observer` to trigger the animation on scroll.

### `OurClients.tsx`

-   **Purpose**: Displays a grid of the company's clients.
-   **Layout**: A responsive grid that adjusts from one to three columns based on the screen size.
-   **Styling**: Each client is displayed in a card with a border, a circular logo, and the client's name.
-   **Dependencies**: `@heroui/react` for the `Card`, `CardBody`, and `Image` components.

## 4. Data and Types

-   **Local Data**: The `OurClients.tsx` and `StatsCounter.tsx` components use local arrays of objects to store their data.
-   **No Custom Types**: There are no custom TypeScript types defined for this page.

## 5. Animations and Interactivity

-   **`StatsCounter.tsx`**: The primary interactive component on this page, featuring a count-up animation for the statistics.
-   **Hover Effects**: The `HeroSection.tsx` button has a hover effect.
