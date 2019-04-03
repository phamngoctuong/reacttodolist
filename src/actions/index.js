import * as types from './../constants/ActionTypes';
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}