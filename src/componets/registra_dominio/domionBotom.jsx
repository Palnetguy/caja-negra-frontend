import React from 'react'

export const DomionBotomomponent = ({img, h1, p}) => {
  return (
  <div className="more_domain_each">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <h1>{h1}</h1>
            <p>
              {p}
            </p>
          </div>
        )
}
