import { UPDATE_USER, FETCH_MESSAGE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                userData: actions.payload
            };
        case FETCH_MESSAGE:
            console.log('FETCH_MESSAGE:', action.payload);
            return {
                ...state,
                user: action.payload
            };
    }
    return state;
}
