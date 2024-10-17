import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home_page.css'


export const vps = () => {
  return (
<div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <Link target="_top" to="/solicitar">
                  <button>Solicitar</button>
                </Link>
              </div>
            </div>  )
}
