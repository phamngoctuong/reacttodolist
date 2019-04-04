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
var findIndex = (tasks,id) => {
	var result = -1;
	tasks.forEach((task, index) => {
	  	if(task.id === id) {
	  		return result = index;
	  	}
	});
	return result;
};
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state=  initialState, action) => {
	var index = -1;
	var id = '';
	switch (action.type) {
		case types.LIST_ALL :
			return state;
		case types.SAVE_FORM :
			var index = -1;
			var task = {
				id: action.task.id,
				name: action.task.name,
				status : (action.task.status === 'true' || action.task.status === true) ? true : false
			};
			if(!task.id) {
				task.id = randomString(12);
				state.push(task);
			}else {
				index = findIndex(state,task.id);
				state[index] = task;
			};
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
			break;
		case types.UPDATE_STATUS:
			id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status : !state[index].status
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