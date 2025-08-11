import React from 'react';
import { FormHeaderProps } from '@/types/estimateForm';

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-[1.2] text-center text-cyan">
        {title}
      </h1>
      <p className="text-center font-bold text-lg ">
        {subtitle}
      </p>
      <p className="text-center  text-gray-400">
        {description}
      </p>
    </>
  );
};

export default FormHeader;
