import firebase from "firebase"
import "firebase/firestore"

const config = {}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }
}

export default new firebase()
