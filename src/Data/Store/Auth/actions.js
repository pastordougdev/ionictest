import * as actionTypes from '../actions';

const authSuccessful = () => {
    return {
        type: actionTypes.authSuccessful
    }
};

const authOff = () => {
    return {
        type: actionTypes.authOff
    }
}

export default {
    authSuccessful, authOff
}