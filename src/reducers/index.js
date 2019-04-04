import {combineReducers} from 'redux';
import isDisplayForm from './isDisplayForm';
import tasks from './tasks';
var myReducer = combineReducers({
	isDisplayForm,
	tasks
});
export default myReducer;