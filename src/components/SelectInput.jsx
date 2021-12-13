import React from 'react';
import '../styles/input.css';

const SelectInput = ({ label, inputId, onSelect, options, error }) => {
  return (
    <>
      <div className='form__div'>
        <select className='form__select'>
          {options.map(option => (
            <option className='form__option'>{option}</option>
          ))}
        </select>
        <label for={inputId} class='form__label'>
          {label}
        </label>
      </div>
    </>
  );
};

export default SelectInput;
