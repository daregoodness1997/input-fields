import React from 'react';

const Textarea = ({
  label,
  onChange,
  inputId,
  error,
  errorText,
  value,
  placeholder,
}) => {
  return (
    <>
      <div
        class={`items-center border-b-2 py-2 mb-2 ${
          error ? 'border-red-500 ' : 'border-blue-700 '
        } focus:border-purple-500`}
      >
        <label
          class='block text-gray-500 font-medium mb-2 md:text-left mb-1 md:mb-0 pr-4'
          htmlFor={inputId}
        >
          {label}
        </label>
        <textarea
          class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-3 px-4 pr-8  leading-tight focus:outline-none '
          id={inputId}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error ? (
        <p class='text-red-500 text-xs italic mt-2'>{errorText}</p>
      ) : null}
    </>
  );
};

export default Textarea;
