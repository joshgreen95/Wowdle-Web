//Core
import React from 'react';
import { GetStats } from '../../modules/gamelogic/Stats';
import StatGraph from '../stats/StatGraph';

export default function StatsScreen() {
    let wins = 0;
    let losses = 0;
    let gamesPlayed = 0;
    let winPercent = 0;
    const stats = GetStats();
    console.log(stats);

    if(stats != null) {
        gamesPlayed = stats.length;
        
        stats.forEach((value) => {
            if(value >= 5) { losses ++ ; }
            else { wins ++ ; } 
            console.log(`wins ${wins} losses ${losses}`);
        }); 
    
        winPercent = Math.floor((losses/wins) * 100);
    };



    return (
        <>
            <div className='overlaywindow'> 
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
                {stats &&(<StatGraph />)}
                <input type={'button'} onClick={() => ClearStats()} />
            </div>
        </>

  )
}

function ClearStats(){
    alert('Your Stats have been cleared');
    localStorage.removeItem('stats');
}