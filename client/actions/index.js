import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, SIGN_OUT} from './types';

const ROOT_URL = 'http://localhost:4000';

export function signinUser({email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/signin`, {email, password}).then(response => {
            dispatch({
                type: AUTH_USER
            });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/profile');
        }).catch(error => {
            dispatch(authError("The Login info doesn't match"));
        });
    };
}

export function signupUser(formProps) {
    console.log('formProps:', formProps);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/signup`, formProps).then(response => {
            dispatch({
                type: AUTH_USER
            });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/profile');
        }).catch(error => {
            dispatch(authError('Please correct signup information'));
        });
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {type: SIGN_OUT}
}

export function authError(error) {
    return {type: AUTH_ERROR, payload: error};
}
