import * as actionTypes from '../actions';

const initialState = {
    auth: false
};

const authSuccess = (state, action) => {

    return {
        ...state,
        auth: true
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.authSuccessful: return authSuccess(state, action);
        default: return state;
    }
};

export default reducer;