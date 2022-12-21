import { gameSave } from "./SaveGame";

export function HandleWin(){
    gameSave.todayWin = true;
    console.log('You Have Won');
}

export function HandleLoss(){
    gameSave.todayLose = true;
    console.log('You Have Lost');
}