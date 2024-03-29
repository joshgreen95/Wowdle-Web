//Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCFM7cP6a4nDcjrvkQrflwR79EJK9K7nLE",
    authDomain: "wowdle.firebaseapp.com",
    projectId: "wowdle",
    storageBucket: "wowdle.appspot.com",
    messagingSenderId: "870075596086",
    appId: "1:870075596086:web:e922398cd06776217d4797",
    measurementId: "G-V4P9LCM8TL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const fireStoreDB = getFirestore(app);

//GIT
export const gitLink = 'https://github.com/joshgreen95';
//Website
export const websiteLink = 'https://joshgreen.tech';
//BuyMeACoffee
export const donationLink = 'https://www.buymeacoffee.com/joshgreen';