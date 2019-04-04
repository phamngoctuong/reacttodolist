import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td></td>
                <td className="text-center">
                </td>
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