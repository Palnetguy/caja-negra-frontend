import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const PlanComponent = ({h1, p}) => {
         
  return (
    <div className="selct_plan_each"    >
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn"    >Solicitar</button>
        </Link>
    </div>
    )
}
