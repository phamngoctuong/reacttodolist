import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import {connect} from 'react-redux';
import * as actions from './actions/index';
import _ from 'lodash';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditting: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortStatus: 1
        }
    }
    onGenerateData = ()=> {
        var tasks = [
            {
                id: this.onGenerateID(),
                name: 'Khóa học lập trình RJ',
                status: true
            },
            {
                id: this.onGenerateID(),
                name: 'Khóa học lập trình PHP',
                status: true
            },
            {
                id: this.onGenerateID(),
                name: 'Khóa học lập trình JS',
                status: false
            },
        ];
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    };
    onToogleForm = () => {
        var {itemEditing} = this.props;
        if(itemEditing && itemEditing.id !== '') {
            this.props.onCloseForm();
        }else {
            this.props.onToogleForm();
        }
        this.props.onClearForm({
            id : '',
            name : '',
            status: false
        });
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    };
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        });
    };
    onSubmit = (data) => {
        var {tasks} = this.state;
        if(data.id !== '') {
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }else {
            data.id = this.onGenerateID();
            tasks.push(data);
        }
        this.setState({
            tasks: tasks,
            taskEditting: null
        });  
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    };
    onGenerateID() {
        return this.s4() + this.s4();
    };
    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    };
    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index,1);
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));   
    };
    onUpdate = (id) => {
        var {tasks} = this.state;
        // var index = this.findIndex(id);
        var index = _.findIndex(tasks,(task) => {
            return task.id === id;
        });
        var taskEditting = tasks[index];
        this.setState({
            taskEditting: taskEditting
        });
        this.onShowForm();
    };
    findIndex = (id) =>  {
        var result = -1;
        var {tasks} = this.state;
        tasks.forEach((task,index) => {
            if(task.id === id) {
                result = index;
            }
        });
        return result;
    };
    onFilter = (filterName,filterStatus) => {
        filterStatus = parseInt(filterStatus,10);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        })
    };
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        });
    };
    onSort = (sortBy,sortStatus) => {
        this.setState({
            sortBy: sortBy,
            sortStatus: sortStatus
        });
    };
    s4() {
        return Math.floor(Math.random()*0x1000000).toString(16);
    };
    render() {
        var {tasks, taskEditting, filter, keyword,sortBy,sortStatus} = this.state; 
        var {isDisplayForm} = this.props;
        if(filter) {
            if(filter.name) {
                if(filter.name) {
                    tasks = _.filter(tasks,(task)=> {
                        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                    });
                }
            }
            tasks = tasks.filter((task)=>{
                if(filter.status === -1) {
                    return task;
                }else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            });
        }
        if(keyword) {
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }
        if(sortBy === 'name') {
            tasks.sort((a,b)=>{
                if(a.name > b.name) return sortStatus;
                else if(a.name < b.name) return - sortStatus;
                else return 0;
            });
        }else {
            tasks.sort((a,b)=>{
                if(a.status > b.status) return -sortStatus;
                else if(a.status < b.status) return sortStatus;
                else return 0;
            });
        }
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <TaskForm/> 
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary mr-5" onClick={this.onToogleForm}>
                            <span className="fa fa-plus"></span>
                            Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.onGenerateData}>
                            Generate Data
                        </button>
                        <TaskControl onSearch = {this.onSearch} onSort = {this.onSort} sortBy = {sortBy} sortStatus = {sortStatus}/>
                        <TaskList onFilter = {this.onFilter} onUpdate = {this.onUpdate} onDelete = {this.onDelete} onUpdateStatus = {this.onUpdateStatus}/>
                    </div>
                </div>
            </div>
        );
    }
}
var mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onToogleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearForm: (task) => {
            dispatch(actions.editTask(task))  
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);