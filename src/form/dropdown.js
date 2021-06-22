import React, { useState } from 'react';

const Dropdown = ({ options, defaultValue, onChange, id }) => {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
    return onChange(e.target.id, e.target.value);
  }
  return (
    <select onChange={handleChange} value={value} id={id}>
      {options.map(({ label, id }, idx) => {
        return (
          <option value={id} key={idx}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
