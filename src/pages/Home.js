import { IonContent, IonPage, 
  IonGrid, 
  IonRow, IonCol,  
} from '@ionic/react';

import React from 'react';


import './Home.css';

const Home = () => {

  console.log("[Home.js]");

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size-md="6" offset-md="3" size-sm="8" offset-sm="2">
              <div className="titleGrid">
                HOME
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;