import React from 'react'
import "../../styles/desarollo_page.css";
import useResponsive from '../../utils/useResponsive';

export const DesarolloComponent = ({title, info}) => {
      
  return (
    <div className="desarollo_each"    >
    <h1    >{title}</h1>
    <p    >{info}</p>
  </div>
)}
