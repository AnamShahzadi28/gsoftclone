import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormTextareaProps, FormData } from '@/types/estimateForm';

const FormTextarea: React.FC<FormTextareaProps & { register: UseFormRegister<FormData> }> = ({
  
  name,
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="input h-32 text-base p-3 resize-none"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormTextarea;
