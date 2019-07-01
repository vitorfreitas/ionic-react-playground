import React, { Component } from "react";
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonIcon,
  IonBadge
} from "@ionic/react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/SomeList";

class App extends Component {
  render() {
    const { pathname } = window.location;

    return (
      <IonApp>
        <BrowserRouter>
          {pathname === "/" && <Redirect to="/home" />}

          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact />
              <Route path="/list" component={List} exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon name="home" />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="list" href="/list">
                <IonIcon name="list" />
                <IonLabel>List</IonLabel>
                <IonBadge>22</IonBadge>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </BrowserRouter>
      </IonApp>
    );
  }
}

export default App;
