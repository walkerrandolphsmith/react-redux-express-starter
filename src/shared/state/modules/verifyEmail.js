import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const EMAIL_VERIFIED = 'EMAIL_VERIFIED';

const success = createAction(EMAIL_VERIFIED);

export const verifyEmail = token => dispatch => axios
    .post('/api/verifyEmail', {
        token
    })
    .then(res => {
        dispatch(success());
        dispatch(push('/profile'));
    }).catch(err => {

    });

export default {
    [EMAIL_VERIFIED]: (state, payload) => ({
        ...state,
        user: {
            ...state.user,
            verified: true
        },
        auth: true
    })
}