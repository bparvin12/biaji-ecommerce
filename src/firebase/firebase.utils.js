import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD4sdh5yXPhcsoVk-SANp4rHgtROoqU0v8",
    authDomain: "biaji-ecommerce.firebaseapp.com",
    databaseURL: "https://biaji-ecommerce.firebaseio.com",
    projectId: "biaji-ecommerce",
    storageBucket: "biaji-ecommerce.appspot.com",
    messagingSenderId: "312678575466",
    appId: "1:312678575466:web:9523778f15fb1b3daf0913",
    measurementId: "G-22S32GQT33"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;