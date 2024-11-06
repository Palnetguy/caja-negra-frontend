import React from 'react'
import '../../styles/home_page.css'

export const ProfessionaleService = ({img, h2, p}) => {
       
  return (
<div className="service profesional-services" >
  <div className="image">
    <div className="bgSpan" ></div>
    <div className="img" >
      <img src={img} alt="" />
    </div>
  </div>
  <div style={{
    marginTop: '1em',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <h2 style={{
      fontFamily: 'Saira',
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '42px',
      textAlign: 'center' 
    }}>{h2}</h2>
    <p style={{
      fontFamily: 'Saira',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '36px',
      textAlign: 'center',
      width: '80%', 
    }}>
      {p}
    </p>
  </div>
</div>
)}
