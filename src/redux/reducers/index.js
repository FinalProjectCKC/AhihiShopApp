import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
import { getDetailsProductReducers, getListProductByTypeReducers, getListTypeReducers } from './home/homeReducer';
import registerReducers from './login/regisReducers';

const allReducers = combineReducers({

    loginReducers,
    registerReducers,
    getListTypeReducers,
    getListProductByTypeReducers,
    getDetailsProductReducers
});

export default allReducers;