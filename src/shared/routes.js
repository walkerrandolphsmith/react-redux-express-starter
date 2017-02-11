import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import { App } from './components/App';
import { NotFound } from './components/NotFound';
import { Profile } from './components/Profile';
import { Login, SignUp, RequestPasswordReset, ResetPassword, VerifyEmail } from './components/Auth';

const routes = (
    <Route history={browserHistory} path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/verify/:id" component={VerifyEmail} />
        <Route path="/forgot-password" component={RequestPasswordReset} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/profile" component={Profile} />
        <Route path={'*'} component={NotFound} status={404} />
    </Route>
);

export default routes;