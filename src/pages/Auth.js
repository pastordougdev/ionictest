import React, { useEffect } from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton
} from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import authActions from '../Data/Store/Auth/actions';


const Auth = (props) => {

    const isAuth = useSelector(state =>state.auth.auth);
    console.log("Auth state: " + isAuth);
    console.log(props); 
    const dispatch = useDispatch();
    //const history = useHistory();

    // useEffect(() => {
    //     console.log("Auth.tsx useEffect");
    //     if(isAuth) {
    //         props.history.push("/home");
    //     }
    // }, [isAuth, props.history]);

    

    const authHandler = () => {
        if (!isAuth) {
            dispatch(authActions.authSuccessful());
            props.history.push("/home");
        } else {
            dispatch(authActions.authOff());
        }
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Auth Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                Let's Get Authed
                <IonButton onClick={authHandler}>
                    Toggle Auth
                </IonButton>
            </IonContent>
        </IonPage>
    )
};

export default Auth;