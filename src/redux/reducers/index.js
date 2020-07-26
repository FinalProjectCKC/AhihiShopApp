import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
const allReducers = combineReducers({
    
    loginReducers,
    
});

export default allReducers;