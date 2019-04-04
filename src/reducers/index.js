import {combineReducers} from 'redux';
import isDisplayForm from './isDisplayForm';
import tasks from './tasks';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
var myReducer = combineReducers({
	isDisplayForm,
	tasks,
	itemEditing,
	filterTable
});
export default myReducer;