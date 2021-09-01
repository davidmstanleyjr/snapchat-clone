import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// this iniitializes the authentication part
const auth = firebase.auth();

const storage = firebase.storage();
// this is for Google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
