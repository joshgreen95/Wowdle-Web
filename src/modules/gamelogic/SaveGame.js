//Functions
import { GameState } from "./GameState";
import { UpdateHint } from "./HandleAnswer";
import { GetStats } from "./Stats";

export let gameSave = {};

export function GetLocalStorage(){
    const dateLastPlayed = new Date(localStorage.getItem('dateLastPlayed'));
    const today = new Date();

    if (!localStorage.getItem('dateLastPlayed') || 
        (dateLastPlayed.getDay() !== today.getDay())) {
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
    GetStats();
}

export function SaveGame() {
    localStorage.setItem('turnCount', gameSave.turnCount);
    localStorage.setItem('dateLastPlayed', gameSave.dateLastPlayed);
    localStorage.setItem('todayWin', gameSave.todayWin);
    localStorage.setItem('todayLose', gameSave.todayLose);
}

export function UpdateLifePoints() {
    let turncount = gameSave.turnCount;

    if(turncount >= 4) { turncount = 3; }

    if (turncount === 0) { return; }

    for (let i = 0; i < turncount; i++) {
        const lifepoint = document.getElementById(`lifepoint${i}`);
        lifepoint.style.background = 'rgba(1, 1, 1, 0)';
        lifepoint.style.border = 'transparent';
    };
}

export function LoadHints(){
    let turnCount = gameSave.turnCount;
    
    if (turnCount === 0) { return; }

    for(let i = 0; i <= turnCount; i++)
    {
        UpdateHint(i);
    }
}

export function GetTurnCount(){
    let turncount;
    turncount = gameSave.turnCount;
    return turncount;
}