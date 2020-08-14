export const GET_LIST_ORDER = 'GET_LIST_ORDER';
export const GET_LIST_ORDER_SUCCESS = 'GET_LIST_ORDER_SUCCESS';
export const GET_LIST_ORDER_ERROR = 'GET_LIST_ORDER_ERROR';

export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_ERROR = 'GET_ORDER_DETAILS_ERROR';

export const CHANGE_STATUS_ORDER = 'CHANGE_STATUS_ORDER';
export const CHANGE_STATUS_ORDER_SUCCESS = 'CHANGE_STATUS_ORDER_SUCCESS';
export const CHANGE_STATUS_ORDER_ERROR = 'CHANGE_STATUS_ORDER_ERROR';

export const getListOrderAction = (input) => {
    return {
        type: GET_LIST_ORDER,
        data: input
    }
}
export const getOrderDetailAction = (input) => {
    return {
        type: GET_ORDER_DETAILS,
        data: input
    }
}
export const changeStatusOrderAction = (input) => {
    return {
        type: CHANGE_STATUS_ORDER,
        data: input
    }
}