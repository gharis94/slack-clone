// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection,getFirestore,addDoc,getDoc, getDocs,doc,serverTimestamp, query} from 'firebase/firestore';
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
        await addDoc(collectionRef,data);
        return 
    }catch(error){
        return error.message
    }
}
//fetching rooms
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
        console.log(error);
    }
}
//adding message to specify room
export const addMessage =async(roomId,message)=>{
    const collectionRef = collection(db,'rooms');
    const docRef = doc(collectionRef,roomId);
    const data = collection(docRef,'messages');
    try{
        await addDoc(data, {
            message,
            timeStamp: serverTimestamp(String),
        })
    }catch(error){
        console.log(error.message)
    }
    
} 

//fetching message from room

export const fetchMessages =async(id)=>{

    const collectionRef = collection(db,'rooms',id,'messages')
    console.log('a',collectionRef)
    const querySnapShot =await getDocs(collectionRef);
    querySnapShot.forEach(item=>console.log(item.id,item.data()))
    // querySnapShot.map(item=>console.log('b',item.data()))
    const data = querySnapShot.docs.reduce((acc,cur)=>{
        acc=[...acc,cur.data()]
        return acc;
    },[])
    return data;
}