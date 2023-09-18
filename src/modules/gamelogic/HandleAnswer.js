//Functions
import { NPC } from "../fblogic/NPCTemplate";
import { HandleWin, HandleLoss } from "./HandleWinLoss";
import { gameSave, SaveGame, UpdateLifePoints} from "./SaveGame";

//Define dailyNPC with boilerplate values, otherwise read null error
var dailyNPC = new NPC('a', 'b', 'c', 'd', 'mockimg');

export function setHADailyNPC(npc)
{
    dailyNPC = npc;
}

export function HandleAnswer(answer) {
    const dailyNPCName = dailyNPC.name.toLowerCase();
    const sanitizedAnswer = SanitizeAnswer(answer);

    if (!dailyNPCName) { console.error("Error selecting Daily NPC"); }

    if (!sanitizedAnswer) { return ; }

    if (sanitizedAnswer === dailyNPCName){
        HandleWin();
    } else {
        console.log(gameSave)
        gameSave.turnCount ++;
        HandleTurn(gameSave.turnCount);
        UpdateLifePoints();
    };

    SaveGame();
}

function HandleTurn(turnCount){
   
    switch (turnCount) {
        case 1:
            UpdateHint(1);
            break;
        case 2:
            UpdateHint(2);
            break;
        case 3:
            UpdateHint(3);
            break;
        case 4:
            HandleLoss();
            SaveGame();
            break;
        default:
            console.log('Switch case is broken aaaaa');
            break;
    }

    if (turnCount > 4) { HandleLoss() };

}

function SanitizeAnswer(answer){
    let sanitizedAnswer = null;
    sanitizedAnswer = answer.toLowerCase();
    return sanitizedAnswer;
}

export function UpdateHint(hintIndex) {
    const continentHintRef = document.getElementById('continenthint');
    const zoneHintRef = document.getElementById('zonehint');
    const factionHintRef = document.getElementById('factionhint');

    switch(hintIndex){
        case 1:
            continentHintRef.innerHTML = `${dailyNPC.continent}`;
            break;
        case 2:
            zoneHintRef.innerHTML = `${dailyNPC.zone}`;
            break;
        case 3:
            factionHintRef.innerHTML = `${dailyNPC.faction}`;
            break;
    }
}
