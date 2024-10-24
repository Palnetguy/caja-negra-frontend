import React from 'react'
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const ProfessionaleService = ({img, h2, p}) => {
       
  return (
<<<<<<< HEAD
<div className="service" >
          <div className="image" >
            <div className="bgSpan" ></div>
            <div className="img" >
=======
<div className="service"    >
          <div className="image"    >
            <div className="bgSpan"    ></div>
            <div className="img"    >
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
              <img src={img} alt="" />
            </div>
          </div>
          <h2>{h2}</h2>
          <p>
            {p}
          </p>
        </div>  )
}
