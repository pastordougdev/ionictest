import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';




const ProtectedRoute = (props) => {

    const isAuth = useSelector(state => state.auth.auth);
    const Component = props.component
    return (
        <Route path={props.path} exact={props.exact} render={() => isAuth ? <Component /> : <Redirect to="/auth" />} />
    );
};

export default ProtectedRoute;