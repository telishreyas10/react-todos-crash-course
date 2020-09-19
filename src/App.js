import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  //state
  state = {
    todos: [
      {
        id: 1,
        title: 'Write essay',
        completed: true
      },
      {
        id: 2,
        title: 'Clean house',
        completed: false
      },
      {
        id: 3,
        title: 'Take out trash',
        completed: true
      }
    ],
    value:''
  }

  //methods

  changeTaskStatus = (id) => {
    // this.props.todoItem.completed = !this.props.todoItem.completed; 
    console.log(id);
    this.setState(
      {
        todos: (this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
        ))
      }
    );
  }

  removeTask = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }
    );
  }

  onEnter = (e) =>{
    if(e.key === 'Enter' && e.target.value !== ''){
      const newTodo = {
        id : Math.random(),
        title : e.target.value,
        completed : false
      }
      this.setState({
        todos :[...this.state.todos,newTodo]
      });
      this.state.value = '';
    }
  } 

  //render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" style={ip2} placeholder="Add items in your list" onKeyDown={this.onEnter}/>
          <h1>My Todos list</h1>
          <div style={{ textAlign: 'left' }}>
            <Todos todos={this.state.todos} changeTaskStatus={this.changeTaskStatus} removeTask={this.removeTask}></Todos>
          </div>
        </header>
      </div>
    );
  }
}

//style
const ip2 = {
  borderRadius: '25px',
  width: '450px',
  height: '10px',
  padding: '20px',
  fontSize: '20px'
}

export default App;
