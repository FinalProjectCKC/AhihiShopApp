import { all } from 'redux-saga/effects';

import { watchLogin } from './login/loginSagas';
import { watchRegister } from './login/regisSagas';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
    ]);
}