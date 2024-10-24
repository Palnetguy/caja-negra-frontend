import React from 'react'
import "../../styles/desarollo_page.css";

export const DesarolloComponent = ({title, info}) => {
  return (
    <div className="desarollo_each" >
    <h1 >{title}</h1>
    <p >{info}</p>
  </div>
)}
