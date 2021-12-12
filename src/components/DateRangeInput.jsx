import React from 'react';
import { DateRangePicker } from 'react-date-range/';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeInput = ({ onChange, ranges }) => {
  return (
    <>
      <DateRangePicker onChange={onChange} ranges={[ranges]} />
    </>
  );
};

export default DateRangeInput;
