import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormFieldProps, FormData } from '@/types/estimateForm';

const FormField: React.FC<FormFieldProps & { register: UseFormRegister<FormData> }> = ({
  
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="input"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormField;
