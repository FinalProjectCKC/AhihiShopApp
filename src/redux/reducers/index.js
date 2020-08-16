import { combineReducers } from 'redux';
import loginReducers from './login/loginReducers';
import { getDetailsProductReducers, getListProductByTypeReducers, getListTypeReducers } from './home/homeReducer';
import registerReducers from './login/regisReducers';
import { getCartReducers, changeQuanReducers, removeFormCartReducers, addToCartReducers, createOrderReducers } from './cart/cartReducers';
import { getUserDataReducers, updateUserReducers, changePassReducers } from './profile/porfileReducers';
import { getListOrderReducers, getOrderDetailReducers, changeStatusOrderReducers } from './order/OrderReducers';

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

    getUserDataReducers,
    updateUserReducers,
    changePassReducers,

    getListOrderReducers,
    getOrderDetailReducers,
    changeStatusOrderReducers,
});

export default allReducers;