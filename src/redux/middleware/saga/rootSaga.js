import { all } from 'redux-saga/effects';

import { watchLogin } from './login/loginSagas'
import { watchDetailProduct, watchListProType, watchListProductByType, watchSearch } from './homeSaga/homeSagas'
import { watchRegister } from './login/regisSagas'
import { watchAddToCart, watchChangeQuan, watchCreateOrder, watchGetCart, watchRemoveFormCart } from './cart/cartSagas'
import { watchGetUserData, watchUpdateUser ,watchChangePass } from './profile/profileSagas'
import { watchChangeStatus, watchGetListOrder, watchGetOrderDetails } from './order/orderSagas'

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),

        watchDetailProduct(),
        watchListProType(),
        watchListProductByType(),

        watchAddToCart(),
        watchChangeQuan(),
        watchCreateOrder(),
        watchGetCart(),
        watchRemoveFormCart(),

        watchGetUserData(),
        watchUpdateUser(),
        watchChangePass(),
        watchSearch(),

        watchChangeStatus(),
        watchGetListOrder(),
        watchGetOrderDetails(),
    ]);
}