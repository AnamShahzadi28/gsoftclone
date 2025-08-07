# Home Page Knowledge Base

## 1. Overview

The home page is the primary landing page of the Gsoftweb application. It is composed of multiple, modular React components that work together to present a comprehensive overview of the company, its services, and its work. The page is designed to be engaging and informative, guiding users through different aspects of the business.

## 2. File Structure

The main page component is located at `src/app/page.tsx`. The individual sections of the home page are organized into the following components within the `src/components/home/` directory:

-   `HeroSection.tsx`: The main banner and call-to-action.
-   `WhoWeAre.tsx`: A brief introduction to the company.
-   `360Services.tsx`: A grid displaying the company's services.
-   `Technologies.tsx`: A tabbed view of technologies the company uses.
-   `Portfolio.tsx`: A carousel showcasing recent projects.
-   `Testimonials.tsx`: A slider of client testimonials.
-   `WorkingProcess.tsx`: A step-by-step guide to the company's workflow.

## 3. Component Breakdown

### `HeroSection.tsx`

-   **Purpose**: Displays a full-screen hero image with a prominent headline, a short description, and a "Let's discuss your project" button.
-   **Dependencies**:
    -   `@/utils/AnimatedOnScroll`: For fade-in animation.
    -   `@heroui/react`: For the `Button` component.
    -   `next/link`: For navigation.
-   **Styling**: Uses a background image (`gsoftherobanner.png`) and centers the content vertically.

### `WhoWeAre.tsx`

-   **Purpose**: Presents a concise "Who We Are" section with a heading, a subheading, and a descriptive paragraph.
-   **Dependencies**:
    -   `@/utils/AnimatedOnScroll`: For fade-in animation.
-   **Styling**: Simple, centered text layout.

### `360Services.tsx`

-   **Purpose**: Showcases the company's services in a grid layout. Each service is a clickable card that likely navigates to a more detailed page.
-   **Data Source**: `src/json/services.json`.
-   **Dependencies**:
    -   `@/json/services.json`: The data for the services.
    -   `@/utils/AnimatedOnScroll`: For fade-in animation.
    -   `@heroui/react`: For the `Card` component.
    -   `next/link`: For navigation.
    -   `react-icons/hi2`: For the service icons.
-   **Styling**: A responsive grid of cards with hover effects.

### `Technologies.tsx`

-   **Purpose**: Displays the technologies the company works with, organized into tabs for different categories (e.g., Frontend, Backend).
-   **Props**:
    -   `data`: An array of technology categories, each with a list of technologies.
-   **Dependencies**:
    -   `@/utils/AnimatedOnScroll`: For fade-in animation.
    -   `@heroui/react`: For `Tabs`, `Tab`, `Card`, and `CardBody`.
    -   `next/image`: For optimized technology logos.
    -   `@/types/home`: For the `TechnologyTabsProps` type.
-   **Styling**: A tabbed interface with logos for each technology.

### `Portfolio.tsx`

-   **Purpose**: A carousel that displays portfolio projects, separated by "Mobile App" and "Web App" tabs.
-   **Data Source**: `src/json/portfoliodata.json`.
-   **State**:
    -   `activeTab`: The currently selected tab ('Mobile App' or 'Web App').
    -   `currentIndex`: The index of the currently displayed project in the carousel.
-   **Dependencies**:
    -   `lucide-react`: For the `ArrowLeft` and `ArrowRight` icons.
    -   `@/json/portfoliodata.json`: The data for the portfolio items.
    -   `@/types/home`: For the `PortfolioItem` type.
    -   `@heroui/react`: For `Tab` and `Tabs`.
-   **Styling**: A horizontally scrolling carousel with a centered, scaled-up active project. The non-active projects are scaled down and blurred.

### `Testimonials.tsx`

-   **Purpose**: Displays client testimonials in a horizontally scrolling carousel.
-   **Data Source**: `src/json/testimonials.json`.
-   **Hooks**:
    -   `@/hooks/useCenteredCarousel`: A custom hook to manage the state and logic of the centered carousel.
-   **Dependencies**:
    -   `next/image`: For the client logos.
    -   `@/json/testimonials.json`: The data for the testimonials.
    -   `@/types/home`: For the `Testimonial` type.
-   **Styling**: A carousel where the centered item is fully opaque and scaled up, while the other items are faded and scaled down.

### `WorkingProcess.tsx`

-   **Purpose**: Outlines the company's working process in a series of steps.
-   **Data Source**: `src/json/workingProcess.json`.
-   **Dependencies**:
    -   `@/utils/AnimatedOnScroll`: For animations on scroll.
    -   `@/json/workingProcess.json`: The data for the process steps.
    -   `@/utils/animations`: For the `fadeUphover` animation.
-   **Styling**: A grid of steps, each with a number, title, and description. The `fadeUphover` animation is applied on hover.

## 4. Data and Types

-   **JSON Data**: The home page components are heavily data-driven, with content sourced from the `src/json/` directory. This includes `services.json`, `technologies.json`, `portfoliodata.json`, `testimonials.json`, and `workingProcess.json`.
-   **TypeScript Types**: To ensure type safety, custom types for the data structures are defined in `src/types/home.ts`.

## 5. Animations and Interactivity

-   **`AnimatedOnScroll`**: Most components are wrapped in this utility to trigger animations as they scroll into view.
-   **`useCenteredCarousel`**: This custom hook provides the logic for the interactive testimonial carousel.
-   **Hover Effects**: Many components include hover effects to provide visual feedback to the user.
