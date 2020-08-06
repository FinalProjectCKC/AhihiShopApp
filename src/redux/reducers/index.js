import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
import { getDetailsProductReducers, getListProductByTypeReducers, getListTypeReducers } from './home/homeReducer';
import registerReducers from './login/regisReducers';
import {getCartReducers, changeQuanReducers, removeFormCartReducers, addToCartReducers, createOrderReducers} from './cart/cartReducers';

const allReducers = combineReducers({

    loginReducers,
    registerReducers,
    
    getListTypeReducers,
    getListProductByTypeReducers,
    getDetailsProductReducers,

    getCartReducers,
    changeQuanReducers,
    removeFormCartReducers,
    addToCartReducers,
    createOrderReducers,
});

export default allReducers;