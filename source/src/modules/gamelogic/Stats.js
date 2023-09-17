//Modules
import { gameSave } from "./SaveGame";

let stats = [];

export function GetStats(){
    let statsString = localStorage.getItem('stats');

    if(statsString === null){
        return;
    };

    stats = statsString.split(',');
    const adjustedStats = [];

    console.log(stats);
    return stats;
}

function SaveStats(){
    let statsString = stats.join(',');
    localStorage.setItem('stats', statsString);
    return statsString;
}
//Only Call AddStats()
export function AddStats(){
    let turnCount = gameSave.turnCount + 1;
    stats.push(turnCount);
    SaveStats();
}

export function GetWinPercent(){
    let wins = 0;
    let losses = 0;
    let winPercent = 0;
    //stops / 0 error
    if (Object.keys(stats).length !== 0) {
        stats.forEach((value) => {
            if (value >= 5) { losses += 1; }
            else { wins +=1; }
        });

        winPercent = Math.floor((wins / (losses + wins)) * 100);
    } else {
        return 0
    };

    return winPercent;
}

export function GetGamesPlayed(){
    if(stats != null){
        return stats.length;
    }
    else { return 0; }
}

export function ClearStats() {
    alert('Your Stats have been cleared');
    localStorage.removeItem('stats');
}
