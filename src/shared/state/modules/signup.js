import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION_TYPE = 'SIGNUP_SUCCESS';

const actionCreator = createAction(ACTION_TYPE, (user) => ({ user }));

export const signup = (credentials) => (dispatch) => {
    axios.post('/api/signUp', credentials)
        .then(response => {
            dispatch(actionCreator(response.data));
            dispatch(push('/profile'));
        })
        .catch(error => {
            console.log('login failure', error);
        })
};

const reducer = (state, payload) => ({ ...state, user: payload.user, auth: true });

export default {
    [ACTION_TYPE]: reducer
}