import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const ServidoresOpOneComponent = ({h1, h2, liItem, bt}) => {
    const screenSize = useResponsive()
  return (
  <div className="servidoresOp_1_each_1" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <ul>
        {liItem.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
        <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>{bt}</button>
    </Link>
    </div>  )
}
