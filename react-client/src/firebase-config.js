import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8iK1SdE3HfKYmXh8vyWlhsviALvJ05TU",
    authDomain: "burger-restaurant-dece7.firebaseapp.com",
    databaseURL: "https://burger-restaurant-dece7.firebaseio.com",
    projectId: "burger-restaurant-dece7",
    storageBucket: "burger-restaurant-dece7.appspot.com",
    messagingSenderId: "746203147474",
    appId: "1:746203147474:web:ce56b29916c27f9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

export {
    storage, firebase as default
};