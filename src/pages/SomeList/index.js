import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/react";

export default class List extends React.Component {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Random List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="ion-padding">
            <h4>Random List of Random Things</h4>

            <IonList lines="none">
              <IonItem>
                <IonLabel>Luke Skywalker</IonLabel>
                <IonIcon name="arrow-forward" />
              </IonItem>
              <IonItem>
                <IonLabel>Backpack</IonLabel>
                <IonIcon name="arrow-forward" />
              </IonItem>
              <IonItem>
                <IonLabel>Employee</IonLabel>
                <IonIcon name="arrow-forward" />
              </IonItem>
            </IonList>

            <p>End of random list of random things.</p>
          </div>
        </IonContent>
      </>
    );
  }
}
