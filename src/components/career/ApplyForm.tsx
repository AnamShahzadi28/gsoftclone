"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "@heroui/react";
import { formSchema, FormData } from '@/types/career'






export default function JobForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    setTimeout(() => {
      console.log("Submitted:", data);
      toast.success("Your details have been submitted!");
      reset();
      setLoading(false);
    }, 1000);
  };

  return (




    <div className="  md:mx-auto my-5  text-center   ">

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 text-left bg-navbg text-white p-6 rounded-lg  "
    >



            <h2 className="text-2xl font-bold mb-10 text-center md:text-start  ">Apply for this position</h2>

      <div>
        <input
          type="text"
          placeholder="Name*"
          {...register("name")}
          className="inputjob "
        />
        {errors.name && (
          <p className="error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email*"
          {...register("email")}
className="inputjob "          />
        {errors.email && (
          <p className="error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone*"
          {...register("phone")}
className="inputjob "          />
        {errors.phone && (
          <p className="error">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          type="file"
          {...register("file")}
className="w-full border border-gray-300 text-base p-3 rounded   file:mr-4 file:py-1 file:px-1   file:text-xs file:font-semibold file:bg-white file:text-black  hover:file:bg-gray-50"          />
        {typeof errors.file?.message === "string" && (
<p className="error">{errors.file.message}</p>
)}

      </div>

      <Button
        type="submit"
        disabled={!isValid || loading}
        className={clsx(
          "w-full p-2 rounded font-semibold text-white text-lg transition mt-5",
          isValid && !loading
            ? "bg-cyan-600 hover:bg-cyan-700"
            : "bg-cyan "
        )}
      >
        {loading ? (
                   <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>

        ) : (
          "SUBMIT"
        )}
      </Button>
    </form>
  </div>
  );
}
