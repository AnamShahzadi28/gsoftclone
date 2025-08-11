"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";


import { FormData } from '@/types/estimateForm';


import FormHeader from "./FormHeader";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormFileInput from "./FormFileInput";

const schema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "This field is required"),
  company: z.string().min(1, "This field is required"),
  projectType: z.string().min(1, "This field is required"),
  priority: z.string().min(1, "This field is required"),
  status: z.string().min(1, "This field is required"),
  region: z.string().min(1, "This field is required"),
  description: z.string().min(1, "This field is required"),
});



export default function EstimateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) setFileError("");
  };

  const onSubmit = (data: FormData) => {
    if (!file) {
      setFileError("Please upload a file");
      return;
    }
    console.log({ ...data, file });
    toast.success("Your details has been submitted!");
    reset();
    setFile(null);
    setFileError("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white md:px-4 py-30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-white p-10 space-y-3"
      >
        <FormHeader
          title="Estimation Your Project"
          subtitle="Fill in the Below Form to Receive a Detailed Estimation"
          description="You're just one step away to get a quick and detailed estimate from our team"
        />

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Name*"
            register={register}
            error={errors.name?.message}
          />
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email Address*"
            register={register}
            error={errors.email?.message}
          />
        </div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="Phone Number*"
            register={register}
            error={errors.phone?.message}
          />
          <FormField
            label="Company Name"
            name="company"
            type="text"
            placeholder="Company Name*"
            register={register}
            error={errors.company?.message}
          />
        </div>

        {/* Selects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Project Type"
            name="projectType"
            options={["Web", "Mobile", "Desktop"]}
            placeholder="Project Type*"
            register={register}
            error={errors.projectType?.message}
          />

          <FormSelect
            label="Priority"
            name="priority"
            options={["Low", "Medium", "High"]}
            placeholder="Priority*"
            register={register}
            error={errors.priority?.message}
          />
        </div>

        {/* Status & Region */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Project Status"
            name="status"
            options={["Idea", "Prototype", "In Progress"]}
            placeholder="Project Status*"
            register={register}
            error={errors.status?.message}
          />

          <FormSelect
            label="Region"
            name="region"
            options={["USA", "Europe", "Asia"]}
            placeholder="Select your Region*"
            register={register}
            error={errors.region?.message}
          />
        </div>

        {/* File Upload */}
        <FormFileInput onFileChange={onFileChange} fileError={fileError} />

        {/* Description */}
        <FormTextarea
          label="Short Description"
          name="description"
          placeholder="Short Description"
          register={register}
          error={errors.description?.message}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className={clsx(
            "w-full py-2 rounded font-bold transition text-white text-lg",
            isValid ? "bg-cyan hover:bg-cyan-500" : "bg-gray-200"
          )}
          disabled={!isValid}
        >
          Get Estimate
        </Button>
      </form>
    </div>
  );
}