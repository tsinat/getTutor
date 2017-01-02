import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import HelpPage from './components/help/helpPage';
import HomePage from './components/home/HomePage';
import Profile from './components/profile/ProfilePage';
import Categories from './components/category/categoriesPage';
import CategoryDetail from './components/categoryDetail/categoryDetailPage';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Signout from './components/auth/signout';
import SingleUserDetail from './components/userDetail/userDetailPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute  component={HomePage}/>
        <Route path='/userDetail/:id' component={SingleUserDetail} />
        <Route path='categories'>
            <IndexRoute  component={Categories}/>
            <Route path="/categories/:id" component={CategoryDetail} />
        </Route>
        <Route path='profile' component={RequireAuth(Profile)} />
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='signout' component={Signout} />
        <Route path='help' component={HelpPage} />
    </Route> 
);
