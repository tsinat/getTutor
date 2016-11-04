
import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL =   'http://localhost:3000';

export function signinUser({ email, password }) {
    console.log('yes');
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({type: AUTH_USER})
                browserHistory.push('/feature');
            })
            .catch(error => {
                
            });
    }
}
