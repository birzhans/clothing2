import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyC-iB2uj6WTdpG1pBMCQv-ZJovSuP-syRk",
	authDomain: "crwn-db-db5ec.firebaseapp.com",
	projectId: "crwn-db-db5ec",
	storageBucket: "crwn-db-db5ec.appspot.com",
	messagingSenderId: "137507816295",
	appId: "1:137507816295:web:4e99b94ddfb8ed71f225c2",
	measurementId: "G-LH65KL9QJX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;