import { GameState } from "./GameState";
import { UpdateHint } from "./HandleAnswer";

export let gameSave = {};

export function GetLocalStorage(){
    let dateLastPlayed = new Date(localStorage.getItem('dateLastPlayed'));
    if (dateLastPlayed.getDay() !== new Date().getDay) {
        gameSave = new GameState();
        SaveGame();
    }
    else {
        gameSave.turnCount = parseInt(localStorage.getItem('turnCount'));
        gameSave.dateLastPlayed = dateLastPlayed;
        
        //Conversion to bool from int
        gameSave.todayWin = localStorage.getItem('todayWin') === 'true';
        gameSave.todayLose = localStorage.getItem('todayLose') === 'true';
    }

}

export function SaveGame() {
    localStorage.setItem('turnCount', gameSave.turnCount);
    localStorage.setItem('dateLastPlayed', gameSave.dateLastPlayed);
    localStorage.setItem('todayWin', gameSave.todayWin);
    localStorage.setItem('todayLose', gameSave.todayLose);
}

export function UpdateLifePoints() {
    let turncount = gameSave.turnCount;
    if (turncount === 0 || turncount > 4) { return ; }
    for (let i = 0; i < turncount; i++) {
        const lifepoint = document.getElementById(`lifepoint${i}`);
        console.log('Updating \n' + lifepoint);
        lifepoint.style.backgroundColor = 'rgba(1, 1, 1, 0)';
    };
}

export function loadHints(){
    let turnCount = gameSave.turnCount;
    
    if (turnCount === 0) { return; }

    for(let i = 0; i <= turnCount; i++)
    {
        UpdateHint(i);
    }
}
