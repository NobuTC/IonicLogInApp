import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

import "./Home.css";

const Home: React.FC = () => {
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
              <IonTitle size="large">Welcome to our page</IonTitle>
            </IonToolbar>

            <IonItem routerLink="/flowers">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>View Flowers</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonItem>

            <IonItem routerLink="/flowerPots">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>View Flower Pots</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonItem>
          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
