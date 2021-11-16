import {
  getAuth,
  signOut,
  setPersistence,
  inMemoryPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export const isBrowser = () => typeof window !== "undefined";

let currentUser = {};

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
};

if (isBrowser()) {
  initializeApp(firebaseConfig);

  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      currentUser = user;
    } else {
      currentUser = {};
    }
  });
}

const auth = getAuth();

export const setAuthStateObservers = (isAuthedObserver, isUnAuthedObserver) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      if (isAuthedObserver) {
        isAuthedObserver(user);
      }
    } else {
      if (isUnAuthedObserver) {
        isUnAuthedObserver();
      }
    }
  });
};

export const handleLogin = (password, onSuccess, onFailure) => {
  auth
    .setPersistence(browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(
        auth,
        process.env.GATSBY_FIREBASE_USER_EMAIL,
        password
      );
    })
    .then((userCredential) => {
      onSuccess(userCredential);
    })
    .catch(function (error) {
      // Handle Errors here.
      onFailure(error);
    });

  return false;
};

export const isAuthenticated = () => {
  return !!currentUser.uid;
};

export const logout = (onSuccess, onFailure) => {
  auth
    .setPersistence(inMemoryPersistence)
    .then(function () {
      return signOut(auth);
    })
    .then(() => {
      onSuccess();
    })
    .catch(function (error) {
      // Handle Errors here.
      onFailure(error);
    });
};
