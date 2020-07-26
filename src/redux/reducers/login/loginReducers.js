import {
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGOUT,
} from '../../actions/login/LoginActions';
import { userData } from '../../../config/settings';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });

    case POST_LOGIN_SUCCESS:
      userData.token = action.response.data.token
      userData.username = action.response.data.username
      userData.email = action.response.data.email
      userData.address = action.response.data.address
      userData.accRole = action.response.data.accRole
      if (action.response.data.accRole == "admin") {
        userData.admin = true
      } else {
        userData.admin = false
      }

      return Object.assign({}, state, {
        loading: false,
        data: action.response.data,
        error: null
      });

    case POST_LOGIN_ERROR:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.error
      });
    default:
      return state;
  }
};
export default loginReducers;
