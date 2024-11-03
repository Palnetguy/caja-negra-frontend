import React from 'react'
import { Link } from 'react-router-dom'

// export const ServidoresOpOneComponent = ({h1, h2, liItem, bt}) => {
         
//   return (
//   <div className="servidoresOp_1_each_1" >
//     <h1>{h1}</h1>
//     <h2>{h2}</h2>
//     <ul>
//         {liItem.map(i=>(
//             <li>{i}</li>
//         ))}
//     </ul>
//     <Link target="_top" to="/solicitar">
//         <button className="full_gradient_btn">{bt}</button>
//     </Link>
//     </div>
//     )
// }
export const ServidoresOpOneComponent = ({processor, memory, storage, transfer, time}) => {
         
    return (
    <div className="servidoresOp_1_each_1" >
      <h1>PROCESADOR</h1>
      <h2>Dual Xeon 2603</h2>
      <ul>
              <li>{processor}</li>
              <li>{memory}</li>
              <li>{storage}</li>
              <li>{transfer}</li>
              <li>{time}</li>
      </ul>
      <Link target="_top" to="/solicitar">
          <button className="full_gradient_btn">Solicitar</button>
      </Link>
      </div>
      )
  }