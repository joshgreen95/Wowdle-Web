import React from 'react'

export default function LifePoint(props) {
  return (
    <div className='lifepoint' id={`position${props.position}`} position={props.position}>
    </div>
  )
}
