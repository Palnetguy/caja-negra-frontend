import React from 'react'
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const DedicaoComponent = ({heading1, heading2, buttonTitle}) => {
  const screenSize = useResponsive()
  return (
    <div className="each_ofertas " >
    <div className="bgSpan" ></div>
    <div className="info" >
      <h1>{heading1}</h1>
      <h2>{heading2}</h2>
      <button>{buttonTitle}</button>
    </div>
  </div>
  )
}
