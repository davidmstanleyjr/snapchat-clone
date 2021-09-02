import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCLkegSHDmDrkgaxFzcpqiYd-xbUxgaU4A",
	authDomain: "snapchat-clone-4bc4c.firebaseapp.com",
	projectId: "snapchat-clone-4bc4c",
	storageBucket: "snapchat-clone-4bc4c.appspot.com",
	messagingSenderId: "567301089644",
	appId: "1:567301089644:web:fe5f890ac370592a87ab49",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// this initializes the authentication part
const auth = firebase.auth();

const storage = firebase.storage();
// this is for Google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
