import React from 'react';
import Input from './Input';

const DecimalInput = ({ ...props }) => {
  return (
    <>
      <Input {...props} type='decimal' />
    </>
  );
};

export default DecimalInput;
