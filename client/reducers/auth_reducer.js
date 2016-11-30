import { AUTH_USER, SIGN_OUT, AUTH_ERROR } from '../actions/types';

export default function( state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            console.log('auth_user:',state);
            return { ...state, error: '', authenticated: true };
        case SIGN_OUT:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
    }
    return state;
}
