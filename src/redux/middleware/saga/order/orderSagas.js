import {
  GET_LIST_ORDER,
  GET_LIST_ORDER_ERROR,
  GET_LIST_ORDER_SUCCESS,

  GET_ORDER_DETAILS,
  GET_ORDER_DETAILS_ERROR,
  GET_ORDER_DETAILS_SUCCESS,

  CHANGE_STATUS_ORDER,
  CHANGE_STATUS_ORDER_ERROR,
  CHANGE_STATUS_ORDER_SUCCESS
} from '../../../actions/order/OrderActions';

import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import {
  getListOrderApi,
  getOrderDetailsApi,
  changeStatusOrderApi
} from '../../api/order/OrderApi'

const errorRes = "Không lấy được dữ liệu"

function* getListOrderFlow(action) {
  try {
    const response = yield getListOrderApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_LIST_ORDER_SUCCESS, response })
      } else {
        yield put({ type: GET_LIST_ORDER_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_LIST_ORDER_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_LIST_ORDER_ERROR, error: error })
  }
}
function* getOrderDetailsFlow(action) {
  try {
    const response = yield getOrderDetailsApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_ORDER_DETAILS_SUCCESS, response })
      } else {
        yield put({ type: GET_ORDER_DETAILS_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_ORDER_DETAILS_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_ORDER_DETAILS_ERROR, error: error })
  }
}
function* changeStatusFlow(action) {
  try {
    const response = yield changeStatusOrderApi(action.data)
    console.log("xxx ",response)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: CHANGE_STATUS_ORDER_SUCCESS, response })
      } else {
        yield put({ type: CHANGE_STATUS_ORDER_ERROR, error: response.message })
      }
    } else {
      yield put({ type: CHANGE_STATUS_ORDER_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: CHANGE_STATUS_ORDER_ERROR, error: error })
  }
}
export function* watchGetListOrder() {
  yield takeEvery(GET_LIST_ORDER, getListOrderFlow);
}
export function* watchGetOrderDetails() {
  yield takeEvery(GET_ORDER_DETAILS, getOrderDetailsFlow);
}
export function* watchChangeStatus() {
  yield takeEvery(CHANGE_STATUS_ORDER, changeStatusFlow);
}