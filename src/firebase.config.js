// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGL0P7otmcdW3w4pemfvZa9YP_b-VnV4Q",
    authDomain: "dragon-news-f085a.firebaseapp.com",
    projectId: "dragon-news-f085a",
    storageBucket: "dragon-news-f085a.appspot.com",
    messagingSenderId: "594701919606",
    appId: "1:594701919606:web:f20d2d02eaefc8bde44657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app