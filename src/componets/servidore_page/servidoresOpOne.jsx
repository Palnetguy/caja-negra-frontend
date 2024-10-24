import React from 'react'
import { Link } from 'react-router-dom'

export const ServidoresOpOneComponent = ({h1, h2, liItem, bt}) => {
         
  return (
  <div className="servidoresOp_1_each_1" >
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <ul>
        {liItem.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
        <button className="full_gradient_btn" >{bt}</button>
    </Link>
    </div>  )
}
