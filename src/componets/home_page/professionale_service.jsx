import React from 'react'
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const ProfessionaleService = ({img, h2, p}) => {
  const screenSize = useResponsive()
  return (
<div className="service" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <div className="bgSpan" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></div>
            <div className="img" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <img src={img} alt="" />
            </div>
          </div>
          <h2>{h2}</h2>
          <p>
            {p}
          </p>
        </div>  )
}
