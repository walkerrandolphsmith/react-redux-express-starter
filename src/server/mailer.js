import Mailgun from 'mailgun-js';
import * as env from './env';
const { host, port, mailgunApiKey, mailgunDomain, nodeEnv } = env;

const mailgun = new Mailgun({
    apiKey: mailgunApiKey,
    domain: mailgunDomain
});

export const sendEmail = (data) => new Promise((resolve, reject) => {
    if(!data.from) {
        reject(new Error('Email address required'));
    }
    if(!data.to) {
        reject(new Error('Email address required'));
    }
    if(!data.subject) {
        reject(new Error('Must contain a subject'));
    }
    if(!data.html) {
        reject(new Error('Must contain a message'));
    }
    if(nodeEnv === 'test') {
        reject(null);
    }

    mailgun.messages().send(data, (err, body) => {
        if(err) reject(err);
        resolve(body);
    });
});

export function sendVerificationEmail(email, token) {
    const data = {
        from: 'starter@gmail.com',
        to: email,
        subject: 'Starter App',
        html: `
            Verify your account with the following link:
            http://${host}:${port}/verify/${token}
        `
    };
    return sendEmail(data);
}

export function sendResetPasswordEmail(email, token) {
    const data = {
        from: 'starter@gmail.com',
        to: email,
        subject: 'Reset password for Startup Account',
        html: `
            Reset password with the following link:
            http://${host}:${port}/reset/${token}
            This link will not expire.
        `
    };
    return sendEmail(data);
}