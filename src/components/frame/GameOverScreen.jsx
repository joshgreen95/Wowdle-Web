//Core
import React from 'react';
import Donate from './Donate';

export default function GameOverScreen(props) {

  let condolences = [
    'Unlucky!',
    'You Suck...',
    'Bad Luck',
    'Yikes :/'
  ]

  return (
    <div className='overlaywindow' id='loss'>
      <div className='winscreen'>
        {/* {<h1>{condolences[Math.floor(Math.random() * condolences.length)]}</h1>} */}
        <h2>Today's NPC was: <a href={props.wowHeadURL} target='_blank'>{props.npcName}</a></h2>
        <h3>Come back tommorow for another puzzle!</h3>
        <Donate />
      </div>
    </div>
  )
}
