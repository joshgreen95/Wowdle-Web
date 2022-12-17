//TODO Connect to firebase Firestore
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
    }

    export const npcArray = [];

    async function getNPCDocs() {
        const npcDocs = await getDocs(collection(fireStoreDB, "/NPCs"));
        return npcDocs;
    };

    export function formatNPCList(){
        getNPCDocs().then((npcDocs) => {
            npcDocs.forEach((npc) => {
                let npcName = npc._document.data.value.mapValue.fields.name.stringValue;
                let npcZone = npc._document.data.value.mapValue.fields.zone.stringValue;
                let npcContinent = npc._document.data.value.mapValue.fields.continent.stringValue;
                let npcIMG = npc._document.data.value.mapValue.fields.img.referenceValue;

                const newNPC = new NPC(npcName, npcZone, npcContinent, npcIMG);
                npcArray.push(newNPC);
            })
        })
    }