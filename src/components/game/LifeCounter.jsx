//Core
import React from 'react';
//Modules
import LifePoint from './LifePoint';

export default function LifeCounter() {
  return (
    <div className="lifecounter">
        <LifePoint id='lifepoint0' />
        <LifePoint id='lifepoint1' />
        <LifePoint id='lifepoint2' />
    </div>
  )
}
