//Core
import React from 'react';
import { GetTurnCount } from '../../modules/gamelogic/SaveGame';
import Donate from './Donate';

export default function WinScreen(props) {
  let turncount = GetTurnCount() + 1;
  let plural = (turncount > 1);

  console.log(props.npcName);
  return (
    <div className='overlaywindow' id='win'>
      <div className='winscreen'>
        <h2>Today's NPC was: 
          <a href={props.wowHeadURL} target='_blank'>{` ${props.npcName}`}</a>
        </h2>
        <h2>You solved today's puzzle in {turncount} {plural ? `attempts` : `attempt`}</h2>
        <h3>Come back tommorow for another puzzle!</h3>
        <Donate />
      </div>
      
    </div>
  )
}
