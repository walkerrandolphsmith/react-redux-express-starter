import axios from 'axios';

export const resetPassword = ({ token, password, confirmPassword }) => dispatch => {
    axios.post('/api/resetPassword', {
        token: token,
        password: password,
        confirmPassword: confirmPassword
    }).then(res => {
    }).catch(err => {
    });
};
