import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export const ServidoresOpOneComponent = ({h1, h2, liItem, bt}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileStyle = {
        width: '180px',
        height: '80px',
        color: 'black',
        fontFamily: 'Saira',
        fontWeight: '700',
        fontSize: '24px',
        marginTop: '2em',        
    };
         
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
        <button className="full_gradient_btn" style={isMobile ? mobileStyle : {
            width: '234px',
            height: '80px',
            color:'black',
            fontFamily:'Saira',
            fontWeight:'700',
            fontSize:'32px',
            marginTop:'2em',
            marginLeft: '2.4em'
            }}>{bt}</button>
    </Link>
    </div>
    )
}
