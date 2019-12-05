import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';
class TaskControl extends Component {
    render() {
    	var {onSort, sortBy, sortStatus} = this.props;
        return (
            <div className="row mt-15">
                <TaskSearchControl onSearch= {this.props.onSearch}/>
                <TaskSortControl onSort = {onSort} sortBy = {sortBy} sortStatus = {sortStatus}/>
            </div>
        );
    }
}
export default TaskControl;