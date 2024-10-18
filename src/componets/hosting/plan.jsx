import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const PlanComponent = ({h1, p}) => {
    const screenSize = useResponsive()
  return (
    <div className="selct_plan_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
        </Link>
    </div>
    )
}
