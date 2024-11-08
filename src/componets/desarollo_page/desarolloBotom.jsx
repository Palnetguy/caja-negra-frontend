import React from 'react'
import { Link } from 'react-router-dom'

export const DesarolloBotomComponent = ({title, des, info, buttonTitle}) => {
  return (
  <div className="desarollo_bottom_each" >
    <div className="align">
    <h1>{title}</h1>
    <div className="desc">
    <p >{des}</p>
    <ul>
        {info.map(i=>(
            <li>{i}</li>
        ))}
    </ul>
    <Link target="_top" to="/solicitar">
    <button className='bottom_btn full_gradient_btn' 
    style={{ fontFamily : 'Saira',
      width: 'auto',
      height: 'auto',
fontSize: '24px',
fontWeight: '700',
lineHeight: '42px',
textAlign: 'center',
marginTop: '2.5em',
color: 'black'
       }}>{buttonTitle}</button>
           </Link>
          </div>
        </div>
  </div>
  )
}

