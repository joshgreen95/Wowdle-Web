//Core
import React from 'react';

export default function Border() {
  return (
    <div className='border'>
      <input id='helpbutton'type='button' on={console.log('Help button pressed')} value='?' button/>
        <h1 id='borderbanner'>Wowdle - Guess the NPC</h1>
      <input id='statsbutton'type='button' onClick={console.log('Stats button pressed')} value='#'/>
    </div>  
  )
}
