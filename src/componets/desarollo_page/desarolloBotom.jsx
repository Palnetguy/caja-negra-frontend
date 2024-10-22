import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const DesarolloBotomComponent = ({title, des, info, buttonTitle}) => {
  const screenSize = useResponsive();
  return (
  <div className="desarollo_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
    <h1 style={{width: '204px', height: '42px', top: '26px',left: '168px', gap: '0px', opacity: '0px',
    fontFamily: 'Saira',
    fontWeight: '700',
    lineHeight: '42px',
    textAlign: 'center',
    fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{title}</h1>
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
      textAlign: 'center', fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{des}</p>
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
        color: '#FFFFFF',
       fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        {info.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
    <button className='bottom_btn full_gradient_btn' 
    style={{ fontFamily : 'Saira', fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{buttonTitle}</button>
           </Link>
  </div>
  )
}
