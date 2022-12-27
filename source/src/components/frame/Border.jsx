//Core
import React from 'react';

export default function Border(props) {
  return (
    <>
    <div className='border'>
      <input id='helpbutton'type='button' onClick={props.showHelpScreen} value='?' button/>
        <h1 id='borderbanner'>Wowdle - Guess the NPC</h1>
        <input id='statsbutton' type='button' onClick={props.showStatScreen} value='#'/>
    </div>

    </>
  )
}