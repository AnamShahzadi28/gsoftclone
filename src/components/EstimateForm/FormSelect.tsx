import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ChevronDown } from 'lucide-react';
import { FormSelectProps,FormData } from '@/types/estimateForm';

const FormSelect: React.FC<FormSelectProps & { register: UseFormRegister<FormData> }> = ({
  
  
  name,
  options,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="relative w-full">
      <select
        {...register(name)}
        defaultValue=""
        className="input appearance-none pr-12 text-sm"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormSelect;
