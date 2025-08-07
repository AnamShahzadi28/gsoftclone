import React from 'react';
import { FormFileInputProps } from '@/types/estimateForm';

const FormFileInput: React.FC<FormFileInputProps> = ({
  onFileChange,
  fileError,
}) => {
  return (
    <div>
      <input
        type="file"
        onChange={onFileChange}
        className="w-full border border-gray-300 text-base p-3 rounded focus:outline-none focus:ring-1 file:mr-4 file:py-1 file:px-2 file:rounded file:border-1 file:text-xs file:font-semibold file:bg-gray-50  hover:file:bg-gray-200"
      />
      {fileError && <p className="error">{fileError}</p>}
    </div>
  );
};

export default FormFileInput;
