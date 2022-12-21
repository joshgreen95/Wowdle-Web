import React from 'react';
import Hint from './Hint';
export default function HintBox() {
  return (
    <div id='hintbox'>
        <Hint title='continenthint' order={1} />
        <Hint title='zonehint' order={0} />
        <Hint title='factionhint' order={2} />
    </div>
  )
}
