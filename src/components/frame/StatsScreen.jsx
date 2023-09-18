//Core
import React from 'react';
import { ClearStats, GetGamesPlayed, GetWinPercent } from '../../modules/gamelogic/Stats';
import StatGraph from '../stats/StatGraph';
import CloseWindow from './Buttons/CloseWindow';

export default function StatsScreen(props) {
    let winPercent = GetWinPercent();
    let gamesPlayed = GetGamesPlayed();
    
    return (
        <>
            <div className='overlaywindow' id='statistics'> 
                <CloseWindow CloseOverlay={props.CloseOverlay}/>
                <div className='statboxcontainer'>
                    <div id='statbox'>
                        <h3>{gamesPlayed}</h3>
                        <h4>Played</h4>
                    </div>
                    <div id='statbox'>
                        <h3>{winPercent}</h3>
                        <h4>Win %</h4>
                    </div>
                </div>
                {gamesPlayed &&(<StatGraph />)}
                <button className='resetbutton' onClick={() => ClearStats()}>Reset Stats</button>
            </div>
        </>

  )
}

