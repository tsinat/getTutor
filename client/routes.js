import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

export default (
    <Route path='/' component={App}>
        <IndexRoute  component={HomePage}/>
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
    </Route>
)
