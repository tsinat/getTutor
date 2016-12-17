import { UPDATE_USER, FETCH_MESSAGE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER:
        console.log('UPDATE_USER:', action.payload);
            return {
                ...state,
                userData: actions.payload
            };
        case FETCH_MESSAGE:
            return {
                ...state,
                user: action.payload
            };
    }
    return state;
}
