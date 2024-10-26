import React from 'react'

export const RemarksContainer = ({pBody, pFooter}) => {
     
  return (
<div className="remark" >
    <div className="bgSpan" ></div>
    <div className="inner_div">
        <p>{pBody}</p>
        <p>{pFooter}</p>
    </div>
    </div>
  )
}
