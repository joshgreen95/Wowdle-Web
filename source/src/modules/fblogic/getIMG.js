import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function GetImg(dailyRandNPC){

    const storage = getStorage();
    const imgUrlRef = dailyRandNPC.img;
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
    const slicedUrl = url.slice(45);
    return slicedUrl;
}