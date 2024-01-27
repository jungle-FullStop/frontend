// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const firebase_config = {
  apiKey: "AIzaSyCxDY16C3DftbV_kMYLtqrzcoZkHgHYxvA",
  authDomain: "fullstop-bfe10.firebaseapp.com",
  projectId: "fullstop-bfe10",
  storageBucket: "fullstop-bfe10.appspot.com",
  messagingSenderId: "515300246175",
  appId: "1:515300246175:web:5e7c133fb56790f68498aa",
  measurementId: "G-7942Q1QHEF"
};

const firebase_vapidkey_tes = `BCZPsCQZIplQpV4Xd7NU7YxdEJGe1Pv9SD4MehKPLGlY-YnaHw18y_fywYtXQq9X462oUMyPFpukkaHM_3mY3F4`;

initializeApp(firebase_config);

const messaging = getMessaging();

export const requestForToken = async() => {
  return getToken(messaging, {
    vapidKey: firebase_vapidkey_tes,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        return currentToken;
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload);
      resolve(payload);
    });
  });
