//Core
import React from 'react';

export default function Hint(props) {
  return (
    <div id='hint'>
      <div id={`${props.id}pic`}>
        <div className={'hintcontent'} id={props.id}></div>
      </div>
    </div>
  )
}
