import React from 'react'
import useResponsive from '../../utils/useResponsive'

export const RemarksContainer = ({pBody, pFooter}) => {
const screenSize = useResponsive()
  return (
<div className="remark" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
    <div className="bgSpan" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}></div>
        <p>{pBody}</p>
        <p>{pFooter}</p>
    </div>
    )
}
