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
                let npcIMG = npc._document.data.value.mapValue.fields.img.stringValue;
                let npcID = npc._document.data.value.mapValue.fields.id.stringValue;

                const newNPC = new NPC(npcName, npcZone, npcContinent, npcFaction, npcIMG, npcID);
                
                //Uncomment to NPCS npc
                console.log(newNPC);
                
                npcArray.push(newNPC);
            })
            return 6;   
            return npcArray;      
        })
        .catch((error) => {
            throw new error("Cannot retrieve NPC list");
        });
    };

    export async function GetDailyRandNPC(npcArr){
        if(dailyRandomNPC !== null){return ;}
        const day = GetCurrentDay();
        const arrLength = npcArray.length;
        const cosMultiplier = Math.abs(Math.cos(day));
        const rndNPCIndex = Math.floor(arrLength * cosMultiplier);
        
        //Uncomment to see daily random npc
        console.log("Daily Random NPC is:")
        console.log(npcArray[rndNPCIndex]);

        dailyRandomNPC = npcArray[rndNPCIndex];
        
        return npcArray[rndNPCIndex];
    };
    
    export function ConstructWowHeadURL(){
        let npcName = dailyRandomNPC.name;
        let npcID = dailyRandomNPC.id;
        let processedName = npcName.replace(' ', '-');

        let wowHeadURL = `https://www.wowhead.com/npc=${npcID}/${npcName}`;
        return wowHeadURL;
    }