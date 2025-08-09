# Estimate Project Form Knowledge Base

This document provides a comprehensive overview of the `EstimateForm` component and its related files, designed for an AI model to understand its structure, functionality, and data flow.

## 1. Purpose of the EstimateForm

The `EstimateForm` component (`h:/gsoft/gsoftweb/src/components/EstimateForm/EstimateForm.tsx`) is a client-side React form used to collect project estimation details from users. It integrates form validation, file uploads, and user feedback through toast notifications.

## 2. Component Structure and Reusability

The `EstimateForm` has been refactored into a main component and several smaller, reusable sub-components to promote modularity, maintainability, and clarity.

### 2.1. Main Component: `EstimateForm.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/EstimateForm.tsx`
- **Role**: Orchestrates the entire form. It manages the form state, validation schema, submission logic, and integrates all the smaller sub-components.
- **Key Technologies**:
    - `react-hook-form`: For efficient form state management, validation, and submission.
    - `zod` & `@hookform/resolvers/zod`: For schema-based form validation, ensuring data integrity.
    - `react-toastify`: For displaying success/error messages to the user upon form submission.
    - `clsx`: For conditionally joining CSS class names.
    - `useState`: React hook for managing file state and file-specific errors.
- **Data Flow**:
    - Defines a `zod` schema (`schema`) for form validation.
    - Uses `useForm` hook to register inputs, handle submission, and access form errors.
    - `onSubmit` function handles form data and file upload, displays a success toast, and resets the form.
    - Manages file input state (`file`, `fileError`) separately.

### 2.2. Sub-Components (located in `h:/gsoft/gsoftweb/src/components/EstimateForm/`)

#### 2.2.1. `FormHeader.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/FormHeader.tsx`
- **Purpose**: Displays the title, subtitle, and a descriptive paragraph for the form.
- **Props**: `title`, `subtitle`, `description` (all strings).
- **Reusability**: Generic header component for any form or section.

#### 2.2.2. `FormField.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/FormField.tsx`
- **Purpose**: Renders a generic input field (text, email, number).
- **Props**: `label`, `name`, `type`, `placeholder`, `register` (from `react-hook-form`), `error` (optional string for validation message).
- **Reusability**: Highly reusable for various text-based inputs across the application.

#### 2.2.3. `FormSelect.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/FormSelect.tsx`
- **Purpose**: Renders a dropdown (select) input field.
- **Props**: `label`, `name`, `options` (array of strings), `placeholder`, `register`, `error`.
- **Reusability**: Reusable for any dropdown selection. Includes a `ChevronDown` icon for visual indication.

#### 2.2.4. `FormTextarea.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/FormTextarea.tsx`
- **Purpose**: Renders a multi-line text input area.
- **Props**: `label`, `name`, `placeholder`, `register`, `error`.
- **Reusability**: Reusable for any long-text input.

#### 2.2.5. `FormFileInput.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/components/EstimateForm/FormFileInput.tsx`
- **Purpose**: Renders a file upload input field.
- **Props**: `onFileChange` (event handler for file selection), `fileError` (optional string for file validation message).
- **Reusability**: Reusable for any file upload functionality.

## 3. Type Definitions

All interfaces for the form components are centralized in `h:/gsoft/gsoftweb/src/types/estimateForm.ts`. This ensures type consistency and easier management.

### 3.1. `estimateForm.ts`
- **Path**: `h:/gsoft/gsoftweb/src/types/estimateForm.ts`
- **Contents**:
    - `FormHeaderProps`: Defines props for `FormHeader`.
    - `FormFieldProps`: Defines props for `FormField`.
    - `FormSelectProps`: Defines props for `FormSelect`.
    - `FormTextareaProps`: Defines props for `FormTextarea`.
    - `FormFileInputProps`: Defines props for `FormFileInput`.
    - `FormData`: Defines the structure of the form data.
- **Benefit**: Provides a single source of truth for component interfaces, improving code readability and maintainability.

## 4. Integration with `estimate-project` Page

The `EstimateForm` component is integrated into the `estimate-project` page.

### 4.1. `page.tsx`
- **Path**: `h:/gsoft/gsoftweb/src/app/estimate-project/page.tsx`
- **Role**: This is the entry point for the "Estimate Your Project" page. It simply renders the `EstimateForm` component.
- **Code Snippet**:
    ```typescript
    import EstimateForm from "@/components/EstimateForm/EstimateForm";

    const EstimateYourProjectPage = () => {
      return <EstimateForm />;
    };

    export default EstimateYourProjectPage;
    ```
- **Significance**: Demonstrates how the `EstimateForm` component is consumed within the Next.js application structure.

## 5. Key Takeaways for AI Models

- **Modular Design**: The form is broken down into small, focused components, each handling a specific UI element or logical part.
- **Centralized Types**: All component interfaces are defined in a single type file, promoting consistency.
- **Robust Validation**: `react-hook-form` and `zod` are used for comprehensive client-side validation.
- **User Feedback**: `react-toastify` provides clear feedback to the user on form submission.
- **Clear Separation of Concerns**: The main `EstimateForm` handles logic, while sub-components handle rendering specific input types.
