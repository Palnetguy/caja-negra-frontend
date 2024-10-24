// src/CustomDropdown.js
import React, { useState } from 'react';
import '../styles/customDropdown.css'; // Import the CSS for stylingrt
import useResponsive from '../utils/useResponsive';

const CustomDropdown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Toggle the dropdown menu
  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  // Handle the selection of an option
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };
  return (
    <div className="dropdown" >
      <div className="dropdown-header" onClick={toggleDropdown} >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'open' : ''}`} ></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu" >
          {options.map(option => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
              
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
