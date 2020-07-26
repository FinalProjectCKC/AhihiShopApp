import { all } from 'redux-saga/effects';

import { watchLogin } from './login/loginSagas';


export default function* rootSaga() {
    yield all([
        watchLogin(),
    ]);
}