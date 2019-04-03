import * as types from './../constants/ActionTypes';
var s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}
var initialState = {
    id: '',
    name: '',
    status: false
};
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    switch (action.type) {
        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : (action.task.status === 'true' || action.task.status === true) ? true : false
            };
            if(!task.id){
                task.id = randomID();
                state.push(task);
            }else{
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        break;
        default:
            return state;
            break;
    }
}
export default myReducer;