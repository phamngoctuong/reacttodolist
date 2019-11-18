import React, { Component } from 'react';
class TaskSearchControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: 'ab'
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
	onClick = () => {
		this.props.searchKey(this.state.keyword)
	}
	render() {
		var {keyword} = this.state;
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="input-group">
					<input name="keyword" type="text" className="form-control" value={keyword} placeholder="Nhập từ khóa..." onChange={this.onChange} />
					<span className="input-group-btn">
						<button className="btn btn-primary" type="button" onClick={this.onClick}>
							<span className="fa fa-search mr-5"></span>Tìm
                        </button>
					</span>
				</div>
			</div>
		)
	}
}
export default TaskSearchControl;