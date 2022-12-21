import React from 'react';
import LifePoint from './LifePoint';

export default function LifeCounter() {
  return (
    <div id="lifecounter">
        <div id="lifelabel">Lives Remaining:</div>
        <LifePoint id='lifepoint0' />
        <LifePoint id='lifepoint1' />
        <LifePoint id='lifepoint2' />
    </div>
  )
}
