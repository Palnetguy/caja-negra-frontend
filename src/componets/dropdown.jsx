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
<<<<<<< HEAD
  return (
    <div className="dropdown" >
      <div className="dropdown-header" onClick={toggleDropdown} >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'open' : ''}`} ></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu" >
=======
      
  return (
    <div className="dropdown"    >
      <div className="dropdown-header" onClick={toggleDropdown}    >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'open' : ''}`}    ></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu"    >
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
          {options.map(option => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
<<<<<<< HEAD
              
=======
                 
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
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
