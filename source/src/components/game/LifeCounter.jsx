import React from 'react'
import LifePoint from './LifePoint'

export default function LifeCounter() {
  let lifePoints = 3;
  
  
  return (
    <div id="lifecounter">
        <div id="lifelabel">Lives Remaining:</div>
        <LifePoint position={0} />
        <LifePoint position={1} />
        <LifePoint position={2} />
    </div>
  )
}
