import React, { Component } from 'react';

class TaskItem extends Component{

    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

  render(){
    var { task, index } = this.props;  
    return(
        <tr>
            <td>{ index +1 }</td>
            <td>{ task.name }</td>
            <td className="text-center point">
                <span
                        className={ task.status === true ? 'table-danger' : 'table-success'}
                        onClick = { this.onUpdateStatus }
                >
                    { task.status === true ? 'Kích Hoạt' : 'Ẩn' }
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil-alt mr-1"></span>Sửa
                </button>
                &nbsp;
                <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick = {this.onDelete}
                >
                    <span className="fa fa-trash-alt mr-1"></span>Xóa
                </button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;