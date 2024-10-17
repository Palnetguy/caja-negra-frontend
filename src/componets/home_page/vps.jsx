import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home_page.css'


export const VpsComponent = ({heading1, heading2, buttonTitle}) => {
  return (
<div className="each_ofertas ">
    <div className="bgSpan"></div>
        <div className="info">
            <h1>{heading1}</h1>
            <h2>{heading2}</h2>
            <Link target="_top" to="/solicitar">
                <button>{buttonTitle}</button>
            </Link>
        </div>
    </div>
    )
}
