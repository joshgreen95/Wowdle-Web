//Core
import React, { Component } from 'react'
//Components
import NPCImage from './NPCImage';
import GuessForm from './GuessForm';
import LifeCounter from './LifeCounter';
import HintBox from './HintBox';
import HelpButton from '../frame/Buttons/HelpButton';

export default class GameBoard extends Component {
  constructor(props){
    super(props);
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
               <GuessForm updateWinLoss={this.props.updateWinLoss} controlsDisabled={this.props.controlsDisabled}/>
             </div>
             <div className='bottomborder'>
                <HelpButton showHelpScreen={this.props.showHelpScreen} />
             </div>
           </div>
         </>
       )
        
  }
}
