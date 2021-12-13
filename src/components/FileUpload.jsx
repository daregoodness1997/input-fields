import React from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({
  label,
  helpertext,
  onChange,
  value,
  error,
  inputId,
  type,
  required,
  errorText,
}) => {
  return (
    <>
      <div>
        <div class='form__div'>
          <input
            type='file'
            class='form__input'
            id={inputId}
            onChange={onChange}
            value={value}
            required={required}
          />
          <label for={inputId} class='form__label'>
            {label}
          </label>
        </div>
        {error ? (
          <p class='text-red-500 text-xs italic mt-10'>{errorText}</p>
        ) : null}
      </div>
      {/* <div
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
      </div> */}
    </>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string,
  inputId: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.any,
};

export default FileUpload;
