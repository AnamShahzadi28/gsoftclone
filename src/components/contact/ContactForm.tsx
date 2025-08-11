"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button } from "@heroui/react"; // Changed from @heroui/react
import clsx from "clsx";
import { ContactFormSchema, ContactFormData } from "@/types/contactForm"; // Imported types

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({ // Using ContactFormData
    resolver: zodResolver(ContactFormSchema), // Using ContactFormSchema
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    
    console.log("submitted", data);

      toast.success("Your details has been submitted!");
       reset();
  };

  return (
    <div className="max-w-2xl mx-auto my-20 text-center px-4">
      <h2 className="text-2xl font-bold mb-2">{`Let's start a project together`}</h2>
      <p className="text-lg mb-8 ">
       We make all your dreams come true in a successful project.

      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="input w-full"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              {...register("email")}
              placeholder="Email"
              className="input w-full"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="flex-1">
            <input
            type="number"
              {...register("phone")}
              placeholder="Phone"
              className="input w-full"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={5}
            className="input w-full resize-none"
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

         <Button
          type="submit"
          className={clsx(
            "w-full py-2 rounded font-bold transition text-white text-lg",
            isValid  ? "bg-cyan hover:bg-cyan-500" : "bg-gray-200"
          )}
          disabled={!isValid }
        >
         Submit
        </Button>

      </form>
    </div>
  );
}
