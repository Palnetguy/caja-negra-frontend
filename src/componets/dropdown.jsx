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
  const screenSize = useResponsive();
  return (
    <div className="dropdown" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="dropdown-header" onClick={toggleDropdown} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? 'open' : ''}`} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          {options.map(option => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
              style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}
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
