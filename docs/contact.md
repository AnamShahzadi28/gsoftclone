
# Contact Page Knowledge Base

This document provides a comprehensive overview of the contact page for AI models and developers.

## 1. Overview

The contact page is accessible at the `/contact` route. The main entry point for this page is `src/app/contact/page.tsx`.

The page is composed of two main sections:
1.  A tabbed content section that displays location information.
2.  A contact form for users to send messages.

## 2. File Structure

The relevant files for the contact page are organized as follows:

-   **`src/app/contact/page.tsx`**: The main page component.
-   **`src/components/contact/`**: Contains all components related to the contact page.
    -   `TabContent.tsx`: Manages the tabbed display of locations.
    -   `PakistanTextContent.tsx`: Displays textual information for the Pakistan location.
    -   `PakistanImageMap.tsx`: Displays an image and a map for the Pakistan location.
    -   `ComingSoon.tsx`: A placeholder for locations that are not yet active.
    -   `ContactForm.tsx`: The user-facing form for inquiries.
-   **`src/json/location.json`**: A JSON file containing the data for the different office locations.
-   **`src/types/contactForm.ts`**: Contains TypeScript types and Zod schemas for the contact form and location data.

## 3. Components

### 3.1. `page.tsx` (Contact Page)

-   **Path**: `src/app/contact/page.tsx`
-   **Description**: This is the main component for the `/contact` route. It renders the `TabContent` and `ContactForm` components.

### 3.2. `TabContent.tsx`

-   **Path**: `src/components/contact/TabContent.tsx`
-   **Description**: This component displays a set of tabs for different locations (e.g., UK, Pakistan, Australia). It fetches data from `src/json/location.json`.
-   **Functionality**:
    -   It uses the `@heroui/react` library for the tab functionality.
    -   It dynamically generates a tab for each location in the JSON file.
    -   When a tab is selected, it conditionally renders content.
    -   For the "Pakistan" tab, it displays `PakistanTextContent` and `PakistanImageMap`.
    -   For all other tabs, it displays the `ComingSoon` component.

### 3.3. `PakistanTextContent.tsx`

-   **Path**: `src/components/contact/PakistanTextContent.tsx`
-   **Description**: A simple component that displays the address and phone number for the Pakistan location. It receives the location data as a prop.

### 3.4. `PakistanImageMap.tsx`

-   **Path**: `src/components/contact/PakistanImageMap.tsx`
-   **Description**: This component displays an image of the location and an embedded Google Map. The image source and map URL are passed in as props from the location data. It conditionally renders the image and iframe based on the presence of `location.image` and `location.mapEmbedUrl`.

### 3.5. `ComingSoon.tsx`

-   **Path**: `src/components/contact/ComingSoon.tsx`
-   **Description**: A placeholder component that simply displays the text "Coming Soon". It is used for locations that do not have detailed information yet.

### 3.6. `ContactForm.tsx`

-   **Path**: `src/components/contact/ContactForm.tsx`
-   **Description**: This component provides a form for users to get in touch.
-   **Functionality**:
    -   Uses `react-hook-form` for form state management.
    -   Uses `zod` for schema-based validation.
    -   The form includes fields for `name`, `email`, `phone` (input type `number`), and `message`.
    -   Uses `clsx` for conditional styling of the submit button.
    -   Upon successful submission, it displays a success message using `react-toastify`.

## 4. Data

### 4.1. `location.json`

-   **Path**: `src/json/location.json`
-   **Description**: This file stores an array of location objects. Each object represents an office location.
-   **Schema**:
    -   `id` (string): A unique identifier for the location (e.g., "uk", "pakistan").
    -   `label` (string): The display name of the location (e.g., "UNITED KINGDOM").
    -   `city` (string, optional): The city where the office is located.
    -   `address` (string, optional): The street address.
    -   `phone` (string, optional): The contact phone number.
    -   `image` (string, optional): The path to an image of the location.
    -   `mapEmbedUrl` (string, optional): The URL for the embedded Google Map.

## 5. Types and Schemas

### 5.1. `contactForm.ts`

-   **Path**: `src/types/contactForm.ts`
-   **Description**: This file defines the data structures and validation schemas used in the contact page.

#### `ContactFormSchema`

A `zod` schema that defines the validation rules for the contact form fields:
-   `name`: string, minimum 2 characters.
-   `email`: string, must be a valid email format.
-   `phone`: string, minimum 7 characters.
-   `message`: string, minimum 1 character.

#### `ContactFormData`

A TypeScript type inferred from the `ContactFormSchema`. It represents the shape of the data for the contact form.

#### `LocationItem`

A TypeScript type that defines the structure of a location object, matching the schema of `location.json`.
