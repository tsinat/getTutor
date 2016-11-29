import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_MESSAGE, UPDATE_USER } from './types';

const ROOT_URL =   'http://localhost:4000';

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
                console.log("error while updating user:", error);
            });
    }
}
export function fetchUser() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/profile`, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            console.log(response.data);
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data
            });
        })
        .catch(error => {
            console.log('error while fetching user:', error);
        })
    }
}