//Core
import { fireStoreDB } from "./params";
//Functions
import { collection, getDocs } from "firebase/firestore";
import { NPC } from "./NPCTemplate";

    export var npcArray = [];
    export var dailyRandomNPC = null;

    async function GetNPCDocs() {
        const npcDocs = await getDocs(collection(fireStoreDB, "/NPCs"));
        return await npcDocs;
    };

    function GetCurrentDay() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var startOfYear = new Date(year, 0, 1);
        var elapsedTime = currentDate - startOfYear;
        var elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

        //Test different days by changing number below

        return 42;
        return elapsedDays + 1;
        
    };

    export async function FormatNPCList(){
        await GetNPCDocs()
        .then((npcDocs) => {
            npcDocs.forEach((npc) => {
                let npcName = npc._document.data.value.mapValue.fields.name.stringValue;
                let npcZone = npc._document.data.value.mapValue.fields.zone.stringValue;
                let npcContinent = npc._document.data.value.mapValue.fields.continent.stringValue;
                let npcFaction = npc._document.data.value.mapValue.fields.faction.stringValue;
                let npcIMG = npc._document.data.value.mapValue.fields.img.referenceValue;

                const newNPC = new NPC(npcName, npcZone, npcContinent, npcFaction, npcIMG);
                console.log(newNPC);
                npcArray.push(newNPC);
                  
            })
            
            return npcArray;      
        })
        .catch((error) => {
            throw new error("Cannot retrieve NPC list");
        });
        
    };

    export async function GetDailyRandNPC(npcArr){
        const day = GetCurrentDay();
        const arrLength = npcArray.length;
        const cosMultiplier = Math.abs(Math.cos(day));
        const rndNPCIndex = Math.floor(arrLength * cosMultiplier);
        console.log("Daily Random NPC is:")
        console.log(npcArray[rndNPCIndex]);

        dailyRandomNPC = npcArray[rndNPCIndex];
        
        return npcArray[rndNPCIndex];
    };