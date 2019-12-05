import React, { Component } from 'react';
class SizeSetting extends Component {
    getSize(size) {
        this.props.onChangeSize(size);
    }
    render() {
        return (
        	<div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">fontSize: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className = "btn btn-default" onClick={()=>this.getSize(-2)}>Giảm</button>
                    <button type="button" className = "btn btn-default" onClick={()=>this.getSize(2)}>Tăng</button>
                </div>
            </div>
    );
  }
}
export default SizeSetting;