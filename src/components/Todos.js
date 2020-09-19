import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    //render
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todoItem={todo} changeTaskStatus={this.props.changeTaskStatus} removeTask={this.props.removeTask}></TodoItem>
        ));
    }
}

//Prop Types
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
