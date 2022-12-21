import { NPC } from "../fblogic/NPCTemplate";
import { currentGameState } from "./GameState";



var dailyNPC = new NPC('a', 'b', 'c', 'd', 'mockimg');

export function setHADailyNPC(npc)
{
    dailyNPC = npc;
}

export function HandleAnswer(answer) {
    const dailyNPCName = dailyNPC.name.toLowerCase();

    const sanitizedAnswer = SanitizeAnswer(answer);

    if (!dailyNPCName) { console.error("Error selecting Daily NPC"); }
    if (!sanitizedAnswer) { return; }

    if (sanitizedAnswer === dailyNPCName){
        WinGame();
    } else {
        HandleTurn(dailyNPC);
        currentGameState.turnCount ++;
    }
}

function HandleTurn(dailyNPC){
    const continentHintRef = document.getElementById('continenthint');
    const zoneHintRef = document.getElementById('zonehint');
    const factionHintRef = document.getElementById('factionhint');
    
    switch (currentGameState.turnCount) {
        case 0:
            continentHintRef.innerHTML = `${dailyNPC.continent}`;
            HandleLifePoint(0);
        break;
        case 1:
            zoneHintRef.innerHTML = `${dailyNPC.zone}`;
            HandleLifePoint(1);
        break;
        case 2:
            factionHintRef.innerHTML = `${dailyNPC.faction}`;
            HandleLifePoint(2);
        break;
        case 3:
            GameOver();
        break;

    }
        
}

function SanitizeAnswer(answer){
    let sanitizedAnswer = null;
    sanitizedAnswer = answer.toLowerCase();
    return sanitizedAnswer;
}

function HandleLifePoint(lifePointPos){
    console.log(`Handling life point ${lifePointPos}`);
    
    const lifepoint = document.getElementById(`lifepoint${lifePointPos}`);
    console.log(lifepoint);
    lifepoint.style.backgroundColor = 'rgba(1, 1, 1, 0)';
}

function GameOver(){
    console.log('Game Over');
}

function WinGame()
{
    console.log('You Guessed Correctly!!');
}



