import { UPDATE_USER } from '../actions';

export default function(state = {}, actions) {
    switch (state.type) {
        case UPDATE_USER:
            return {
                ...state,
                userData: actions.payload
            }
    }
    return state;
}
