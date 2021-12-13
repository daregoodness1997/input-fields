import React from 'react';
import '../styles/input.css';

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
      <div>
        <div class='form__div'>
          <textarea
            class={`form__input ${error ? 'error__input' : null}`}
            id={inputId}
            placeholder={placeholder}
            onChange={onChange}
            style={{ minHeight: '80px' }}
            value={value}
          />
          <label for={inputId} class='form__label'>
            {label}
          </label>
        </div>
        {error ? (
          <p class='text-red-500 text-xs italic mt-10'>{errorText}</p>
        ) : null}
      </div>
    </>
  );
};

export default Textarea;
