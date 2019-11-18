import React, { Component } from 'react';
class TaskItem extends Component {
    onEdit = (id) => {
        this.props.onEdit(id)
    }
    render() {
        var {index, task} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className="label label-info">{task.status === true ? 'Kích hoạt' : 'Ẩn' }</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={()=>this.onEdit(task.id)}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
export default TaskItem;