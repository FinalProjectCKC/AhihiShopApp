import { POST_REGIS, POST_REGIS_ERROR, POST_REGIS_SUCCESS } from '../../../actions/login/RegisActions';


import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import { registerApi } from '../../api/login/RegisterApi'

const errorRes = "Không lấy được dữ liệu"

function* registerFlow(action) {
  try {
    const response = yield registerApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: POST_REGIS_SUCCESS, response })
      } else {
        yield put({ type: POST_REGIS_ERROR, error: response.message })
      }
    } else {
      yield put({ type: POST_REGIS_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: POST_REGIS_ERROR, error: error })
  }
}
export function* watchRegister() {
  yield takeEvery(POST_REGIS, registerFlow);
}
