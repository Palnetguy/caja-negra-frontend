import React from 'react'

export const DesarolloBotomComponent = ({title, des, info, buttonTitle}) => {
  return (
    <div className="desarollo_each" >
    <h1>{title}</h1>
    <p>{des}</p>
    <ul>
        {info.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <button>{buttonTitle}</button>
  </div>
  )
}
