import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION_TYPE = 'LOGIN';

const actionCreator = createAction(ACTION_TYPE, (user) => ({ user }));

export const login = (credentials) => (dispatch) => {
    axios.post('/api/login', credentials)
        .then(response => {
            const user = response.data;
            dispatch(actionCreator(user));
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