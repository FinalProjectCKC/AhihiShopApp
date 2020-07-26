import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
import registerReducers from './login/regisReducers';

const allReducers = combineReducers({
    
    loginReducers,
    registerReducers,
});

export default allReducers;