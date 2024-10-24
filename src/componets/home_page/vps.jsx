import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home_page.css'
import useResponsive from '../../utils/useResponsive'

export const VpsComponent = ({heading1, heading2, buttonTitle}) => {
         
  return (
<<<<<<< HEAD
<div className="each_ofertas" >
    <div className="bgSpan" ></div>
        <div className="info" >
=======
<div className="each_ofertas"    >
    <div className="bgSpan"    ></div>
        <div className="info"    >
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
            <h1>{heading1}</h1>
            <h2>{heading2}</h2>
            <Link target="_top" to="/solicitar">
                <button>{buttonTitle}</button>
            </Link>
        </div>
    </div>
    )
}
