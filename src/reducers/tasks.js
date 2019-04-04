import * as types from './../constants/ActionTypes';
function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
};
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state=  initialState, action) => {
	switch (action.type) {
		case types.LIST_ALL :
			return state;
		case types.SAVE_FORM :
			var task = {
				id: action.task.id,
				name: action.task.name,
				status : (action.task.status === 'true' || action.task.status === true) ? true : false
			};
			if(!task.id) {
				task.id = randomString(12);
				state.push(task);
			};
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
			break;
		default:
			return state;
			break;
	}
}
export default myReducer;