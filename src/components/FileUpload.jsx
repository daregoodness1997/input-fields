import React from 'react';

const FileUpload = ({
  label,
  helpertext,
  onChange,
  value,
  error,
  inputId,
  type,
  required,
}) => {
  return (
    <>
      <div
        class={`block border-b-2  ${
          error ? 'border-red-500 ' : 'border-blue-700 '
        } focus:border-purple-500`}
      >
        <label
          class='block text-gray-500 font-medium  md:text-left mb-2 md:mb-0 pr-4'
          htmlFor={inputId}
        >
          {label}
        </label>
        <input
          class='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 pr-2  focus:outline-none '
          id={inputId}
          type='file'
          value={value}
          onChange={onChange}
          required={required}
        />
        <div class='mt-1 text-sm text-gray-500' id='user_avatar_help'>
          {helpertext}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
