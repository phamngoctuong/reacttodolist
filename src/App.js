import React, { Component } from 'react';
import './App.css';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDisplay: false,
			taskEdit: null,
			tasks: [
				{
					id: 1,
					name: 'Lap Trinh PHP',
					status: false
				},
				{
					id: 2,
					name: 'Lap Trinh ReactJs',
					status: true
				}
			]
			,filter: {
				nane: '',
				status: -1
			}
			,keyword: '',
			sort: {
				name: '',
				status: 1
			}
		}
	}
	openTask = () => {
		var {isDisplay} = this.state;
		this.setState({
			isDisplay: !isDisplay
		});
	}
	onClose = () => {
		this.setState({
			isDisplay: false
		});
	}
	onShow = () => {
		this.setState({
			isDisplay: true
		});
	}
	componentWillMount() {
		var tasks = JSON.parse(localStorage.getItem('tasks'));
		this.setState({
			tasks: tasks
		});
	}
	randomString(length) {
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
			if (! length) {
					length = Math.floor(Math.random() * chars.length);
			}
			var str = '';
			for (var i = 0; i < length; i++) {
					str += chars[Math.floor(Math.random() * chars.length)];
			}
			return str;
	}
	onSave = (task) => {
		var {tasks} = this.state;
		if(task.id !== "") {
			var index = this.findindex(task.id);
			task.status = task.status === 'true' ? true : false;
			tasks[index] = task
		}else {
			task.id = this.randomString(8);
			task.status = task.status === 'true' ? true : false;
			tasks.push(task);			
		}
		this.setState({
			tasks: tasks
		});
		localStorage.setItem('tasks',JSON.stringify(tasks));
	}
	findindex(id) {
		var {tasks} = this.state;
		var result = -1;
		tasks.forEach((task,index)=>{
			if(task.id === id) {
				return result = index
			}
		});
		return result;
	}
	onEdit = (id) => {
		var {tasks} = this.state;
		var index = this.findindex(id);
		this.setState({
			taskEdit: tasks[index]
		});
		this.onShow();
	}
	onFilterTable = (filter) => {
		var statusnumber = parseInt(filter.status,10);
		this.setState({
			filter: {
				name: filter.name,
				status: statusnumber
			}
		})
	}
	searchKey = (keyword) => {
		this.setState({
			keyword: keyword
		});
	}
	Sort = (name,value) => {
		this.setState({
			sort: {
				name: name,
				status: value
			}
		});
	}
	render() {
		var {tasks, taskEdit,filter,keyword,sort} = this.state;
		if(filter) {
			if(filter.name) {
				tasks = tasks.filter((task)=>{
					return  task.name.toLocaleLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
				});
			}
			if(filter) {
				tasks = tasks.filter((task)=>{
					if(filter.status === -1) {
						return tasks;
					}else {
						return task.status === (filter.status === 1 ? true : false);
					}
				});
			}
		}
		if(keyword) {
			tasks = tasks.filter((task)=>{
				return  task.name.toLocaleLowerCase().indexOf(keyword.toLowerCase()) !== -1;
			});
		}
		if(sort.name === 'name') {
			tasks.sort((a,b)=>{
				if(a.name > b.name) return sort.status
				else if(a.name < b.name ) return - sort.status
				else return 0;
			});
		}else {
			tasks.sort((a,b)=>{
				if(a.status > b.name) return sort.status
				else if(a.name < b.name ) return - sort.status
				else return 0;
			});
		}
		return (
			<div className="row">
				<div className="text-center">
					<h1>Quản Lý Công Việc</h1>
				</div>
				<div className={this.state.isDisplay === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
					{this.state.isDisplay === true ? <TaskForm onClose={this.onClose} onSave={this.onSave} taskEdit={taskEdit}></TaskForm> : ""}
				</div>
				<div className={this.state.isDisplay === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
					<button type="button" className="btn btn-primary" onClick={this.openTask}>
						<span className="fa fa-plus mr-5"></span>Thêm Công Việc
				</button>
					<TaskControl  searchKey={this.searchKey} Sort={this.Sort}></TaskControl>
					<TaskList tasks={tasks} onEdit={this.onEdit} onFilterTable={this.onFilterTable}></TaskList>
				</div>
			</div>
		);
	}
}
export default App;