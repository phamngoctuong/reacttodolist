import React, { Component } from 'react';
class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			status: false
		}
	}
	onChange = (event) => {
		var target, name, value;
		target = event.target;
		name = target.name;
		value = target.value;
		this.setState({
			[name]: value
		});
	}
	onClose = () => {
		this.props.onClose()
	}
	onSave = (event) => {
		event.preventDefault();
		this.props.onSave(this.state)
	}
	componentWillMount() {
		var {taskEdit} = this.props;
		if(taskEdit) {
			this.setState({
				id: taskEdit.id,
				name: taskEdit.name,
				status: taskEdit.status
			});
		}
	}
	render() {
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">Thêm Công Việc
							<span className="fa fa-times-circle text-right" onClick={this.onClose}></span>
					</h3>
				</div>
				<div className="panel-body">
					<form>
						<div className="form-group">
							<label>Tên :</label>
							<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
						</div>
						<label>Trạng Thái :</label>
						<select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
							<option value={false}>Ẩn</option>
							<option value={true}>Kích Hoạt</option>
						</select>
						<div className="text-center">
							<button type="submit" className="btn btn-warning" onClick={this.onSave}>
								<span className="fa fa-plus mr-5"></span>Lưu Lại
								</button>&nbsp;
								<button type="button" className="btn btn-danger" onClick={this.onClose}>
								<span className="fa fa-close mr-5"></span>Hủy Bỏ
								</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default TaskForm;