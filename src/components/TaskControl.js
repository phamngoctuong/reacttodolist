import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';
class TaskControl extends Component {
    searchKey = (keyword) => {
        this.props.searchKey(keyword)
    }
    Sort = (name,value) => {
        this.props.Sort(name,value)
    }
    render() {
        return (
            <div className="row mt-15">
                <TaskSearchControl searchKey={this.searchKey}></TaskSearchControl>
                <TaskSortControl Sort={this.Sort}></TaskSortControl>
            </div>
        );
    }
}
export default TaskControl;