import React from 'react'
import { Link } from 'react-router-dom'
import useResponsive from '../../utils/useResponsive'

export const ServidoresOpOneComponent = ({h1, h2, liItem, bt}) => {
         
  return (
<<<<<<< HEAD
  <div className="servidoresOp_1_each_1" >
=======
  <div className="servidoresOp_1_each_1"    >
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <ul>
        {liItem.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
<<<<<<< HEAD
        <button className="full_gradient_btn" >{bt}</button>
=======
        <button className="full_gradient_btn"    >{bt}</button>
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
    </Link>
    </div>  )
}
