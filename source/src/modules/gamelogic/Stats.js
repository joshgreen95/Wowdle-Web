//Modules
import { gameSave } from "./SaveGame";

let stats = [];

export function GetStats(){
    let statsString = localStorage.getItem('stats');
    if(!statsString) { return ; }
    stats = statsString.split(',');
    console.log(`stats :${stats}`)
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
    console.log(stats);
    SaveStats();
}
