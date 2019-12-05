import React, { Component } from 'react';
class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: ['red','blue','green','#ccc']
		}
	}
	setColor(color) {
		return {
				backgroundColor: color
		}
	}
	getColor(color) {
		this.props.receiveColor(color);
	}
	render() {
		let elmcolor = this.state.colors.map((color,index)=>{
			return(
				<span key={index} style={this.setColor(color)} className={this.props.color===color?'active':''} onClick={()=>this.getColor(color)}></span>
			);
		});
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">ColorPicker</h3>
                    </div>
                    <div className="panel-body">
                    	{elmcolor}
                    </div>
                </div>
            </div>
		);
	}
}
export default ColorPicker;