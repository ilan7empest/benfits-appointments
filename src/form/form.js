import React, { useState } from 'react';
import DropDown from './dropdown';

import './form.css';

const YearOptions = [
  { id: 0, label: '2020' },
  { id: 1, label: '2021' },
  { id: 2, label: '2022' },
];
const MonthOptions = [
  { id: 0, label: 'January' },
  { id: 1, label: 'Febuary' },
  { id: 2, label: 'March' },
  { id: 3, label: 'April' },
  { id: 4, label: 'May' },
  { id: 5, label: 'June' },
  { id: 6, label: 'July' },
  { id: 7, label: 'August' },
  { id: 8, label: 'September' },
  { id: 9, label: 'October' },
  { id: 10, label: 'November' },
  { id: 11, label: 'December' },
];

const Form = ({ handleSubmit, date }) => {
  const year = YearOptions.findIndex((year) => year.label === date.year);

  const [form, setForm] = useState({ year, month: date.month });

  const onchange = (selecorId, value) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [selecorId]: +value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const year = YearOptions[form.year].label;
    return handleSubmit({
      year,
      month: form.month,
    });
  };

  return (
    <form onSubmit={onSubmit} className='ui form'>
      <div className='three fields'>
        <div className='field'>
          <DropDown
            options={YearOptions}
            defaultValue={form.year}
            onChange={onchange}
            id={'year'}
          />
        </div>
        <div className='field'>
          <DropDown
            options={MonthOptions}
            defaultValue={form.month}
            onChange={onchange}
            id={'month'}
          />
        </div>
        <div className='field'>
          <button className='ui button primary'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
