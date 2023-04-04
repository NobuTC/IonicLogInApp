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

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

type Props = {
  setLogin: (v: boolean) => void;
};

const Login: React.FC<Props> = ({ setLogin }: Props) => {
  // Set local states for email, password, isError
  // abc@gmail.com
  const [email, setEmail] = useState("");
  // asd123
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const myUser = useContext(UserContext);

  const whenClickOnLoginButton = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
        // [TODO] save to state
        setIsError(true);
        console.log("something went wrong", error);
      });
  };

  const whenClickOnRegistrationButton = () => {
    setLogin(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <Link to="/">Flower app</Link>
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
              <p>Error: Try again!</p>
            </IonItem>
          )}
          <IonButton onClick={whenClickOnLoginButton}>Log in</IonButton>
          <IonButton onClick={whenClickOnRegistrationButton}>
            Registration
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
