 import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_MESSAGE, UPDATE_USER, UPLOAD_PICTURE } from './types';

export function updateUser(userData) {
    return function(dispatch) {
        axios.post(`/api/update`, userData).then(response => {
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
        axios.get(`/api/profile`, {
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
        axios.put(`/api/profile/image/${id}`, data, {
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
