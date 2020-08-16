export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const CHANGE_PASS = 'CHANGE_PASS';
export const CHANGE_PASS_SUCCESS = 'CHANGE_PASS_SUCCESS';
export const CHANGE_PASS_ERROR = 'CHANGE_PASS_ERROR';


export const getUserDataAction = () => {
    return {
        type: GET_USER_DATA,
    }
}
export const updateUserAction = (input) => {
    return {
        type: UPDATE_USER,
        data: input
    }
}
export const changePassAction = (input) => {
    return {
        type: CHANGE_PASS,
        data: input
    }
}