//Core
import React from 'react';
//Components
import CloseWindow from './Buttons/CloseWindow';
import Donate from './Donate';

export default function HelpScreen(props) {
    return (
            <div className='overlaywindow' id='help'> 
                <CloseWindow CloseOverlay={props.CloseOverlay}/>
                <ul className='instructions'>
                    <li>Every day the game will display a new character.</li>
                    <li>In the text box below, type in your guess and press <em>enter</em>.</li>
                    <li>If you guess incorrectly, more and more information will be revealed about today's NPC.</li>
                    <li>You have a total of 4 attempts.</li>
                    <li> If you use up all of your attempts it's Game Over for the day.</li>
                    <li>Try again tommorow!</li>
                </ul>
                <h2>Come back each day for a new puzzle!</h2>
                <Donate />
            </div>
  )
}
