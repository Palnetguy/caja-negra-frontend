import React from 'react'
import useResponsive from '../../utils/useResponsive'

export const DomionBotomomponent = ({img, h1, p}) => {
  const screenSize = useResponsive()
  return (
  <div className="more_domain_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <img src={img} alt="" />
            </div>
            <h1>{h1}</h1>
            <p>
              {p}
            </p>
          </div>
        )
}
