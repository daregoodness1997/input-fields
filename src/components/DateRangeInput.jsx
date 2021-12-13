import React from 'react';
import { DateRangePicker } from 'rsuite';
const DateRangeInput = ({ hoverRange, ranges }) => {
  return (
    <>
      <DateRangePicker hoverRange={hoverRange} ranges={ranges} />{' '}
    </>
  );
};

export default DateRangeInput;
