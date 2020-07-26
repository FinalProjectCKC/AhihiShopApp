import {
    POST_REGIS,
    POST_REGIS_SUCCESS,
    POST_REGIS_ERROR,
} from '../../actions/login/RegisActions';

const initialState = {
    loading: false,
    error: null,
    data: null,
};

const registerReducers = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGIS:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: null
            });
        case POST_REGIS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: null
            });

        case POST_REGIS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: action.error
            });
        default:
            return state;
    }
};
export default registerReducers;
