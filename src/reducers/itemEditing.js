import * as types from './../constants/ActionTypes';
var initialState = {
	id:'',
	name:'',
	status: false
};
var myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.EDIT_FORM:
			return action.task;
			break;
		default:
			return state;
			break;
	}
};
export default myReducer;