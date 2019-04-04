import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    showStatus(){
        return (
           <span
                className={ this.props.task.status ? 'label label-danger' : 'label label-info' }
            >{ this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn' }</span>
        );
    };
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">{this.showStatus()}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                     >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
var mapStateToProps = (state) => {

};
var mapDispatchToProps = (dispatch, props) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);