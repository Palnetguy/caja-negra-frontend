import React from 'react'
import "../../styles/desarollo_page.css";
import useResponsive from '../../utils/useResponsive';

export const DesarolloComponent = ({title, info}) => {
  const screenSize = useResponsive();
  return (
    <div className="desarollo_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
    <h1 style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{title}</h1>
    <p style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{info}</p>
  </div>
)}
