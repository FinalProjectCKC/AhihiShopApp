
import {
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  GET_USER_DATA,

  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER
} from '../../actions/profile/ProfileActions';
import { userData } from '../../../config/settings';

const initialState = {
  loading: false,
  error: null,
  data: null,
  userData: null,
};

const getUserDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return Object.assign({}, state, {
        loading: true,
        userData: null,
        error: null
      });

    case GET_USER_DATA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userData: action.response.data,
        error: null
      });

    case GET_USER_DATA_ERROR:
      return Object.assign({}, state, {
        loading: false,
        userData: null,
        error: action.error
      });
    default:
      return state;
  }
};
const updateUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case UPDATE_USER_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
export { getUserDataReducers, updateUserReducers };
