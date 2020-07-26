import { POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_SUCCESS } from '../../../actions/login/LoginActions';


import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import { loginApi } from '../../api/login/loginApi'

const errorRes = "Không lấy được dữ liệu"

function* signInFlow(action) {
  try {
    const response = yield loginApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: POST_LOGIN_SUCCESS, response })
      } else {
        yield put({ type: POST_LOGIN_ERROR, error: response.message })
      }
    } else {
      yield put({ type: POST_LOGIN_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: POST_LOGIN_ERROR, error: error })
  }
}
export function* watchLogin() {
  yield takeEvery(POST_LOGIN, signInFlow);
}
