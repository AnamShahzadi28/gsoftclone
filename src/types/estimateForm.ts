export interface FormHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface FormFieldProps {
  label: string;
  name: keyof FormData;
  type: string;
  placeholder: string;
  error?: string;
}

export interface FormSelectProps {
  label: string;
  name: keyof FormData;
  options: string[];
  placeholder: string;
  error?: string;
}

export interface FormTextareaProps {
  label: string;
  name: keyof FormData;
  placeholder: string;
  error?: string;
}

export interface FormFileInputProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileError?: string;
}


export type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  priority: string;
  status: string;
  region: string;
  description: string;
};