import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION_TYPE = 'EMAIL_VERIFIED';

const actionCreator = createAction(ACTION_TYPE);

export const verifyEmail = token => dispatch => axios
    .post('/api/verifyEmail', {
        token
    })
    .then(() => {
        dispatch(actionCreator());
        dispatch(push('/profile'));
    }).catch(err => {

    });

const reducer = (state, payload) => ({
    ...state,
    user: { ...state.user, verified: true },
    auth: true
});

export default {
    [ACTION_TYPE]: reducer
}