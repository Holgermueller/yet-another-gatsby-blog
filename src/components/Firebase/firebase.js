import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAING_SENDER_ID,
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }
  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
