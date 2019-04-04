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
export const saveForm = (task) => {
	return {
		type: types.SAVE_FORM,
		task
	}
}
export const editForm = (task) => {
	return {
		type: types.EDIT_FORM,
		task
	}
}
export const openForm = () => {
	return {
		type: types.OPEN_FORM,
	}
}
export const updateStatus = (id) => {
	return {
		type: types.UPDATE_STATUS,
		id
	}
}
export const deleteForm = (id) => {
	return {
		type: types.DELETE_FORM,
		id
	}
}