import React from 'react'
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const ServicesComponent = ({image, heading, paragraph}) => {
  const screenSize = useResponsive()
  return (
    <div className="service" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="bgSpan" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></div>
        <div className="img" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <img src={image} alt="" />
        </div>
      </div>
      <h2>{heading}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  )
}
