import React from 'react';

const SelectInput = ({ label, inputId, onSelect, options, error }) => {
  return (
    <>
      <div
        class={`items-center border-b-2 py-2 mb-2 ${
          error ? 'border-red-500 ' : 'border-blue-700 '
        } focus:border-purple-500`}
      >
        <label
          class='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4'
          for={inputId}
        >
          {label}
        </label>
        <div class='relative'>
          <select
            class='block appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id={inputId}
            onSelect={onSelect}
          >
            {options.map(option => (
              <option>{option}</option>
            ))}
          </select>
          <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              class='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
