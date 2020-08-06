
import {
  GET_LIST_PRODUCT_TYPE_SUCCESS,
  GET_LIST_PRODUCT_TYPE_ERROR,
  GET_LIST_PRODUCT_TYPE,

  GET_LIST_PRODUCT_BY_TYPE_SUCCESS,
  GET_LIST_PRODUCT_BY_TYPE_ERROR,
  GET_LIST_PRODUCT_BY_TYPE,

  GET_DETAILS_PRODUCT_SUCCESS,
  GET_DETAILS_PRODUCT_ERROR,
  GET_DETAILS_PRODUCT
} from '../../actions/home/HomeActions';
import { userData } from '../../../config/settings';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getListTypeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_TYPE:
      return Object.assign({}, state, {
        loading: true,
        data: [],
        error: null
      });

    case GET_LIST_PRODUCT_TYPE_SUCCESS:
      let data = []
      for (let protype of action.response.data) {

        let newProType = {
          imgUrl: "",
          imgUri: "http://127.0.0.1:8080/" + protype.typeImg,
          iconTitle: protype.typeName,
          itemParams: protype._id,
          screenNavigate: "ListProductContainer",
          description: protype.description,
        }
        data.push(newProType)
      }
      return Object.assign({}, state, {
        loading: false,
        data: data,
        error: null
      });

    case GET_LIST_PRODUCT_TYPE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: [],
        error: action.error
      });
    default:
      return state;
  }
};
const getListProductByTypeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_BY_TYPE:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case GET_LIST_PRODUCT_BY_TYPE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case GET_LIST_PRODUCT_BY_TYPE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
const getDetailsProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_PRODUCT:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case GET_DETAILS_PRODUCT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case GET_DETAILS_PRODUCT_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
export { getListTypeReducers, getListProductByTypeReducers, getDetailsProductReducers };
