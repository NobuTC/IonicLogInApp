import React from "react";
import "./InputBox.css";
import { IonInput, IonItem, IonButton } from "@ionic/react";

const InputBox: React.FC = () => {
  return (
    <div className="input-box container">
      <IonItem>
        <IonInput
          label="Email"
          labelPlacement="stacked"
          type="email"
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          label="Password"
          labelPlacement="stacked"
          type="password"
        ></IonInput>
      </IonItem>
      <IonButton>Log in</IonButton>
    </div>
  );
};

export default InputBox;
