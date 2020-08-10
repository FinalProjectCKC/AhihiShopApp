
import {
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_ERROR,

  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART,

  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  CREATE_ORDER,

  CHANGE_QUAN_SUCCESS,
  CHANGE_QUAN_ERROR,
  CHANGE_QUAN,

  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_CART
} from '../../actions/cart/CartActions';
import { userData } from '../../../config/settings';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case GET_CART_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case GET_CART_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const removeFormCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case REMOVE_FROM_CART_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case REMOVE_FROM_CART_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const createOrderReducers = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case CREATE_ORDER:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case CREATE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case CREATE_ORDER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const addToCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case ADD_TO_CART_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const changeQuanReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUAN:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case CHANGE_QUAN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case CHANGE_QUAN_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
export { getCartReducers, removeFormCartReducers, createOrderReducers, addToCartReducers, changeQuanReducers };
