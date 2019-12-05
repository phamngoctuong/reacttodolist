import React, { Component } from 'react';
class Result extends Component {
	getColor() {
		return{
				backgroundColor: this.props.color
			}
	}
	resullColor() {
		return {
			color: this.props.color,
			fontSize: this.props.fontSize
		}
	}
	render() {
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 style={this.resullColor()}  className="panel-title">color: {this.props.color} - fontSize: {this.props.fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <p style={this.resullColor()}>Loading 99,99% ...</p>
                    </div>
                </div>
            </div>
		);
	}
}
export default Result;