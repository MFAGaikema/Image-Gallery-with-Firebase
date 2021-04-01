import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyD_JSzGjKGywGuQaeI_rnA8l_ESD5Q4byI',
	authDomain: 'firegram-1fe0c.firebaseapp.com',
	projectId: 'firegram-1fe0c',
	storageBucket: 'firegram-1fe0c.appspot.com',
	messagingSenderId: '782015232997',
	appId: '1:782015232997:web:9c4fb167b571d3793dcd0c',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()

const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
