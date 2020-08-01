export const GET_LIST_PRODUCT_TYPE = 'GET_LIST_PRODUCT_TYPE';
export const GET_LIST_PRODUCT_TYPE_SUCCESS = 'GET_LIST_PRODUCT_TYPE_SUCCESS';
export const GET_LIST_PRODUCT_TYPE_ERROR = 'GET_LIST_PRODUCT_TYPE_ERROR';

export const GET_LIST_PRODUCT_BY_TYPE = 'GET_LIST_PRODUCT_BY_TYPE';
export const GET_LIST_PRODUCT_BY_TYPE_SUCCESS = 'GET_LIST_PRODUCT_BY_TYPE_SUCCESS';
export const GET_LIST_PRODUCT_BY_TYPE_ERROR = 'GET_LIST_PRODUCT_BY_TYPE_ERROR';

export const GET_DETAILS_PRODUCT = 'GET_DETAILS_PRODUCT';
export const GET_DETAILS_PRODUCT_SUCCESS = 'GET_DETAILS_PRODUCT_SUCCESS';
export const GET_DETAILS_PRODUCT_ERROR = 'GET_DETAILS_PRODUCT_ERROR';

export const POST_LOGOUT = 'POST_LOGOUT';

export const getListProTypeAction = (input) => {
    return {
        type: GET_LIST_PRODUCT_TYPE,
        data: input
    }
}
export const getListProductByTypeAction = (input) => {
    return {
        type: GET_LIST_PRODUCT_BY_TYPE,
        data: input
    }
}
export const getDetailProductAction = (input) => {
    return {
        type: GET_DETAILS_PRODUCT,
        data: input
    }
}
