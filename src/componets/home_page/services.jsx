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
      <div style={{width: '80%',
        height: 'auto',
        color: '#FFFFFF',
        marginBottom:'2em'
        }}>
      <h2 style={{fontFamily: 'Saira',
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '42px',
      textAlign: 'center'
      }}>{heading}</h2>
      <p style={{fontFamily: 'Saira',
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '36px',
      textAlign: 'center'
      }}>
        {paragraph}
      </p>
      </div>
    </div>

  )
}
