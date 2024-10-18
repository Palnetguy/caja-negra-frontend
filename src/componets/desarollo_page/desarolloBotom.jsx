import React from 'react'
import { Link } from 'react-router-dom'

export const DesarolloBotomComponent = ({title, des, info, buttonTitle}) => {
  return (
  <div className="desarollo_each">
    <h1 style={{width: '204px', height: '42px', top: '26px',left: '168px', gap: '0px', opacity: '0px',
    fontFamily: 'Saira',
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: '42px',
    textAlign: 'center'
        }}>{title}</h1>
    <p style={{
      width: '431px',
      height: '36px',
      top: '2720px',
      // left: '146px',
      gap: '0px',
      opacity: '0px',
      fontFamily: 'Saira',
      fontSize: '24px',
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
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '36px',
        textAlign: 'left',
        color: '#FFFFFF'
                }}>
        {info.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
    <button className='bottom_btn' style={{ fontFamily : 'Saira', fontSize : '24px',
      fontWeight: '700',
      lineHeight: '42px',
      textAlign: 'center',
      width: '110px',
      height: '40px',
      top: '3025px',
      left: '201px',
      gap: '0px',
      opacity: '0px',
      background: '#86ffe9',
      borderRadius: '10px',
    }}>{buttonTitle}</button>
           </Link>
  </div>
  )
}
