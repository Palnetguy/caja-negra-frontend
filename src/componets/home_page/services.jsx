import React from 'react'
import '../../styles/home_page.css'

export const ServicesComponent = ({image, heading, paragraph}) => {
       
  return (
    <div className="service" >
      <div className="image" >
        <div className="bgSpan" ></div>
        <div className="img" >
          <img src={image} alt="" />
        </div>
      </div>
      <div>
      <h2>{heading}</h2>
      <p >
        {paragraph}
      </p>
      </div>
    </div>

  )
}
