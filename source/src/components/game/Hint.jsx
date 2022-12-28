//Core
import React from 'react';

export default function Hint(props) {
  return (
    <div id='hint'>
        <h2>{props.contents}:</h2>
        <div className={'hintcontent'} id={props.id}></div>
    </div>
  )
}
