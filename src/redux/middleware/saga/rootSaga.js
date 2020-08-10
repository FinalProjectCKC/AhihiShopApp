import { all } from 'redux-saga/effects';

import { watchLogin } from './login/loginSagas'
import { watchDetailProduct, watchListProType, watchListProductByType } from './homeSaga/homeSagas'
import { watchRegister } from './login/regisSagas'
import { watchAddToCart, watchChangeQuan, watchCreateOrder, watchGetCart, watchRemoveFormCart } from './cart/cartSagas'
import { watchGetUserData, watchUpdateUser } from './profile/profileSagas'

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
    ]);
}