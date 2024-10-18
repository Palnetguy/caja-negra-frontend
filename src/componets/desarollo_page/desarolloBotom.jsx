import React from 'react'

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
    <button className='bottom_btn' style={{ fontFamily : 'Saira', fontSize : '32px',
      fontWeight: '700',
      lineHeight: '42px',
      textAlign: 'center',
      width: '125px',
      height: '42px',
      top: '3025px',
      left: '201px',
      gap: '0px',
      opacity: '0px',
      background: 'linear-gradient(90deg, #002C3A 0%, #33817C 50%, #012B38 100%)'
    }}>{buttonTitle}</button>
  </div>
  )
}
