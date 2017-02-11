import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';


const success = createAction('LOGOUT');

export const logout = () => (dispatch) => {
    axios.get('/api/logout')
        .then(() => {
            dispatch(success());
            dispatch(push('/login'));
        })
        .catch(error => {
            console.log('login failure', error);
        })
};

export default {
    ['LOGOUT']: (state, payload) => ({ ...state, user: null, auth: false })
}