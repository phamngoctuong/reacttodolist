import * as types from './../constants/ActionTypes';
var initialState = false;
var myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.isDisplayForm :
			return state;
			break;
		case types.TOGGLE_FORM :
			return !state;
		break;
		case types.CLOSE_FORM :
			return false;
		break;
		case types.OPEN_FORM :
			return true;
		default:
			return state;
			break;
	}
}
export default myReducer;