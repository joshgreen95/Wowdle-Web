//Functions
import { gameSave } from "./SaveGame";
import { AddStats } from "./Stats";

export function HandleWin(){
    alert('You Have Won');
    gameSave.todayWin = true;
    AddStats('W');
}

export function HandleLoss(){
    gameSave.todayLose = true;
    AddStats('L');
    alert('You Have Lost');
}