import React from 'react'
import { Link } from 'react-router-dom'

export const DesarolloBotomComponent = ({title, des, info, buttonTitle}) => {
<<<<<<< HEAD
  return (
  <div className="desarollo_each" >
=======
      
  return (
  <div className="desarollo_each"    >
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
    <h1 style={{width: '204px', height: '42px', top: '26px',left: '168px', gap: '0px', opacity: '0px',
    fontFamily: 'Saira',
    fontWeight: '700',
    lineHeight: '42px',
    textAlign: 'center'}}>{title}</h1>
    <p style={{
      width: '431px',
      height: '36px',
      top: '2720px',
      // left: '146px',
      gap: '0px',
      opacity: '0px',
      fontFamily: 'Saira',
      fontWeight: '500',
      lineHeight: '36px',
      textAlign: 'center'}}>{des}</p>
    <ul style={{width: '448px',
        height: '178px',
        top: '2768px',
        left: '146px',
        gap: '0px',
        opacity: '0px',
        fontFamily: 'Saira',
        fontWeight: '500',
        lineHeight: '36px',
        textAlign: 'left',
        color: '#FFFFFF' }}>
        {info.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
    <button className='bottom_btn full_gradient_btn' 
    style={{ fontFamily : 'Saira' }}>{buttonTitle}</button>
           </Link>
  </div>
  )
}
