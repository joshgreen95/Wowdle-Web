import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';
import NPCImage from './NPCImage';
import GuessForm from './GuessForm';
import { FormatNPCList, GetDailyRandNPC } from '../../modules/fblogic/HandleNPC';
import { GetImg } from '../../modules/fblogic/GetIMG';
import LifeCounter from './LifeCounter';
import HintBox from './HintBox';
import { setHADailyNPC } from '../../modules/gamelogic/HandleAnswer';
import { currentGameState } from '../../modules/gamelogic/GameState';

export default class GameBoard extends Component {
  constructor(props){
    super(props);
    if (currentGameState.dateLastPlayed != new Date().getDate){
      currentGameState.NewGame();
    }
  }

  componentDidMount(){
    //On Mount calls setup of game. 
    FormatNPCList().then((npcArr) => {
      GetDailyRandNPC(npcArr).then((npc) => {
        setHADailyNPC(npc);
        //Gets profile img and calls render on component.
        GetImg(npc).then((randNpcImageUrl) => {
          let imageContainer = document.getElementById('imagecontainer')
          const root = createRoot(imageContainer);
          root.render((<NPCImage id='npcimage' src={randNpcImageUrl} />));
        })
      })
    });
  }
  render() {    

        return  (
         <>
           <div className='gameboard'>
              <div id='imagecontainer'>
                <NPCImage src="" id='npcimage' />
              </div>
              <LifeCounter />
              <HintBox />
             <div>
               <GuessForm />
             </div>
           </div>
         </>
       )
        
  }
}

/*
        List of Internal Components : 
        -- Div for Game board
        -- Character profile picture :-- 
        -- 5 Guess boxes -- Each includes checkboxes if player has guessed correctly ; Zone, Continent, Faction???  
        -- Entry Field -- Sanitize input with lowercase 
*/



