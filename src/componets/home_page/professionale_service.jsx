import React from 'react'
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const ProfessionaleService = ({img, h2, p}) => {
       
  return (
<div className="service"    >
          <div className="image"    >
            <div className="bgSpan"    ></div>
            <div className="img"    >
              <img src={img} alt="" />
            </div>
          </div>
          <h2>{h2}</h2>
          <p>
            {p}
          </p>
        </div>  )
}
