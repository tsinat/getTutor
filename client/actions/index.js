import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGN_OUT } from './types';

const ROOT_URL =   'http://localhost:3000';

export function signinUser({ email, password }) {
    console.log('action', email, password);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/feature');
            })
            .catch(error => {
                dispatch(authError('Bad Login Info'));
            });
    }
}
export function signupUser({ email, password, passwordConfirm }) {
    console.log('action', email, password, passwordConfirm);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/feature');
            })
            .catch(error => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: SIGN_OUT
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}
