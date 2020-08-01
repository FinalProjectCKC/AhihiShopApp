import {
  GET_DETAILS_PRODUCT,
  GET_DETAILS_PRODUCT_ERROR,
  GET_DETAILS_PRODUCT_SUCCESS,

  GET_LIST_PRODUCT_BY_TYPE,
  GET_LIST_PRODUCT_BY_TYPE_ERROR,
  GET_LIST_PRODUCT_BY_TYPE_SUCCESS,

  GET_LIST_PRODUCT_TYPE,
  GET_LIST_PRODUCT_TYPE_ERROR,
  GET_LIST_PRODUCT_TYPE_SUCCESS
} from '../../../actions/home/HomeActions';

import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import {
  detailProductApi,
  listProTypeApi, listProductByTypeApi
} from '../../api/home/HomeApi'

const errorRes = "Không lấy được dữ liệu"

function* listProTypeFlow(action) {
  try {
    const response = yield listProTypeApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_LIST_PRODUCT_TYPE_SUCCESS, response })
      } else {
        yield put({ type: GET_LIST_PRODUCT_TYPE_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_LIST_PRODUCT_TYPE_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_LIST_PRODUCT_TYPE_ERROR, error: error })
  }
}
function* detailProductFlow(action) {
  try {
    const response = yield detailProductApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_DETAILS_PRODUCT_SUCCESS, response })
      } else {
        yield put({ type: GET_DETAILS_PRODUCT_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_DETAILS_PRODUCT_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_DETAILS_PRODUCT_ERROR, error: error })
  }
}
function* listProductByTypeFlow(action) {
  try {
    const response = yield listProductByTypeApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_LIST_PRODUCT_BY_TYPE_SUCCESS, response })
      } else {
        yield put({ type: GET_LIST_PRODUCT_BY_TYPE_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_LIST_PRODUCT_BY_TYPE_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_LIST_PRODUCT_BY_TYPE_ERROR, error: error })
  }
}
export function* watchListProType() {
  yield takeEvery(GET_LIST_PRODUCT_TYPE, listProTypeFlow);
}
export function* watchListProductByType() {
  yield takeEvery(GET_LIST_PRODUCT_BY_TYPE, listProductByTypeFlow);
}
export function* watchDetailProduct() {
  yield takeEvery(GET_DETAILS_PRODUCT, detailProductFlow);
}
