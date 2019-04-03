import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    };
    componentWillMount() {
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        }
    };
    onCloseForm = () => {
        this.props.onCloseForm();
    };
    onSaveTask = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
    };
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    render() {
        if(!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm Công Việc
                        <span
                            className="fa fa-times-circle text-right"
                            onClick = {this.props.onCloseForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type = "text"
                                className = "form-control"
                                name = "name"
                                value = {this.state.name}
                                onChange={ this.onHandleChange }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className = "form-control"
                            name = "status"
                            value = {this.state.status}
                            onChange={this.onHandleChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" onClick={this.onSaveTask}>
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
var mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing : state.itemEditing
    }
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);