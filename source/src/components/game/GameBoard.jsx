//Core
import React, { Component } from 'react'
//Components
import NPCImage from './NPCImage';
import GuessForm from './GuessForm';
import LifeCounter from './LifeCounter';
import HintBox from './HintBox';
//Modules
import { UpdateLifePoints } from '../../modules/gamelogic/SaveGame';
import { LoadHints } from '../../modules/gamelogic/SaveGame';

export default class GameBoard extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //Loads lifepoints from earlier session
    UpdateLifePoints();
    //Load hints from earlier session if exist
    LoadHints();
  }

  render() {    

        return  (
         <>
           <div className='gameboard'>
              <div id='imagecontainer'>
                <NPCImage  id='npcimage' src={this.props.npcURL} />
              </div>
              <LifeCounter />
              <HintBox />
               <GuessForm updateWinLoss={this.props.updateWinLoss} controlsDisabled={this.props.controlsDisabled}/>
           </div>
         </>
       )
        
  }
}
