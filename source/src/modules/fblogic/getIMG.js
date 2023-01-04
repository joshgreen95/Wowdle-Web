//Core
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function GetImg(npc){

    const storage = getStorage();
    //Slice 23 is called to remove gs://wowdle.appspot.com/ from the url
    const imgUrlRef = npc.img;
    const processedURL = SplitUrl(imgUrlRef);
    console.log(`Processed URL${processedURL}`)
    const npcIMGRef = ref(storage, processedURL);
    var fetchedUrl = null;
    console.log(npcIMGRef);
    await getDownloadURL(npcIMGRef)
        .then((imgURL) => {
            fetchedUrl = imgURL;
        });
    return fetchedUrl;
}

function SplitUrl(url){
    //TODO: Find nicer implimentation this will break if anything changes.
    console.log(`IDFK LOL ${url}`)
    const slicedUrl = url.slice(23);
    console.log(`IDFK LOL ${slicedUrl}`)
    return slicedUrl;
}