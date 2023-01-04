//Core
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function GetImg(npc){

    const storage = getStorage();
    //Slice 23 is called to remove gs://wowdle.appspot.com/ from the url
    const imgUrlRef = npc.img;
    const processedURL = SplitUrl(imgUrlRef);
    const npcIMGRef = ref(storage, processedURL);
    var fetchedUrl = null;

    await getDownloadURL(npcIMGRef)
        .then((imgURL) => {
            fetchedUrl = imgURL;
        });
    return fetchedUrl;
}

function SplitUrl(url){
    //TODO: Find nicer implimentation this will break if anything changes.
    const slicedUrl = url.slice(23);
    return slicedUrl;
}