import axios from 'axios';
import { FETCH_USERS } from './types';

const ROOT_URL = 'http://localhost:4000';

export function fetchAllUsers() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/api/getall`)
            .then(response => {
                dispatch({
                    type: FETCH_USERS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log('error white getting all users:', error);
            })
    }
}
