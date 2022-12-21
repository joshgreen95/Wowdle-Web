import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function GetImg(npc){

    const storage = getStorage();
    //Slice 23 is called to remove gs://wowdle.appspot.com/ from the
    const imgUrlRef = npc.img.slice(23);
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
    const slicedUrl = url.slice(46);
    return slicedUrl;
}