import React from 'react'
import '../../styles/home_page.css'

export const DedicaoComponent = ({heading1, heading2, buttonTitle}) => {
  return (
    <div className="each_ofertas ">
    <div className="bgSpan"></div>
    <div className="info">
      <h1>S{heading1}</h1>
      <h2>{heading2}</h2>
      <button>{buttonTitle}</button>
    </div>
  </div>
  )
}
