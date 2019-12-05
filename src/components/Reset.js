import React, { Component } from 'react';
class Reset extends Component {
	resetfc = ()=>{
		this.props.resetFC(true);
	}
	render() {
		return(
			<div className="panel panel-default">
				<div className="panel-footer">
	                <button type="button" className="btn btn-default" onClick={this.resetfc}>Resett</button>
	            </div>
            </div>
		);
	}
}
export default Reset;