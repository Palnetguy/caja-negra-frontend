import React from 'react'
import useResponsive from '../../utils/useResponsive'

export const DomionBotomomponent = ({img, h1, p}) => {
  const screenSize = useResponsive()
  return (
  <div className="more_domain_each" >
            <div className="image" >
              <img src={img} alt="" />
            </div>
            <h1>{h1}</h1>
            <p>
              {p}
            </p>
          </div>
        )
}
