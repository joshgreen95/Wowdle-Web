//Core
import React from 'react';

export default function GameOverScreen(props) {

  return (
    <div className='overlaywindow'>
      <div className='winscreen'>
        <h1>Bad Luck!</h1>
        <h2>Todays NPC was <a href={props.wowHeadURL} target='_blank'>{props.npcName}</a></h2>
        <h3>Come back tommorow for another puzzle!</h3>
      </div>
    </div>
  )
}
