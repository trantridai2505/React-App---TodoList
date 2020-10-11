import React, { Component } from 'react';


class TaskForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            status: false ,
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name ==='status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();   // tranh bi F5 khi nhan nut Luu
        this.props.onSubmit(this.state);
        // Cancel & CloseForm
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    onCloseForm = () =>{
        this.props.onCloseForm();
    }

  render(){
    return(
    <div className="content--left">
        <div className="left--title">
            <h5 className="title-h5">
                Thêm Công Việc
                <a href = 'true'><span 
                    className="fa fa-times-circle"
                    onClick = {this.onCloseForm}
                ></span></a>
            </h5>
        </div>

        <div className="left--body">
            <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = "name"
                            value = { this.state.name }
                            onChange = { this.onChange }
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                        className="form-control" 
                        required="required"
                        name = "status"
                        value = { this.state.status }
                        onChange = { this.onChange }
                    >
                        <option value={ true }>Kích Hoạt</option>
                        <option value={ false }>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button
                            type="submit" 
                            className="btn btn-warning"
                        >Thêm</button>&nbsp;

                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick = {this.onClear}
                        >Hủy Bỏ</button>
                    </div>
            </form>
        </div>
    </div>
    );
  }
}

export default TaskForm;