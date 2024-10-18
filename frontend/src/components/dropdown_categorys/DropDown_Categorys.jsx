
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {


  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
