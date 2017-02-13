import login from './login';
import verifyEmail from './verifyEmail';
import signup from './signup';
import logout from './logout';


const reducers = [
    login,
    verifyEmail,
    signup,
    logout
];

const handlers = reducers.reduce((output, handler) => Object.assign(output, handler), {});

export const DEFAULT_STATE = {

};

export default (state = DEFAULT_STATE, action = {}) => {
    const { type, payload } = action;
    if(state !== DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    return handlers[type] ? handlers[type](state, payload) : state;
}