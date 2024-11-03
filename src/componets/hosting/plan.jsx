import React from 'react'
import { Link } from 'react-router-dom'

export const PlanComponent = ({ planType, info }) => {
    return (
      <div className="selct_plan_each">
        <h1>
          {planType === "Premium" ? `${planType} +` : planType}
        </h1>
        <p>{info}</p>
        <Link target="_top" to="/solicitar">
          <button className="full_gradient_btn">Solicitar</button>
        </Link>
      </div>
    );
  };
