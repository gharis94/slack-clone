// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection,getFirestore,addDoc, getDocs} from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvirt401Rmgf-lJb2wZx0ScimAjr2hosA",
    authDomain: "slack-clone-46e83.firebaseapp.com",
    projectId: "slack-clone-46e83",
    storageBucket: "slack-clone-46e83.appspot.com",
    messagingSenderId: "158935821433",
    appId: "1:158935821433:web:8fb633060708338796f8a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initializing the auth
const auth = getAuth(app);

//initializing firestore
export const db = getFirestore(app);

//create rooms
export const addRoom =async(data)=>{
    const collectionRef = collection(db,'rooms');
    try{
        const docRef = await addDoc(collectionRef,data);
        return 
    }catch(error){
        return error.message
    }
}

export const getRooms =async()=>{
    const collectionRef=collection(db,'rooms');
    try{
        const querySnapShot = await getDocs(collectionRef);
        const data = querySnapShot.docs.reduce((acc,cur)=>{
            
            acc =[...acc,{...cur.data(),id:cur.id}]
            return acc;
        },[])
        return data;
    }catch(error){
        return error.message;
    }
}