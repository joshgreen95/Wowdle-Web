//Functions
import { gameSave } from "./SaveGame";
import { AddStats } from "./Stats";

export function HandleWin(){
    gameSave.todayWin = true;
    AddStats();
}

export function HandleLoss(){
    gameSave.todayLose = true;
    AddStats();
}