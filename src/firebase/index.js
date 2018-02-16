import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyA4TSC3yN5DH18_8h9qhbJmLrrBiOSWA-c',
  authDomain: 'arenadj-fb00c.firebaseapp.com',
  databaseURL: 'https://arenadj-fb00c.firebaseio.com',
  projectId: 'arenadj-fb00c',
  storageBucket: 'arenadj-fb00c.appspot.com',
  messagingSenderId: '750186925311'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
