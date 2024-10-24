import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const PlanComponent = ({h1, p}) => {
         
  return (
<<<<<<< HEAD
    <div className="selct_plan_each" >
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" >Solicitar</button>
=======
    <div className="selct_plan_each"    >
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn"    >Solicitar</button>
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
        </Link>
    </div>
    )
}
