export const GET_CART = 'GET_CART';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_ERROR = 'GET_CART_ERROR';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR';

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR';

export const CHANGE_QUAN = 'CHANGE_QUAN';
export const CHANGE_QUAN_SUCCESS = 'CHANGE_QUAN_SUCCESS';
export const CHANGE_QUAN_ERROR = 'CHANGE_QUAN_ERROR';

export const getcartAction = () => {
    return {
        type: GET_CART,
    }
}
export const createOrderAction = (input) => {
    return {
        type: CREATE_ORDER,
        data: input
    }
}
export const removeFormCartAction = (input) => {
    return {
        type: REMOVE_FROM_CART,
        data: input
    }
}
export const changeQuanAction = (input) => {
    return {
        type: CHANGE_QUAN,
        data: input
    }
}
export const addToCartAction = (input) => {
    return {
        type: ADD_TO_CART,
        data: input
    }
}