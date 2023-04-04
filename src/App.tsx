import React, { useState, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Flowers from "./pages/Flowers";
import FlowerPots from "./pages/FlowerPots";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LoginOrSignup from "./pages/LoginOrSignUp";

setupIonicReact();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm8Ep-5JcbwMZeB6JGPBVE00XNo8_IBl4",
  authDomain: "ionic-firebase-963de.firebaseapp.com",
  projectId: "ionic-firebase-963de",
  storageBucket: "ionic-firebase-963de.appspot.com",
  messagingSenderId: "924766473231",
  appId: "1:924766473231:web:378b08ab88f8929093e77a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export type UserType = {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
};
export const UserContext = createContext<UserType | null>(null);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/flowers">
              {isLoggedIn ? <Flowers /> : <LoginOrSignup />}
            </Route>

            <Route exact path="/flowerPots">
              {isLoggedIn ? <FlowerPots /> : <LoginOrSignup />}
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UserContext.Provider>
  );
};

export default App;
