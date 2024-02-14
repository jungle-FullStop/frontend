// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCxDY16C3DftbV_kMYLtqrzcoZkHgHYxvA',
  authDomain: 'fullstop-bfe10.firebaseapp.com',
  projectId: 'fullstop-bfe10',
  storageBucket: 'fullstop-bfe10.appspot.com',
  messagingSenderId: '515300246175',
  appId: '1:515300246175:web:5e7c133fb56790f68498aa',
  measurementId: 'G-7942Q1QHEF',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
