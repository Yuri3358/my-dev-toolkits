const firebaseConfig = {
  apiKey: "AIzaSyCFjFtxySwqfHjH47eZPLig4rraeH6veuc",
  authDomain: "dev-toolkits.firebaseapp.com",
  projectId: "dev-toolkits",
  storageBucket: "dev-toolkits.appspot.com",
  messagingSenderId: "854280473547",
  appId: "1:854280473547:web:5f89c97ca6cc305d0e844e",
  measurementId: "G-0SJVQVLFP7"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const colRef = db.collection("toolkits")

exports = { colRef }