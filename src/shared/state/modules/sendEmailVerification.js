import axios from 'axios';

export const sendEmailVerification = id => dispatch => axios
        .post('/api/sendVerificationEmail', {
            userId: id
        })
        .then(res => {

        }).catch(err => {

        });