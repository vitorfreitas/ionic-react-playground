import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="ion-padding">
            <h4>Some cool cards here...</h4>

            <IonList lines="none">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>2019</IonCardSubtitle>
                  <IonCardTitle>John Wick 3</IonCardTitle>
                </IonCardHeader>

                <img
                  src="https://i0.wp.com/nosbastidores.com.br/wp-content/uploads/2019/05/john-wick-chapter-3-5c945b96ac16a.jpg?resize=1280%2C640&ssl=1"
                  alt="John Wick 3"
                />
              </IonCard>

              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>1977</IonCardSubtitle>
                  <IonCardTitle>Star Wars IV</IonCardTitle>
                </IonCardHeader>

                <img
                  src="https://entreterse.com.br/wp-content/uploads/2018/03/Star-Wars-Episodio-IV-5.jpg"
                  alt="John Wick 3"
                />
              </IonCard>
            </IonList>
          </div>
        </IonContent>
      </>
    );
  }
}
