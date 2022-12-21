import React from 'react';

export default function Hint(props) {
  return (
    <div>
        <h4>{props.title}:</h4>
        <div className='hintcontent' id={props.title}> placeholder {props.title}</div>
    </div>
  )
}
