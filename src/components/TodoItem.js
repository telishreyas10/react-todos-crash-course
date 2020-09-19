import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    //functions
    getTodoItemStyle = () => {
        return ({textDecoration : this.props.todoItem.completed ? 'line-through' : 'none'});
    }

    // changeTaskStatus = (e) =>{
    //     this.props.todoItem.completed = !this.props.todoItem.completed; 
    // }

    //render
    render() {
        const {id,title} = this.props.todoItem;
        return (
            <div style={this.getTodoItemStyle()}>
                <input type="checkbox" checked={this.props.todoItem.completed} onChange={this.props.changeTaskStatus.bind(this,id)}/>
                {this.props.todoItem.title} 
                <input type="button" value="X" onClick={this.props.removeTask.bind(this,id)}/>
            </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

export default TodoItem
