import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tasks: []  // id, name, status
    }
  }
  
  // save data which don't disappear when we F5
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
    }
  }

  onGenerateData = () =>{
    var tasks = [
      {
        id: this.generateID(),
        name: 'Go swimming',
        status: true
      },

      {
        id: this.generateID(),
        name: 'Go to school',
        status: false
      },
    ];

    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //create random ID
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  render(){

    var {tasks} = this.state ; // var tasks = this.state.tasks
    
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

                    <button 
                        type="button" 
                        className="btn btn-danger ml-2"
                        onClick = {this.onGenerateData}
                        >
                        Generate Data
                    </button>

                    {/* <div className="search--sort--content"> */}
                        {/* Search Sort */}
                        <Control />
                    {/* </div> */}

                    <div className="content--table">
                        {/* TaskList - Table */}
                        <TaskList tasks = { tasks } />
                    </div>
                </div>
            </div>
          </div>
    );
  }
}

export default App;
