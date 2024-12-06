import { defineNuxtPlugin } from "#app";
import { type FirebaseApp, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { type Functions, getFunctions } from "firebase/functions";
import { type Messaging, getMessaging } from "firebase/messaging";

declare module "#app" {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firebaseAuth: Auth;
    $firebaseFunctions: Functions;
    $firebaseMessaging: Messaging;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    appId: config.firebaseAppId,
    messagingSenderId: config.firebaseMessagingSenderId,
    storageBucket: "notification-test-88e92.appspot.com",
  };

  const firebaseApp = initializeApp(firebaseConfig);

  nuxtApp.provide("firebaseApp", firebaseApp);
  nuxtApp.provide("firebaseAuth", getAuth(firebaseApp));
  nuxtApp.provide("firebaseFunctions", getFunctions(firebaseApp));
  nuxtApp.provide("firebaseMessaging", getMessaging(firebaseApp));
});
