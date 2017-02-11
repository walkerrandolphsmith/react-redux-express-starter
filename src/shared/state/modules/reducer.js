import login from './login';
import verifyEmail from './verifyEmail';
import signup from './signup';
import logout from './logout';

const handlers = [
    login,
    verifyEmail,
    signup,
    logout
].reduce((output, handler) => Object.assign(output, handler), {});

export const DEFAULT_STATE = {
    packageNumber: '0.0.0.0000'
};

export default (state = DEFAULT_STATE, action = {}) => {
    const { type, payload } = action;
    if(state !== DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    return handlers[type] ? handlers[type](state, payload) : state;
}