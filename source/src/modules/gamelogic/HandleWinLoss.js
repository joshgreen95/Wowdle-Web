//Functions
import { gameSave } from "./SaveGame";
import { AddStats } from "./Stats";

export function HandleWin(){
    alert('You Have Won');
    gameSave.todayWin = true;
    AddStats();
}

export function HandleLoss(){
    gameSave.todayLose = true;
    AddStats();
    alert('You Have Lost');
}