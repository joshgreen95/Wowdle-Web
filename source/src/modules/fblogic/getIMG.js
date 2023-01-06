//Core
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function GetImg(npc){
    const storage = getStorage();
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
    const slicedUrl = url.slice(23);
    return slicedUrl;
}