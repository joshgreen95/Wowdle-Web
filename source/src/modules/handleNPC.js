import { fireStoreDB } from "../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

    class NPC {
        constructor(name, zone, continent, img)
        {
            this.name = name;
            this.zone = zone;
            this.continent = continent;
            this.img = img;
        }
    };

    export const npcArray = [];

    async function getNPCDocs() {
        const npcDocs = await getDocs(collection(fireStoreDB, "/NPCs"));
        return await npcDocs;
    };

    function getCurrentDay() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var startOfYear = new Date(year, 0, 1);
        var elapsedTime = currentDate - startOfYear;
        var elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

        return elapsedDays + 1;
        
    };

    export async function formatNPCList(){
        await getNPCDocs().then((npcDocs) => {
            npcDocs.forEach((npc) => {
                let npcName = npc._document.data.value.mapValue.fields.name.stringValue;
                let npcZone = npc._document.data.value.mapValue.fields.zone.stringValue;
                let npcContinent = npc._document.data.value.mapValue.fields.continent.stringValue;
                let npcIMG = npc._document.data.value.mapValue.fields.img.referenceValue;

                const newNPC = new NPC(npcName, npcZone, npcContinent, npcIMG);
                npcArray.push(newNPC);        
            })
        })
        console.log(`Logging NPC Array on handleNPC : ${npcArray}`);
        return npcArray;
    };

    export function getDailyRandNPC(){
        const day = getCurrentDay();
        const arrLength = npcArray.length;
        const cosMultiplier = Math.abs(Math.cos(day));
        const rndNPCIndex = Math.floor(arrLength * cosMultiplier);
        console.log(npcArray[rndNPCIndex]);
        return npcArray[rndNPCIndex]
    };