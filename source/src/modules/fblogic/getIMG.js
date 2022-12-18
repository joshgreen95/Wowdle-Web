import { render } from "react-dom";
import { getDailyRandNPC } from "./handleNPC";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function getImg(){
    const storage = getStorage();
    const imgURL =  getDailyRandNPC().img
    const processedURL = splitURL(imgURL);
    const npcIMGRef = ref(storage, processedURL);
    
    getDownloadURL(npcIMGRef)
        .then((imgURL) => {
            const img = document.getElementById("NPCImage");
            img.setAttribute('src', imgURL);
            return(imgURL)
        })
        .catch((error) => {
            throw new error("IMG Could not be Found")
        })

}

function splitURL(url){
    //TODO: Find nicer implimentation this will break if anything changes.
    //splits url at relevant point
    // no need to change unless projects change
    return url.slice(45);
}