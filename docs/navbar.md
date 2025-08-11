 # Navbar Component Knowledge Base

## 1. Overview

The `Navbar` component is a crucial part of the Gsoftweb application, providing users with seamless navigation across the website. It is designed to be fully responsive, offering an optimal viewing experience on both desktop and mobile devices. The component features a clean and modern design, with a mega menu for the "Services" section and a scroll-based progress indicator.

## 2. File Structure

The `Navbar` component is organized into several files, each with a specific responsibility. This modular structure enhances code readability and maintainability.

-   `Header.tsx`: The main component that orchestrates the entire navbar. It manages the mobile menu's state, handles scroll events, and renders the appropriate navbar based on the screen size.
-   `DesktopNavbar.tsx`: Renders the navbar for larger screens, including the mega menu for the "Services" link.
-   `MobileNavbar.tsx`: Renders the navbar for smaller screens, with a hamburger menu and a dropdown for the "Services" section.
-   `NavItem.tsx`: A reusable component that renders individual navigation links, handling their active state and styling.
-   `navbar.json`: A JSON file that serves as the single source of truth for the navigation links, making it easy to update the navbar without modifying the code.

## 3. Data Source

The navigation links are dynamically populated from the `src/json/navbar.json` file. This approach decouples the data from the UI, allowing for easy updates and maintenance. The JSON file defines the structure of the navbar, including the link names, URLs, and the content for the mega menu.

### `navbar.json` Structure:

```json
{
  "navLinks": [
    { "name": "Company", "href": "/company" },
    {
      "name": "Services",
      "href": "/services",
      "isDropdown": true,
      "megaMenu": [
        {
          "heading": "Development",
          "links": [
            { "name": "Web App Development", "href": "/services/web-app-development" },
            // ... other links
          ]
        },
        // ... other sections
      ]
    },
    // ... other links
  ]
}
```

## 4. Component Breakdown

### `Header.tsx`

This is the primary component that brings together all the elements of the navbar. It is responsible for:

-   **State Management**: Manages the open/close state of the mobile menu (`isMenuOpen`) and tracks the scroll position (`isScrolled`).
-   **Scroll Handling**:
    -   Adds a scroll event listener to change the navbar's background color when the user scrolls down.
    -   On the `/estimate-project` page, the navbar background is always dark (`bg-navbg`), regardless of the scroll position.
    -   On other pages, the background becomes dark after scrolling down 50 pixels.
-   **"Estimate Your Project" Button**: The "Estimate Your Project" button has special styling. On the `/estimate-project` page, it has a white background with dark text. On other pages, it has a transparent background with white text.
-   **Responsive Rendering**: Renders the `DesktopNavbar` on large screens and the `MobileNavbar` on smaller screens.
-   **Progress Bar**: Includes a `framer-motion` animated progress bar that indicates the user's scroll progress.

### `DesktopNavbar.tsx`

This component is tailored for desktop users and provides a rich navigation experience.

-   **Mega Menu**: Features a mega menu for the "Services" link that appears on hover, showcasing various service categories.
-   **Active State**: Highlights the active navigation link based on the current URL path.
-   **Outside Click Handling**: Closes the mega menu when the user clicks outside of it.

### `MobileNavbar.tsx`

This component ensures a smooth navigation experience on mobile devices.

-   **Hamburger Menu**: Displays a hamburger menu icon that toggles the visibility of the navigation links.
-   **Dropdown Menu**: For items with sub-links (like "Services"), the component now features a split interaction model.
    -   The item name itself (e.g., "Services") is a direct `Link` to the main category page (e.g., `/services`).
    -   A separate chevron icon button next to the name is used to toggle the visibility of the dropdown containing the sub-links.
-   **Close on Navigation**: The mobile menu closes automatically when any navigation link is clicked, ensuring a smooth user experience.

### `NavItem.tsx`

This is a reusable component that renders individual navigation links.

-   **Props**:
    -   `item`: An object containing the navigation link's data (name, href).
    -   `isActive`: A boolean that indicates whether the link is currently active.
    -   `onClick`: A function to be called when the link is clicked.
-   **Styling**: Applies different styles to the link based on its active state.

## 5. Dependencies

The `Navbar` component relies on the following external libraries:

-   **`@heroui/react`**: For the basic navbar structure and components.
-   **`framer-motion`**: For animations, such as the scroll progress bar.
-   **`lucide-react`**: For icons, like the chevron arrows in the dropdowns.
-   **`next/link` and `next/navigation`**: For client-side navigation and routing.
-   **`react-icons`**: For the hamburger menu icon.

## 6. Styling

The component is styled using a combination of **Tailwind CSS** and custom classes. The `navClass` in `Header.tsx` dynamically changes the navbar's background based on the scroll position. The active state of the navigation links is also styled to provide visual feedback to the user.

## 7. Future Improvements

-   **Accessibility**: Enhance accessibility by adding ARIA attributes to the mega menu and mobile menu to improve screen reader support.
-   **Animations**: Introduce more subtle animations to the mega menu and mobile menu to enhance the user experience.
-   **Theming**: Implement a theming solution to allow for easy customization of the navbar's colors and styles.
