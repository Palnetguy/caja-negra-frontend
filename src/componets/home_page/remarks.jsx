import React from 'react'

export const RemarksContainer = ({pBody, pFooter, pProf}) => {
     
  return (
<div className="remark" >
    <div className="bgSpan" ></div>
    <div className="inner_div">
        <p>{pBody}</p>
        <p>{pFooter}, {pProf}</p>
    </div>
    </div>
  )
}
