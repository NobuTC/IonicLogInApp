import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
} from "@ionic/react";
import "./Home.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Registration: React.FC = () => {
  // Set local states for email, password, isError
  // abc@gmail.com
  const [email, setEmail] = useState("");
  // asd123
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const myUser = useContext(UserContext);

  const whenClickOnSignUpButton = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsError(false);
        if (user && myUser?.setIsLoggedIn) {
          myUser.setIsLoggedIn(true);
          console.log("logged in", user);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log("something went wrong", error.code);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <Link to="/">Flower App</Link>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="input-box container">
          <IonItem>
            <input
              placeholder="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </IonItem>
          <IonItem>
            <input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </IonItem>
          {isError && (
            <IonItem>
              <p>Error: try longer password and proper email!</p>
            </IonItem>
          )}
          <IonButton onClick={whenClickOnSignUpButton}>Sign up</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
