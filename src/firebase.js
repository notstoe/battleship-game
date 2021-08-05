import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const appF = firebase.initializeApp({
	apiKey: "AIzaSyDPn8IA_FhKnY2MNa9K-_MqUdWUPXpkLE8",
	authDomain: "battleship-d0a52.firebaseapp.com",
	projectId: "battleship-d0a52",
	storageBucket: "battleship-d0a52.appspot.com",
	messagingSenderId: "battleship-d0a52.appspot.com",
	appId: "1:596484871324:web:4e4e7c7768202a1ea78959",
	measurementId: "G-C0EYKMYY4J",
});
export const auth = appF.auth();
export const db = appF.firestore();
export default appF;
