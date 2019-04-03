import {combineReducers} from 'redux';
import isDisplayForm from './isDisplayForm';
import tasks from './tasks';
import itemEditing from './itemEditing';
var myReducer = combineReducers({
	isDisplayForm,
	tasks,
	itemEditing
});
export default myReducer;