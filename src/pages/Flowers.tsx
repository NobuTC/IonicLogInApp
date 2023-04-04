import {
  IonImg,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

import "./Home.css";

const Flowers: React.FC = () => {
  return (
    <>
      <Menu />

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <Link to="/">Flower App</Link>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Flowers</IonTitle>
            </IonToolbar>
            <IonImg src="../assets/img/flower1.jpg"></IonImg>
          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Flowers;
