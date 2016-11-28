import { UPDATE_USER, FETCH_MESSAGE } from '../actions/types';

export default function(state = {}, actions) {
    switch (state.type) {
        case UPDATE_USER:
            return {
                ...state,
                userData: actions.payload
            };
        case FETCH_MESSAGE:
            console.log('user in reducer:', action.payload);
            return {
                ...state,
                user: action.payload
            };
    }
    return state;
}
