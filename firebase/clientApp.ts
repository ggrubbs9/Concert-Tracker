import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
console.log(clientCredentials);

// apiKey: "AIzaSyB5fcDTlesataZMlBQVJRArytxZnaAeu9Q",
// authDomain: "concert-tracker-website-3124e.firebaseapp.com",
// projectId: "concert-tracker-website-3124e",
// storageBucket: "concert-tracker-website-3124e.appspot.com",
// messagingSenderId: "431653273063",
// appId: "1:431653273063:web:a6e290e5dadaca7e1d9142",
// measurementId: "G-L78QEEHXRG"

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
