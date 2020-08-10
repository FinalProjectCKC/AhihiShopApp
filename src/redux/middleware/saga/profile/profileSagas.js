import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_SUCCESS,

  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS
} from '../../../actions/profile/ProfileActions';

import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import {
  getUserDataApi,
  updateUserApi
} from '../../api/profile/ProfileApi'

const errorRes = "Không lấy được dữ liệu"

function* getUserDataFlow() {
  try {
    const response = yield getUserDataApi()
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_USER_DATA_SUCCESS, response })
      } else {
        yield put({ type: GET_USER_DATA_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_USER_DATA_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_USER_DATA_ERROR, error: error })
  }
}
function* updateUserFlow(action) {
  try {
    const response = yield updateUserApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: CHANGE_QUAN_SUCCESS, response })
      } else {
        yield put({ type: UPDATE_USER_ERROR, error: response.message })
      }
    } else {
      yield put({ type: UPDATE_USER_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: UPDATE_USER_ERROR, error: error })
  }
}
export function* watchGetUserData() {
  yield takeEvery(GET_USER_DATA, getUserDataFlow);
}
export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUserFlow);
}