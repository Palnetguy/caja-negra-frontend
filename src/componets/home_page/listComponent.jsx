import React from 'react'

export const ListComponent = ({li, p}) => {
  return (
    <div style={{
        marginBottom: '3em'
    }}>
        <li>{li}</li>
        <p>{p}</p>
    </div>
  )
}
