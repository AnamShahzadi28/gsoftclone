# Blog Module Knowledge Base

This document provides a comprehensive overview of the blog functionality within the application, covering its architecture, data flow, components, and type definitions.

## 1. Routes

*   **`/blog`**: The main blog listing page.
    *   **File:** `src/app/blog/page.tsx`
    *   **Description:** Renders the `BlogPage` component, which displays a list of blog posts, search functionality, and pagination.
*   **`/blog/[slug]`**: The individual blog post detail page.
    *   **File:** `src/app/blog/[slug]/page.tsx`
    *   **Description:** Fetches a specific blog post based on its `slug` (ID), renders the `BlogPostContent` component for the main content, and the `Sidebar` component for related posts.

## 2. Data Source

*   **File:** `src/json/blogdata.json`
*   **Description:** A JSON array of blog post objects. Each object represents a single blog post and adheres to the `Blog` interface defined in `src/types/blog.ts`.
*   **Example Structure (simplified):**
    ```json
    [
      {
        "id": "unique-slug-for-post",
        "title": "Title of the Blog Post",
        "image": "/path/to/image.png",
        "description": "A short excerpt or summary of the post.",
        "publish_date": "YYYY-MM-DD",
        "tags": ["Tag1", "Tag2"],
        "sections": [
          { "type": "paragraph", "content": "First paragraph of content." },
          { "type": "heading", "content": "Section Heading" },
          { "type": "paragraph", "content": "More content." }
        ]
      },
      ...
    ]
    ```

## 3. Type Definitions

*   **File:** `src/types/blog.ts`
*   **Description:** Contains TypeScript interfaces that define the structure of blog-related data.
*   **Interfaces:**
    *   **`BlogSection`**: Defines the structure of a content section within a blog post.
        ```typescript
        export interface BlogSection {
          type: string; // e.g., "paragraph", "heading", "subheading"
          content: string; // The text content of the section
        }
        ```
    *   **`Blog`**: Defines the complete structure of a single blog post.
        ```typescript
        export interface Blog {
          id: string; // Unique identifier for the blog post (used as slug)
          title: string; // Title of the blog post
          image: string; // Path to the main image of the blog post
          description: string; // Short description or excerpt
          publish_date: string; // Date of publication (YYYY-MM-DD)
          tags: string[]; // Array of tags associated with the post
          sections: BlogSection[]; // Array of structured content sections
        }
        ```

## 4. Components

### 4.1. `BlogPage.tsx`

*   **File:** `src/components/blog/BlogPage.tsx`
*   **Description:** The main component for displaying the blog listing. It manages the state for posts, search queries, and pagination.
*   **Key Functionality:**
    *   Fetches all blog posts from `blogdata.json` on component mount.
    *   Filters posts based on `searchQuery`.
    *   Implements pagination to display a subset of posts.
    *   Renders `BlogCard` for each post and includes a `Sidebar`.
*   **Props:** None (it's a page component that manages its own data).

### 4.2. `BlogCard.tsx`

*   **File:** `src/components/blog/BlogCard.tsx`
*   **Description:** Renders a single blog post as a card in the blog listing.
*   **Props:**
    *   `post: Blog`: The `Blog` object containing the data for the post to be displayed.
*   **Key Functionality:**
    *   Displays the post's title, image, description, and publish date.
    *   Provides a link to the full blog post detail page (`/blog/[id]`).

### 4.3. `BlogPostContent.tsx`

*   **File:** `src/components/blog/BlogPostContent.tsx`
*   **Description:** Renders the detailed content of a single blog post.
*   **Props:**
    *   `blog: Blog`: The `Blog` object containing the data for the post.
*   **Key Functionality:**
    *   Displays the main image, title, description, and dynamically renders content sections (paragraphs, headings, subheadings) based on the `sections` array.
    *   Displays associated tags.

### 4.4. `Sidebar.tsx`

*   **File:** `src/components/blog/Sidebar.tsx`
*   **Description:** A sidebar component used on both the main blog page and individual blog post pages.
*   **Props:**
    *   `posts: Blog[]`: An array of `Blog` objects to be displayed in the "Most Popular" section.
    *   `onSearchChange?: (query: string) => void`: An optional callback function triggered when the search input value changes. Used on the main blog page for filtering.
*   **Key Functionality:**
    *   Displays a "Most Popular" section with a limited number of blog posts.
    *   Includes a search input field (functionality depends on `onSearchChange` prop).

## 5. Data Flow and Interactions

*   **Main Blog Page (`/blog`):**
    1.  `src/app/blog/page.tsx` renders `BlogPage.tsx`.
    2.  `BlogPage.tsx` fetches all blog data from `src/json/blogdata.json`.
    3.  `BlogPage.tsx` manages search and pagination, then passes filtered/paginated `Blog` objects to `BlogCard` components.
    4.  `BlogPage.tsx` also passes the full list of `Blog` objects and a search handler to `Sidebar.tsx`.
*   **Blog Detail Page (`/blog/[slug]`):**
    1.  `src/app/blog/[slug]/page.tsx` receives the `slug` from the URL.
    2.  It fetches the specific `Blog` object from `src/json/blogdata.json` using the `slug`.
    3.  It passes the fetched `Blog` object to `BlogPostContent.tsx` for rendering the main content.
    4.  It filters `blogdata.json` to get "other blogs" (excluding the current one) and passes this array to `Sidebar.tsx` for related posts.

## 6. Development Guidelines

*   **Data Consistency:** Ensure all new blog entries in `src/json/blogdata.json` adhere strictly to the `Blog` and `BlogSection` interfaces defined in `src/types/blog.ts`.
*   **Type Safety:** Always import and use the centralized types from `src/types/blog.ts` in any component or utility interacting with blog data.
*   **Component Reusability:** Leverage existing components like `BlogCard`, `BlogPostContent`, and `Sidebar` for consistent UI and functionality.
*   **Content Structure:** When adding new blog content, utilize the `sections` array to structure the content with appropriate `type` values (`paragraph`, `heading`, `subheading`) for proper rendering by `BlogPostContent.tsx`.
