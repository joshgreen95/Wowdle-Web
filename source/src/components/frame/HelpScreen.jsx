//Core
import React from 'react';
//Modules
import { gitLink } from '../../modules/fblogic/params';

export default function HelpScreen() {
    return (
            <div className='overlaywindow'> 
                <h2>Check out my Github</h2>
                <a href={gitLink} target="_blank" >Here</a>
            </div>
  )
}
