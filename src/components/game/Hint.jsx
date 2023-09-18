//Core
import React from 'react';

export default function Hint(props) {
  return (
    <div id='hint'>
        <div className={'hintcontent'} id={props.id}>{`${props.contents}?`}</div>
      </div>
  )
}
