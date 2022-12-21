import React from 'react';

export default function Hint(props) {
  return (
    <div>
        <h4>{props.contents}:</h4>
        <div className={'hintcontent'} id={props.id}></div>
    </div>
  )
}
