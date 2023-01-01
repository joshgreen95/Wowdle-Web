//Core
import React from 'react';
//Modules
import { gitLink } from '../../modules/fblogic/params';

export default function HelpScreen() {
    return (
            <div className='overlaywindow'> 
                <ul>
                    <li>A picture of an NPC from World of Warcraft will be displayed.</li>
                    <li>In the text box below the picture, type in your guess for the name of the NPC and press <em>enter</em> to submit your guess.</li>
                    <li>If your guess is incorrect, information about the NPC will be revealed. With each consecutive guess more information about the NPC will be revealed</li>
                    <li>You have a total of 4 attempts to guess the name of the NPC. If you use up all your attempts it's Game Over for the day</li>
                </ul>
                <h2>Come back each day for a new puzzle!</h2>
            </div>
  )
}
