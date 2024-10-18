import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const VpsComponent = ({heading1, heading2, buttonTitle}) => {
    const screenSize = useResponsive()
  return (
<div className="each_ofertas" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
    <div className="bgSpan" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></div>
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <h1>{heading1}</h1>
            <h2>{heading2}</h2>
            <Link target="_top" to="/solicitar">
                <button>{buttonTitle}</button>
            </Link>
        </div>
    </div>
    )
}
