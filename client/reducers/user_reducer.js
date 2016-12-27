import { UPDATE_USER, FETCH_MESSAGE, FETCH_USERS, SINGLE_USER, CATEGORY_USERS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER:
        console.log('UPDATE_USER:', action.payload);
            return {
                ...state,
                user: actions.payload
            };
        case FETCH_MESSAGE:
            return {
                ...state,
                user: action.payload
            };
        case FETCH_USERS:
            console.log('fetch all users', action.payload);
            return {
                ...state,
                allUsers: action.payload
            };
        case SINGLE_USER:
            console.log('fetch all users', action.payload);
            return {
                ...state,
                userDetail: action.payload
            };
        case CATEGORY_USERS:
            console.log('fetch all users', action.payload);
            return {
                ...state,
                cateogryUsers: action.payload
            };
    }
    return state;
}
