import React from 'react'
import { Link } from 'react-router-dom'

export const PlanComponent = ({h1, p}) => {
         
  return (
    <div className="selct_plan_each" >
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{
                width: '234px',
                height: '80px',
                fontFamily: 'Saira',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '42px',
                textAlign: 'center',
                color: 'black'
        }}>Solicitar</button>
        </Link>
    </div>
    )
}
