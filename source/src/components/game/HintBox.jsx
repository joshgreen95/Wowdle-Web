//Core
import React from 'react';
//Components
import Hint from './Hint';

export default function HintBox() {
  return (
    <div id='hintbox'>
        <Hint id='continenthint' contents='Continent' />
        <Hint id='zonehint' contents='Zone' />
        <Hint id='factionhint' contents='Faction' />
    </div>
  )
}
