import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  onChange,
  inputId,
  error,
  errorText,
  type,
  value,
  placeholder,
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
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
        {error ? (
          <p class='text-red-500 text-xs italic mt-2'>{errorText}</p>
        ) : null}
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  inputId: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  inputId: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onChange: PropTypes.func,
};

export default Input;
