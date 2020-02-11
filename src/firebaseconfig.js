const firebaseConfig = {
    apiKey: "AIzaSyBtkNefPlYQtenF_c969rS0H7l1JUD5aX4",
    authDomain: "water-5176f.firebaseapp.com",
    databaseURL: "https://water-5176f.firebaseio.com",
    projectId: "water-5176f",
    storageBucket: "water-5176f.appspot.com",
    messagingSenderId: "976909306568",
    appId: "1:976909306568:web:483568ffe3c18f9083f3fd"
};

import firebase from 'firebase'
import 'firebase/database'
firebase.initializeApp(firebaseConfig)
export default firebase