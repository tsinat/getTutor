 import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_MESSAGE, UPDATE_USER, UPLOAD_PICTURE } from './types';

const ROOT_URL = 'http://localhost:3000';

export function updateUser(userData) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/update`, userData).then(response => {
            console.log('updated Data from server:', response.data);
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            });
            browserHistory.push('/profile');
        }).catch(error => {
            console.log("error while updating user:", error);
        });
    };
}

export function fetchUser() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/api/profile`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data
            });
        }).catch(error => {
            console.log('error while fetching user:', error);
        });
    };
}

export function uploadPicture(data, id) {
    return function(dispatch) {
        axios.put(`${ROOT_URL}/api/profile/image/${id}`, data, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(response => {
            console.log('response after uploading picture', response.data);
            dispatch({
                type: UPLOAD_PICTURE,
                payload: response.data
            });
        }).catch(error => {
            console.log('error while uploading picture:', error);
        });
    };
}
