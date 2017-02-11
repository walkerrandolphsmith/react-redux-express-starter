import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION = 'SIGNUP_SUCCESS';

const success = createAction(ACTION, (user) => ({ user }));

export const signup = (credentials) => (dispatch) => {
    axios.post('/api/signUp', credentials)
        .then(response => {
            dispatch(success(response.data));
            dispatch(push('/profile'));
        })
        .catch(error => {
            console.log('login failure', error);
        })
};

export default {
    [ACTION]: (state, payload) => ({ ...state, user: payload.user, auth: true })
}