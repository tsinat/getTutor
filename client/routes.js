import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Profile from './components/feature';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Signout from './components/auth/signout';

export default (
    <Route path='/' component={App}>
        <IndexRoute  component={HomePage}/>
        <Route path='categories' component={Signin} />
        <Route path='profile' component={RequireAuth(Profile)} />
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='signout' component={Signout} />
    </Route>
)
