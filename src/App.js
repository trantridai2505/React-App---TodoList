import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component{
  render(){
    return(
      <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
        
            <div className="content">
                {/* Form */}
                <TaskForm />

                <div className="content--right">
                    <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-1"></span>Thêm Công Việc
                    </button>

                    {/* <div className="search--sort--content"> */}
                        {/* Search Sort */}
                        <Control />
                    {/* </div> */}

                    <div className="content--table">
                        {/* TaskList - Table */}
                        <TaskList />
                    </div>
                </div>
            </div>
          </div>
    );
  }
}

export default App;
