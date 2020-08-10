import {
  GET_CART,
  GET_CART_ERROR,
  GET_CART_SUCCESS,

  CHANGE_QUAN,
  CHANGE_QUAN_ERROR,
  CHANGE_QUAN_SUCCESS,

  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_SUCCESS,

  CREATE_ORDER,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_SUCCESS,

  REMOVE_FROM_CART,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_SUCCESS
} from '../../../actions/cart/CartActions';

import { call, takeEvery, put } from 'redux-saga/effects';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import {
  addToCartApi,
  removeFormCartApi,
  editQuanApi,
  getCartApi,
  newOrderApi
} from '../../api/cart/CartApi'

const errorRes = "Không lấy được dữ liệu"

function* getCartFlow() {
  try {
    const response = yield getCartApi()
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: GET_CART_SUCCESS, response })
      } else {
        yield put({ type: GET_CART_ERROR, error: response.message })
      }
    } else {
      yield put({ type: GET_CART_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: GET_CART_ERROR, error: error })
  }
}
function* addToCartFlow(action) {
  try {
    const response = yield addToCartApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: ADD_TO_CART_SUCCESS, response })
      } else {
        yield put({ type: ADD_TO_CART_ERROR, error: response.message })
      }
    } else {
      yield put({ type: ADD_TO_CART_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: ADD_TO_CART_ERROR, error: error })
  }
}
function* removeFormCartFlow(action) {
  try {
    const response = yield removeFormCartApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: REMOVE_FROM_CART_SUCCESS, response })
      } else {
        yield put({ type: REMOVE_FROM_CART_ERROR, error: response.message })
      }
    } else {
      yield put({ type: REMOVE_FROM_CART_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: REMOVE_FROM_CART_ERROR, error: error })
  }
}
function* changeQuanFlow(action) {
  try {
    const response = yield editQuanApi(action.data)
  console.log("qưerqwerw ",response)

    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: CHANGE_QUAN_SUCCESS, response })
      } else {
        yield put({ type: CHANGE_QUAN_ERROR, error: response.message })
      }
    } else {
      yield put({ type: CHANGE_QUAN_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: CHANGE_QUAN_ERROR, error: error })
  }
}
function* createOrderFlow(action) {
  try {
    const response = yield newOrderApi(action.data)
    if (response != undefined && !objectIsNull(response)) {
      if (response.status == 1) {
        yield put({ type: CREATE_ORDER_SUCCESS, response })
      } else {
        yield put({ type: CREATE_ORDER_ERROR, error: response.message })
      }
    } else {
      yield put({ type: CREATE_ORDER_ERROR, error: errorRes })
    }
  } catch (error) {
    yield put({ type: CREATE_ORDER_ERROR, error: error })
  }
}
export function* watchGetCart() {
  yield takeEvery(GET_CART, getCartFlow);
}
export function* watchAddToCart() {
  yield takeEvery(ADD_TO_CART, addToCartFlow);
}
export function* watchRemoveFormCart() {
  yield takeEvery(REMOVE_FROM_CART, removeFormCartFlow);
}
export function* watchChangeQuan() {
  yield takeEvery(CHANGE_QUAN, changeQuanFlow);
}
export function* watchCreateOrder() {
  yield takeEvery(CREATE_ORDER, createOrderFlow);
}