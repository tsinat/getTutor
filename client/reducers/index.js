import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    currentUser: userReducer
});

export default rootReducer;
