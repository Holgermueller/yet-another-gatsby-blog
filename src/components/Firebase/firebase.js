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

class Firebase {
  constructor(app) {
    app.initializeApp(config)
    //this.store = app.firestore()
    this.auth = app.auth()
    this.db = app.database()
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser => {
    if(authUser) {
      this.user(authUser.uid)
      .once('value')
      .then(snapshot => {
        const dbUser = snapshot.val()

        authUser = {
          uid: authUser.uid,
          email: authUser.email,
          emailVerified: authUser.emailVerified,
          providerData: authUser.providerData,
          ...dbUser,
        };
        next(authUser)
      });
    } else {
      fallback()
    }
  })
  user = uid => this.db.ref(`users/${uid}`)

  users = () => this.db.ref('users')

  message = uid => this.db.ref(`messages/${uid}`)

  messages = () => this.db.ref('messages')
}

let firebase

function getFirebase(app, auth, database) {
  if (!firebase) {
    firebase = new Firebase(app, auth, database)
  }
  return firebase
}

export default getFirebase
