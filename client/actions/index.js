import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGN_OUT, FETCH_MESSAGE, UPDATE_USER} from './types';

const ROOT_URL =   'http://localhost:4000';

export function signinUser({ email, password }) {
    console.log('action', email, password);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/profile');
            })
            .catch(error => {
                dispatch(authError('Bad Login Info'));
            });
    }
}
export function signupUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/profile');
            })
            .catch(error => {
                dispatch(authError('Bad signup Info'));
            });
    }
}
export function updateUser(userData) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/update`, userData)
            .then(response => {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data
                })
                browserHistory.push('/profile');
            })
            .catch(error => {
                dispatch(authError('Bad update Info'));
            });
    }
}
export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            });
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
