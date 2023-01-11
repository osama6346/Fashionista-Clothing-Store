import * as firebase from 'firebase/app';
import 'firebase/auth';
import {getAuth} from 'firebase/auth';
import {getDatabase, get, child} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyAbqi04YB-YqbMQ9_rGDOSBqT8zDymd5Gs',
  authDomain: 'fashionista-fc912.firebaseapp.com',
  databaseURL: 'https://fashionista-fc912-default-rtdb.firebaseio.com',
  projectId: 'fashionista-fc912',
  storageBucket: 'fashionista-fc912.appspot.com',
  messagingSenderId: '210588102182',
  appId: '1:210588102182:web:8289687b806034d8eec0e7',
  measurementId: 'G-6K906JDKHY',
};

const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);

const db = getDatabase(app);
export {auth, db , get, child};
