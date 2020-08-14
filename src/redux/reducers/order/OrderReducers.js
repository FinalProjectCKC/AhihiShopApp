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
} from '../../actions/order/OrderActions';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getListOrderReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ORDER:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case GET_LIST_ORDER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case GET_LIST_ORDER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const getOrderDetailReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case GET_ORDER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case GET_ORDER_DETAILS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const changeStatusOrderReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS_ORDER:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case CHANGE_STATUS_ORDER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case CHANGE_STATUS_ORDER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
export { getListOrderReducers, getOrderDetailReducers, changeStatusOrderReducers }
