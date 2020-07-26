export const POST_REGIS = 'POST_REGIS';
export const POST_REGIS_SUCCESS = 'POST_REGIS_SUCCESS';
export const POST_REGIS_ERROR = 'POST_REGIS_ERROR';

export const regisAction = (input) => {
    return {
        type: POST_REGIS,
        data: input
    }
}