import { IonContent, IonHeader, IonPage, 
    IonTitle, IonToolbar, IonGrid, 
    IonRow, IonCol, IonButton, 
    IonLabel, IonIcon 
  } from '@ionic/react';
  
  import React from 'react';
  //import { useHistory } from 'react-router-dom';
  import { gameControllerOutline, helpOutline, addCircleOutline } from 'ionicons/icons';
  
  import './Home.css';
  
  const Home= () => {
  
    // const isAuth = useSelector((state: RootState) => state.auth.auth);
    console.log("[Home.js]");
    //console.log(props);
    // const dispatch = useDispatch();
    //const history = useHistory();
  
    const authHandler = () => {
      // if(!isAuth) {
      //   dispatch(authActions.authSuccessful());
      // } else {
      //   dispatch(authActions.authOff());
      // }
      //history.push("/auth");
    }
    return (
      <IonPage>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol size-md="6" offset-md="3" size-sm="8" offset-sm="2">
                <div className="titleGrid">
                  JEOPARDY!
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size-md="6" offset-md="3" size-sm="8" offset-sm="2">
                <div className="controls">
                  <IonGrid>
                    <IonRow>
                      <IonCol size-md="4">
                        <IonButton routerLink="/categories">
                          <IonLabel>
                            <IonIcon icon={helpOutline} size="large"></IonIcon>
                      Categories & Questions
                    </IonLabel>
                        </IonButton>
                      </IonCol>
                      <IonCol size-md="4">
                        <IonButton>
                          <IonLabel>
                            <IonIcon icon={addCircleOutline} size="large"></IonIcon>
                            <p>Add/Edit Games</p>
                          </IonLabel>
                        </IonButton>
                      </IonCol>
                      <IonCol size-md="4">
                        <IonButton>
                          <IonLabel>
                            <IonIcon icon={gameControllerOutline} size="large"></IonIcon>
                            <p>Play A Game</p>
                          </IonLabel>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonButton>
                          <IonLabel>
                            My Profile
                          </IonLabel>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
  
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton onClick={authHandler}>
                  <IonLabel>
                    Auth!
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;